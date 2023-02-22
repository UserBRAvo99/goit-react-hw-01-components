import PropTypes from 'prop-types'

import style from './Friends.module.scss'

function FriendList({friends}) {
    return (
        <ul className={style.friendList} >
            {friends.map(({ id, avatar, name,isOnline}) => {
                return (
                    <li className={style.item} key={id}>
                        <span className={isOnline ? style.isOnline : style.isOffline} ></span>
                        <img className={style.img} src={avatar} alt="User avatar" />
                        <p className={style.nameFriend} >{name}</p>
                    </li>
                )
            })}
        </ul>
    )
    
}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
}))
}

export default FriendList
