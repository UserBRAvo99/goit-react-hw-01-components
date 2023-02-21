import PropTypes from 'prop-types'

function FriendList(friends) {
    console.log(friends);
    // friends.friends.map(friend => console.log(friend))
    return (
        <ul className="friendList">
            {friends.friends.map(({ id, avatar, name }) => {
                return (
                    <li className="item" key={id}>
                        <span className="status"></span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    )
    
}

export default FriendList

// avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png', name: 'Mango', isOnline: true, id: 1812