
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Shared/Header/NavBar';
import Home from '../src/pages/Home/Home'
import MyPortfolio from '../src/pages/MyPortfolio/MyPortfolio'
import Dashboard from '../src/pages/Dashboard/Dashboard'
import Login from '../src/pages/Login/Login'
import SignUp from '../src/pages/Register/SignUp';
import NotFound from '../src/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="">
        <NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>} > </Route>
          <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>} > </Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>} > </Route>
          <Route path='/login' element={<Login></Login>} > </Route>
          <Route path='/signup' element={<SignUp></SignUp>} > </Route>
         
          <Route path='*' element={<NotFound></NotFound>} > </Route>


        </Routes>
        </NavBar>
        
    </div>
  );
}

export default App;
