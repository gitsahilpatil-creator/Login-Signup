import { useState } from 'react'
import './App.css'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Sign Up</button>
      {isLogin ? <Login></Login> : <SignUp></SignUp>}
    </div>
  );
}

export default App
