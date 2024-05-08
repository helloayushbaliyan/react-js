import React, { useContext, useState } from 'react'

import UserContext from '../context/userContext'

export default function Login(props) {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ Username, Password })
    }
    return (
        <>
            <div className="">
                <h2>Login</h2>
                <input
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text" placeholder='username' />
                <input
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text" placeholder='password' />
                <button onClick={handleSubmit}>submit</button>

            </div>
        </>
    )
}
