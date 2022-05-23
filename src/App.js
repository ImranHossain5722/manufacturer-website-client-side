import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Shared/Header/NavBar';
import Home from '../src/pages/Home/Home';
import MyPortfolio from '../src/pages/MyPortfolio/MyPortfolio';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import Login from '../src/pages/Login/Login';
import SignUp from '../src/pages/Register/SignUp';
import NotFound from '../src/Shared/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Blogs from './pages/Blogs/Blogs';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import MyProfile from './pages/Dashboard/MyProfile/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';

function App() {
  return (
    <div className="">
        <NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>} > </Route>
          <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>} > </Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} > 
          
          <Route index element={<MyProfile></MyProfile>}></Route>

          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          
          </Route>
          <Route path='/blogs' element={<Blogs></Blogs>} > </Route>
          <Route path='/login' element={<Login></Login>} > </Route>
          <Route path='/signup' element={<SignUp></SignUp>} > </Route>
         
          <Route path='*' element={<NotFound></NotFound>} > </Route>


        </Routes>
        <Footer/>
        </NavBar>
        
    </div>
  );
}

export default App;