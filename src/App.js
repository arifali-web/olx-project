import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './comp/navbar';
import About from './comp/About';
import Contact from './comp/section';
import Home from './comp/Home';
import Footer from './comp/footer';
import Cartpage from './comp/cart-page';
import SignIn from './comp/Sign-in';
import SignUp from './comp/Sing-up';




function App() {



  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path="/product" element={<Cartpage />} />
          <Route path='/sign-in'  element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );

}

export default App;

