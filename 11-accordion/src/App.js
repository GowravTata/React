import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((e, i) =>
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={i}
          title={e.title}
          // text={e.text}
          num={i}>
          {e.text}
        </AccordionItem>
      )}
    </div >);
}


function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  // const [isOpen, setCurOpen] = useState(false)

  function handleToggle() {
    // setCurOpen((isOpen) => !isOpen)
    onOpen(num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">
        {/* Test is replaced here from the text */}
        {children}
      </div>}
    </div>
  )
}
