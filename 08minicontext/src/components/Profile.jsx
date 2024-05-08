import React, { useContext } from 'react'
import UserContext from '../context/userContext'

export default function Profile() {
    const { User } = useContext(UserContext)
    if (!User) return <div>Plaese Login</div>
    return <div>welcome {User.Username}</div>
}
