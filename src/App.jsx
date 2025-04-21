import { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import ContactPage from './Pages/ContactPage/ContactPage';
import About from './Pages/About/About';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import Details from './Components/Details/Details';
import photo1 from './Assets/Images/Details/photo1.png';
import photo2 from './Assets/Images/Details/photo2.png';
import photo3 from './Assets/Images/Details/photo3.png';
import photo4 from './Assets/Images/Details/photo4.png';
import photo5 from './Assets/Images/Details/photo5.png';
function App() {
  const location = useLocation();
  const status = location.pathname !== '/signUp';
  return (
    <Fragment>
      <Header status={status} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/productDetails'
          element={
            <Details
              images={
                [photo1, photo2, photo3, photo4, photo5]
              }
              texts={
                ['Havic HV G-92 Gamepad',
                  'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.'
                ]
              }
              price={'$192.00'} />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App