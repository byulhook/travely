import { css } from '@emotion/react';
import { ApplicationUserData } from '@/types/travelDataType';
import Profile from '@/components/Profile';
import FiledBtn from '@/components/FiledBtn';

interface UserTableProps {
  data: ApplicationUserData[];
}

const UserTable = ({ data }: UserTableProps) => {
  const statusData = [
    { state: 'waiting', data: data.filter((user) => user.state === 'waiting') },
    { state: 'approval', data: data.filter((user) => user.state === 'approval') },
    { state: 'refusal', data: data.filter((user) => user.state === 'refusal') },
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
        {statusData.map(({ state, data }) =>
          data.map((user, index) => (
            <tr key={`${state}-${index}`}>
              <td css={{ minWidth: '80px' }}>
                <div>
                  <Profile url={user.profile} size={'40px'} /> {user.name}
                </div>
              </td>
              <td>{user.mbti}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>20{user.applicationDate}</td>
              <td css={{ minWidth: '145px' }}>
                {state === 'waiting' ? (
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
                ) : state === 'approval' ? (
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
