import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Profile(props) {

    const { User } = useContext(UserContext)
    if (!User) return <div>please login</div>
    return <div>welcome {User.username} </div>
}
export default Profile
