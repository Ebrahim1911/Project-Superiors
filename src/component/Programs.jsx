import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
function Programs() {
  return (
    <>
      <section className="programs">
        <div className="container programs-container">
          <SectionHead icon={<FaCrown />} title="Programs" />
          <div className="programs-wrapper">
            {programs.map((program) => {
              return (
                <Card className="programs-program" key={program.id}>
                  <span>{program.icon}</span>
                  <h4>{program.title}</h4>
                  <small>{program.info}</small>
                  <Link to={program.path} className="btn sm">
                    Learn More <AiFillCaretRight />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;
