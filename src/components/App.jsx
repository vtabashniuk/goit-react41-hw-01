import { Profile } from './Profile/Profile';
import { Title } from './Title/Title';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { userInfo, data, friends } from 'data';

export const App = () => {
  return (
    <>
      <Title title="Task 1.1" />
      <Profile {...userInfo} />
      <Title title="Task 1.2" />
      <Statistics stats={data} title="Upload stats" />
      <Title title="Task 1.3" />
      <FriendList friends={friends} />
    </>
  );
};
