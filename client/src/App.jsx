import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return <BrowserRouter>
   {/* header */}
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
}
