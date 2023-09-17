import FAQS from "../../component/FAQS";
import MainHeader from "../../component/MainHeader";
import Programs from "../../component/Programs";
import Testimonials from "../../component/Testimonials";
import Values from "../../component/Values";
import Footer from "../../component/Footer";
import "./home.css";
function Home() {
  return (
    <div>
      <MainHeader />
      <Programs />
      <Values />
      <FAQS />
      <Testimonials />
    </div>
  );
}

export default Home;
