import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/Login'
import './App.css';
import Signup from './components/Signup';
import Dashboard from "./components/Dashboard/Dashboard";

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App;
