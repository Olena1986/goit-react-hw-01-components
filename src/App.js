import Profile from './components/profile'
import Statistics from './components/statistics.jsx'
import user from './assets/user.json'
import data from './assets/data.json'



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
      <Statistics stats={data} />
    </>
   );
 
};
export default App