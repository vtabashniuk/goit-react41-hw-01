import { Profile } from './Profile/Profile';
import { Title } from './Title/Title';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { userInfo, data, friends, transactions } from 'data';

export const App = () => {
  return (
    <>
      <Title title="Task 1.1" />
      <Profile {...userInfo} />
      <Title title="Task 1.2" />
      <Statistics stats={data} title="Upload stats" />
      <Title title="Task 1.3" />
      <FriendList friends={friends} />
      <Title title="Task 1.4" />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
