import { useState } from 'react';
import { signInWithGoogle } from 'your-google-auth-library'; 
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    // Handle your login logic here
    // You can use email and password state values to authenticate the user
  };
  const handleGoogleLogin = () => {
    // Handle your Google authentication logic here
    signInWithGoogle(); // Replace with your actual Google authentication function
  };
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleGoogleLogin}>Log In with Google</button>
    </div>
  );
}
