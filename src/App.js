import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/navbarfiles/Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import Event from "./pages/Event"
import RentalOrder from "./pages/RentalOrder"
import Team from "./pages/Team"
import ErrorPage from "./pages/ErrorPage"
// import Footer from "./pages/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/event" element={<Event />}/>
        <Route path="/booking" element={<RentalOrder />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
