import React, { useState } from 'react';
import './LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login successful');
    }
  };

  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div className='container-1'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
         
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder='Email'
          />
        </div>
        <div>
        
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder='Password'
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <a href='iccapp' className='button'> Login</a>
        
      </form>
    </div>
  );
};

export default LoginForm;