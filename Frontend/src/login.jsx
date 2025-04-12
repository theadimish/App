import React, { useState } from 'react';
import Style from './Login.module.css';
import axios from 'axios';

const Login = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [formData, setFormData] = useState({
    loginUsername: '',
    loginPassword: '',
    email: '',
    regUsername: '',
    regPassword: '',
    regCountryCode: '+91',
    regMobile: ''
  });

  const handleToggleForm = (form) => {
    setActiveForm(form);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
        username: formData.loginUsername,
        password: formData.loginPassword
      });
      console.log('✅ Login Success:', res.data);
    } catch (err) {
      console.error('❌ Login Failed:', err.response?.data || err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
        email: formData.email,
        username: formData.regUsername,
        password: formData.regPassword,
        mobile: `${formData.regCountryCode}${formData.regMobile}`
      });
      console.log('✅ Registration Success:', res.data);
    } catch (err) {
      console.error('❌ Registration Failed:', err.response?.data || err.message);
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.toggleButtons}>
        <button onClick={() => handleToggleForm('login')}>Login</button>
        <button onClick={() => handleToggleForm('register')}>Register</button>
      </div>

      {activeForm === 'login' && (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label>Username</label>
          <input type="text" name="loginUsername" value={formData.loginUsername} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="loginPassword" value={formData.loginPassword} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      )}

      {activeForm === 'register' && (
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Username</label>
          <input type="text" name="regUsername" value={formData.regUsername} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="regPassword" value={formData.regPassword} onChange={handleChange} required />
          <label>Mobile Number</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select name="regCountryCode" value={formData.regCountryCode} onChange={handleChange} required>
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
            </select>
            <input type="tel" name="regMobile" placeholder="XXXXXXXXXX" value={formData.regMobile} onChange={handleChange} required />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Login;
