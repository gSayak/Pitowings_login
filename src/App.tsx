import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<ForgetPassword />} />
          </Routes>
        </Router>
      </div>
    </Layout>
  );
}

export default App;
