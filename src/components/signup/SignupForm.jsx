import React, { useState } from 'react';
import './Signupform.css'
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signup successful');
    }
  };

  const validateForm = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div className='container-1'>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <div>
         
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password'
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Link to="/iccapp">
        <button>SignUp</button>
      </Link>
       
      
      </form>
    </div>
  );
};

export default SignupForm;