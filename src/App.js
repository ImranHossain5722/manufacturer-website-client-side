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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUser from './pages/Dashboard/AllUser/AllUser';
import SingleItem from './Components/SingleManufaItem/SingleItem';
import ManufacturersItems from './Components/HomeComponents/ManufacturersItems';
import BlogDetails from '../src/pages/Blogs/BlogDetails';
import RequireAdmin from './Shared/RequireAdmin.js/RequireAdmin';
import AddAProduct from './pages/Dashboard/AddAProduct/AddAProduct';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders/ManageAllOrders'
// import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import AllItems from './pages/AllItems/AllItems';


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
          <Route path='users' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
          <Route path='AddAProducts' element={<RequireAdmin><AddAProduct></AddAProduct> </RequireAdmin>}></Route>
          <Route path='ManageAllOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='allItems' element={<RequireAdmin><AllItems></AllItems></RequireAdmin>} ></Route>

          {/* <Route path='ManageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route> */}
          
          </Route>
          <Route path='/blogs' element={<Blogs></Blogs>} > </Route>
          <Route path='/blogs/:id' element={<BlogDetails></BlogDetails>} ></Route>
          <Route path='/login' element={<Login></Login>} > </Route>
          <Route path='/signup' element={<SignUp></SignUp>} > </Route>
          <Route path='/manufacturersItems' element={<RequireAuth><ManufacturersItems></ManufacturersItems></RequireAuth>} ></Route>
          <Route path='/manufacturersItems/:id' element={<RequireAuth><SingleItem></SingleItem></RequireAuth>} ></Route>
         
          <Route path='*' element={<NotFound></NotFound>} > </Route>


        </Routes>
        <Footer></Footer>
        <ToastContainer/>
        </NavBar>
        
    </div>
  );
}

export default App;