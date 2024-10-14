import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { Camera } from 'lucide-react';

import { textEllipsis } from '@/styles/GlobalStyles';

export interface FileUploadProps {
  files: File[];
  handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const FileUpload = ({ files, handleFileUpload, setFiles }: FileUploadProps) => {
  return (
    <>
      <Button
        type="button"
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 0.5rem;
          border: 2px dotted #afafaf;
          font-weight: bold;
        `}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <Camera
          css={css`
            margin-right: 0.5rem;
          `}
          size={20}
        />
        사진/동영상 첨부하기
      </Button>
      <input
        id="fileInput"
        type="file"
        multiple
        onChange={handleFileUpload}
        css={css`
          display: none;
        `}
      />
      <div
        css={css`
          display: flex;
        `}
      >
        {files.map((file, index) => (
          <div
            key={index}
            css={css`
              display: flex;
              align-items: center;
              font-size: 13px;
              justify-content: flex-start;
              padding: 0.5rem;
              width: 100px;
              color: #afafaf;

              button {
                margin-left: 0.5rem;
                cursor: pointer;
                color: #afafaf;
                font-size: 16px;
              }
            `}
          >
            <span css={textEllipsis(1)}>{file.name}</span>
            <button type="button" onClick={() => setFiles(files.filter((_, i) => i !== index))}>
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: medium;
  cursor: pointer;
`;

export default FileUpload;
