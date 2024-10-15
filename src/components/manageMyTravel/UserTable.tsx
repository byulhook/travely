import { css } from '@emotion/react';
import { ApplicationUserData } from '@/types/travelDataType';
import Profile from '@/components/Profile';
import FiledBtn from '@/components/FiledBtn';

interface UserTableProps {
  data: ApplicationUserData[];
}

const UserTable = ({ data }: UserTableProps) => {
  const statusData = [
    { status: 'waiting', data: data.filter((user) => user.status === 'waiting') },
    { status: 'approval', data: data.filter((user) => user.status === 'approval') },
    { status: 'refusal', data: data.filter((user) => user.status === 'refusal') },
  ];

  return (
    <table css={tableWrapper}>
      <thead>
        <tr>
          <th>유저</th>
          <th>MBTI</th>
          <th>연락처</th>
          <th>이메일</th>
          <th>신청날짜</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {statusData.map(({ status, data }) =>
          data.map((user, index) => (
            <tr key={`${status}-${index}`}>
              <td css={{ minWidth: '80px' }}>
                <div>
                  <Profile url={user.userProfileImage} size={'40px'} /> {user.userName}
                </div>
              </td>
              <td>{user.mbti}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.userId}</td>
              <td>20{user.appliedAt}</td>
              <td css={{ minWidth: '145px' }}>
                {status === 'waiting' ? (
                  <div>
                    <div css={{ marginRight: '5px' }}>
                      <FiledBtn color={'#4A95F2'} size={'sm'}>
                        승인
                      </FiledBtn>
                    </div>
                    <FiledBtn color={'#d7d7d7'} size={'sm'}>
                      거절
                    </FiledBtn>
                  </div>
                ) : status === 'approval' ? (
                  '승인'
                ) : (
                  '거절'
                )}
              </td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  );
};

export default UserTable;

const tableWrapper = css`
  width: 100%;
  & thead {
    background-color: #ededed;
  }
  & th,
  td {
    text-align: center;
    height: 45px;
    vertical-align: middle;
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
