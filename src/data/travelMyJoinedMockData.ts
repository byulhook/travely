export const travelMyJoinedData = [
  {
    travelTitle: '대한민국 고궁 투어',
    guideInfo: {
      userProfileImg: 'https://example.com/guideProfile.jpg',
      userName: '가이드 손성오',
      userEmail: 'guide@example.com',
    },
    travelTeam: {
      travelStartDate: '2025-01-25',
      travelEndDate: '2025-01-28',
      personLimit: 7,
      approvedMembersMbti: {
        mbti: ['ENFP', 'ISTJ', 'ENTJ'],
      },
    },
    currentUserStatus: {
      userId: 'seong5@gmail.com',
      status: 'approved', // 현재 사용자의 상태
    },
    reviewWritten: true, // 리뷰 작성 여부
  },
  {
    travelTitle: '부산 국밥 투어',
    guideInfo: {
      userProfileImg: 'https://example.com/guideProfile2.jpg',
      userName: '가이드 박철수',
      userEmail: 'guide2@example.com',
    },
    travelTeam: {
      travelStartDate: '2025-02-10',
      travelEndDate: '2025-02-13',
      personLimit: 5,
      approvedMembersMbti: {
        mbti: ['INFP', 'ENTP'],
      },
    },
    currentUserStatus: {
      userId: 'seong5@gmail.com',
      status: 'waiting', // 현재 사용자의 상태
    },
    reviewWritten: false, // 리뷰 작성 여부
  },
  {
    travelTitle: '제주 올레길 트레킹',
    guideInfo: {
      userProfileImg: 'https://example.com/guideProfile3.jpg',
      userName: '가이드 김영희',
      userEmail: 'guide3@example.com',
    },
    travelTeam: {
      travelStartDate: '2025-03-01',
      travelEndDate: '2025-03-04',
      personLimit: 6,
      approvedMembersMbti: {
        mbti: ['ISFJ', 'ESTJ', 'ENFJ', 'ISTP'],
      },
    },
    currentUserStatus: {
      userId: 'seong5@gmail.com',
      status: 'refused', // 현재 사용자의 상태
    },
    reviewWritten: false, // 리뷰 작성 여부
  },
];
