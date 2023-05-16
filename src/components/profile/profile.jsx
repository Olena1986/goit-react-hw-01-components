import React from 'react';
import PropTypes from 'prop-types';
import { ProfilStyle } from './profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <ProfilStyle.Card>
      <ProfilStyle.Avatar>
        <img
          src={avatar}
          alt="User avatar"
          style={{ width: '100px', height: '100px', borderRadius: '50%', border: '2px solid black' }} 
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfilStyle.Avatar>

      <ProfilStyle.List>
        <ProfilStyle.Item>
          <ProfilStyle.Text>Followers</ProfilStyle.Text>
          <span>{followers}</span>
        </ProfilStyle.Item>
        <ProfilStyle.Item>
          <ProfilStyle.Text>Views</ProfilStyle.Text>
          <span>{views}</span>
        </ProfilStyle.Item>
        <ProfilStyle.Item>
          <ProfilStyle.Text>Likes</ProfilStyle.Text>
          <span className="quantity">{likes}</span>
        </ProfilStyle.Item>
      </ProfilStyle.List>
    </ProfilStyle.Card>
  );
};
Profile.propTypes = {
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
  })

}
export default Profile;