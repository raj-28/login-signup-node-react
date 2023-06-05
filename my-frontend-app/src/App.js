import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './component/auth/login/Login';
import Signup from './component/auth/signup/Signup';
import { Navbar } from './component/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
