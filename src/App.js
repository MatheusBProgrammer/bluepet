import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Appointments from "./pages/Appointments";
import About from "./pages/About";
import Logo from "./components/layout/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <BrowserRouter>
        <Navbar />
        <RoutesWithTransitions />
      </BrowserRouter>
    </div>
  );
}

function RoutesWithTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
