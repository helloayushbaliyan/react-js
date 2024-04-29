import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <>
            <div className="">
                <h1>login</h1>
                <input type="text"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    placeholder='username' />
                <input type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="password" />
                <button onClick={handleSubmit}>submit</button>
            </div>

        </>
    )
}
export default Login
