import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics'
import FriendList from './Friends/Friends';

import user from '../userData/user.json'
import data from '../statisticsData/data.json'
import friends from '../friendsData/friends.json'
// console.log(statistics);



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <Profile {...user} /> */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
};
