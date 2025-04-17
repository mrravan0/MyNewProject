import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import { Fragment } from 'react';
function App() {
  const location = useLocation();
  const status = location.pathname !== '/signUp';
  return (
    <Fragment>
      <Header status={status} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App