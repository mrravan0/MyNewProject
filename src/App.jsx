import { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { DataProvider } from './Context/Context';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import ContactPage from './Pages/ContactPage/ContactPage';
import About from './Pages/About/About';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details';
import CheckOut from './Components/CheckOut/CheckOut';
import Account from './Components/Account/Account';
import WhishList from './Components/WhishList/WhishList';
function App() {
  const location = useLocation();
  const status = location.pathname !== '/signUp' && location.pathname !== '/login';
  const select = location.pathname !== '/';
  return (
    <Fragment>
      <Header status={status} selected={select} />
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<Account />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkOut' element={<CheckOut />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productDetails' element={<Details />} />
          <Route path='/whishList' element={<WhishList />} />
        </Routes>
      </DataProvider>
      <Footer />
    </Fragment>
  )
}

export default App