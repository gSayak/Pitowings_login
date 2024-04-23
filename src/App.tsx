import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from './components/newUser/NewUser';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Layout from './Layout';
import Home from './components/Home';
import PrivateRoute from './utils/PrivateRoutes';
import Table from './components/Table/Table';


function App() {
  return (
    <Layout>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<NewUser />} />
            <Route path="/forgot" element={<ForgetPassword />} />
            <Route path='/table' element={< Table />} />
            <Route element={<PrivateRoute />}>
              <Route element={<Home />} path='/home' />
            </Route>
          </Routes>
        </Router>
      </div>
    </Layout>
  );
}

export default App;
