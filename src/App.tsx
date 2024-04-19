import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import NewUser from './components/newUser/NewUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgetPassword />} />
          <Route path ="/newuser" element={<NewUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
