import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return <div className="bg-gradient-to-t from-[#070707] to-[#221f35] min-h-screen">
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
  </div>;
}

export default App;
