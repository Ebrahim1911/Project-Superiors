import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import { nextSlide, prevSlide } from "../rtk/slices/SliderSlice";
import { useDispatch, useSelector } from "react-redux";
function Testimonials() {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  const { id, name, quote, job, avatar } = testimonials[slideIndex];
  return (
    <section className="testimonials">
      <div className="container testimonials-container">
        <SectionHead
          className="testimonials-head"
          icon={<ImQuotesLeft />}
          title="Testimonials"
        />

        <Card className="testimonial" key={id}>
          <div className="testimonial-avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial-quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial-title">{job}</small>
        </Card>

        <div className="testimonials-btn-container">
          <button
            className="testimonials-btn"
            onClick={() => dispatch(prevSlide(slideIndex - 1))}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials-btn"
            onClick={() => dispatch(nextSlide(slideIndex + 1))}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
