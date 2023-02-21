import PropTypes from 'prop-types'
import css from '../Profile/Profile.module.css'

function Profile(prop) {
    // console.log(prop);

    const { username, tag, location, avatar, stats } = prop.user
    // console.log(username, tag, location, avatar, stats);

    return (<div className={css.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.followers}</span>
    </li>
  </ul>
</div>)
}

export default Profile

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}