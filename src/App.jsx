import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-t from-[#070707] to-[#221f35] h-screen">
        <Routes>
          {/* Define route for Home */}
          <Route path="/" element={<Home />} />
          {/* Define route for Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
