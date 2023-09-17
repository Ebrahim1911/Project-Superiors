import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import Card from "../../UI/card";
import { plans } from "../../data";
import { Link } from "react-router-dom";
import "./plan.css";
function Plans() {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero
        laboriosam corrupti sit, sed assumenda debitis dicta blanditiis quaerat.
      </Header>
      <section className="plans">
        <div className="container plans-container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card className="plan" key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{price}</h1>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p className={!available ? "disabled" : ""} key={index}>
                      {feature}
                    </p>
                  );
                })}
                <Link to="/contact" className="btn lg">
                  Choose Plan
                </Link>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Plans;
