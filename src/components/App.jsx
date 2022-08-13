import { Profile } from './Profile/Profile';
import { Title } from './Title/Title';
import { Statistics } from './Statistics/Statistics';
import {userInfo, data } from 'data';

export const App = () => {
  return (
    <>
      <Title title="Task 1.1" />
      <Profile {...userInfo} />
      <Title title="Task 1.2" />
      <Statistics stats={data} title="Upload stats" />
    </>
  );
};
