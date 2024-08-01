import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext' 

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className=' text-white text-3xl w-full h-full justify-center flex flex-col gap-4'>
        <h2>Login</h2>
        <input  className=' text-2xl p-2 text-black'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='Username'  />
        {" "}
        <input 
        className='text-2xl p-2 text-black'  
        type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='Password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login