import { IAccordionItem } from "types/accordion.types";
import "./Accordion.scss";
import AccordionItem from "./AccordionItem/AccordionItem";

const accordionItems: IAccordionItem[] = [
  {
    title: "What credit score do I need to apply for a credit card?",
    summary:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    title: "How can I apply for a credit card online?",
    summary:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    title: "Are there any annual fees associated with the credit card?",
    summary:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    title: "How long does it take to receive the credit card once approved?",
    summary:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    title: "How can I check my credit card balance and transactions?",
    summary:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    title: "What should I do if my credit card is lost or stolen?",
    summary:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    title: "Is my credit card information secure?",
    summary:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
];

const Accordion = () => {
  return (
    <div className="accordion">
      {accordionItems.map((accordion) => (
        <AccordionItem key={accordion.title} {...accordion} />
      ))}
    </div>
  );
};

export default Accordion;
