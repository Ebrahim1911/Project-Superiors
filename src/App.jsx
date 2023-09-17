import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import Gallery from "./Pages/gallary/Gallery";
import Plans from "./Pages/plans/Plans.jsx";
import Trainers from "./Pages/trainers/Trainers";
import NotFound from "./Pages/notFound/NotFound";
import NavPar from "./component/NavPar";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <NavPar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
