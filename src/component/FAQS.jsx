import SectionHead from "./SectionHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";
function FAQS() {
  return (
    <section className="faqs">
      <div className="container faqs">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs-wrapper">
          {faqs.map((faq) => {
            return (
              <FAQ
                key={faq.id}
                answer={faq.answer}
                question={faq.question}
                id={faq.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQS;
