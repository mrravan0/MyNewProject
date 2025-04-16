import { Fragment } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='signUp' element={<SignUp />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App