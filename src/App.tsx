import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from './components/newUser/NewUser';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Navbar from './components/newUser/Navbar';

function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<NewUser />} />
            <Route path="/forgot" element={<ForgetPassword />} />
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
