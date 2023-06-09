import Profile from './components/profile/profile'
import Statistics from './components/statistics/statistics'
import FriendList from './components/friends/friendList';
import TransactionHistory from 'components/transaction/transactionHistory';
import user from './assets/user.json'
import data from './assets/data.json'
import friends from './assets/friends.json'
import transactions from './assets/transactions.json'



 function App() {
   return (
     <>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
     />

       <Statistics title="Upload stats" stats={data} />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </>
   );
 
};
export default App