import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
function FAQ({ question, answer, click }) {
  const [isAnswerShowing, setIsAnswerShowing] = useState();
  return (
    <>
      <article
        className="faq"
        onClick={() => setIsAnswerShowing((prev) => !prev)}
      >
        <div>
          <h4>{question}</h4>
          <button className="faq-icon">
            {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
      </article>
    </>
  );
}

export default FAQ;
