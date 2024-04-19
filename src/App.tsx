import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from './components/newUser/NewUser';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<NewUser/>} />
          <Route path="/forgot" element={<ForgetPassword />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
