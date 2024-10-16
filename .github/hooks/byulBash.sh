#!/bin/sh

# Check if .env file exists and byulBash is set to true
if [ -f .env ]; then
    byul_bash=$(grep '^byulBash=' .env | cut -d '=' -f2)
    if [ "$byul_bash" != "true" ]; then
        exit 0
    fi
else
    exit 0
fi

COMMIT_MSG_FILE="$1"
COMMIT_SOURCE="$2"

# ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_color() {
    printf "${1}${2}${NC}\n"
}

read_json_value() {
    json_file="$1"
    key="$2"
    sed -n "s/^.*\"$key\": *\"\\(.*\\)\".*$/\\1/p" "$json_file" | sed 's/,$//'
}

format_commit_message() {
    commit_msg_file="$1"
    branch_name=$(git symbolic-ref --short HEAD)
    branch_type=""
    issue_number=""

    json_file=$(git rev-parse --show-toplevel)/byul.config.json
    if [ ! -f "$json_file" ]; then
        print_color "$YELLOW" "Warning: byul.config.json not found. Using default format."
        byul_format="{type}: {commitMessage} (#{issueNumber})"
    else
        byul_format=$(read_json_value "$json_file" "byulFormat")
        if [ -z "$byul_format" ]; then
            print_color "$YELLOW" "Warning: byulFormat not found in config. Using default format."
            byul_format="{type}: {commitMessage} (#{issueNumber})"
        fi
    fi

    if ! echo "$branch_name" | grep -q "/"; then
        print_color "$YELLOW" "Branch name does not contain '/'. Skipping formatting."
        return 1
    fi

    parts=$(echo "$branch_name" | tr "/" "\n")
    num_parts=$(echo "$parts" | wc -l)
    if [ $num_parts -ge 2 ]; then
        branch_type=$(echo "$parts" | sed -n "$(($num_parts-1))p")
    else
        branch_type=$(echo "$parts" | sed -n "1p")
    fi

    last_part=$(echo "$branch_name" | sed 's/.*\///')
    issue_number=$(echo "$last_part" | sed -n 's/.*-\([0-9]\+\)$/\1/p')

    first_line=$(sed -n '1p' "$commit_msg_file")

    if [ -n "$branch_type" ]; then
        formatted_msg=$(echo "$byul_format" |
            sed "s/{type}/$branch_type/g" |
            sed "s/{commitMessage}/$first_line/g" |
            sed "s/{issueNumber}/$issue_number/g")

        sed -i.bak "1s/.*/$formatted_msg/" "$commit_msg_file"
        rm "${commit_msg_file}.bak"
        print_color "$GREEN" "✔ Commit message formatted successfully!"
        print_color "$BLUE" "New commit message: $formatted_msg"
        return 0
    else
        print_color "$YELLOW" "Branch type could not be determined. Skipping formatting."
        return 1
    fi
}

COMMIT_MSG_FILE="$1"
COMMIT_SOURCE="$2"

# Check if the commit is a merge, squash, or amend
if [ "$COMMIT_SOURCE" = "merge" ] || [ "$COMMIT_SOURCE" = "squash" ] || [ "$COMMIT_SOURCE" = "commit" ]; then
    print_color "$BLUE" "Merge, squash, or amend commit detected. Skipping formatting."
    exit 0
fi

if format_commit_message "$COMMIT_MSG_FILE"; then
    exit 0
else
    print_color "$RED" "❌ Failed to format commit message."
    exit 1
fi