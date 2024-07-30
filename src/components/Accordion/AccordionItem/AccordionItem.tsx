import { FC } from "react";
import { IAccordionItem } from "types/accordion.types";
import "./AccordionItem.scss";

const AccordionItem: FC<IAccordionItem> = ({ title, summary }) => {
  return (
    <details className="accordion-item">
      <summary>{title}</summary>
      <p className="dark-text">{summary}</p>
    </details>
  );
};

export default AccordionItem;
