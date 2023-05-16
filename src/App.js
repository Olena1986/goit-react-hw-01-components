import Profile from './components/profile'
import Statistics from './components/statistics.jsx'
import user from './assets/user.json'



 function App() {
   return (
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
     />
   );
 
};
export default App