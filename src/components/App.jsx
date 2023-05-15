import Profile from './profile'




export const App = (props) => {
  const user = {
    username: 'Petra Marica',
    tag: 'pmarica',
    location: 'Salvador, Brasil',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats: {
      followers: 1000,
      views: 2000,
      likes: 3000,
    },
  };
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
};
