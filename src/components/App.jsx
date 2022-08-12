import { Profile } from './Profile/Profile';
import userInfo from 'data/user.json';

export const App = () => {
  return (
    <>
      <Profile {...userInfo} />
    </>
  );
};
