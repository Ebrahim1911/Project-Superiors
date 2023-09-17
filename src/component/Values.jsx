import image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/card";
function Values() {
  return (
    <section className="values">
      <div className="container values-container">
        <div className="values-left">
          <div className="values-image">
            <img src={image} alt="Values Image" />
          </div>
        </div>
        <div className="values-right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            similique illo voluptas!
          </p>
          <div className="values-wrapper">
            {values.map((value) => {
              return (
                <Card className="values-value" key={value.id}>
                  <span>{value.icon}</span>
                  <h4>{value.title}</h4>
                  <small>{value.desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
