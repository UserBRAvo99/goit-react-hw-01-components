// імпортую компопенти до основного файлу App, щоб поєднати всі компоненти та зарендити їч за один раз
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics'
import FriendList from './Friends/Friends';
import TransactionHistory from './Transactions/Transactions';

// імпортую данні
import user from '../userData/user.json'
import data from '../statisticsData/data.json'
import friends from '../friendsData/friends.json'
import transactions from '../transactionsData/transactions.json'
// console.log(statistics);


// компонент - функція
export const App = () => {
  return (
    <div
      // інлайнові стилі для діва обгортки
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <Profile {...user} /> */}
      {/* передаю дані(пропси) для компонент-функцію (одразу роблю деструктуритзацію) */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* передаю дані (пропси), окремо передаю заголовок та дату для рендингу */}
      <Statistics title="Upload stats" stats={data} />
      {/* передаю дані (пропси) */}
      <FriendList friends={friends} />
      {/* передаю дані (пропси) */}
      <TransactionHistory items={transactions} />
    </div>
  );
};
