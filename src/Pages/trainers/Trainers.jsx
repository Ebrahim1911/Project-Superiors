import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "./Trainer";
import "./trainers.css";
function Trainers() {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
        perspiciatis perferendis placeat atque pariatur qui quis architecto
        quasi aperiam autem. Necessitatibus nostrum.
      </Header>
      <section className="trainers">
        <div className="container trainers-container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  {
                    icon: <BsInstagram />,
                    link: socials[0],
                  },
                  {
                    icon: <AiOutlineTwitter />,
                    link: socials[1],
                  },
                  {
                    icon: <FaFacebookF />,
                    link: socials[2],
                  },
                  {
                    icon: <FaLinkedinIn />,
                    link: socials[3],
                  },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Trainers;
