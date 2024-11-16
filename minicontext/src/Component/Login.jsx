// Login.js
import React, { useState, useContext } from 'react'; // Import `useContext` directly
import UserContext from '../Context/UserContext'; // Ensure path is correct

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const { setUser } = useContext(UserContext); // Access `setUser` from context
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
