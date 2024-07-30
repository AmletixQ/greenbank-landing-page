import Icon1 from "assets/icons/Ellipse-1.svg";
import Icon2 from "assets/icons/Ellipse-2.svg";
import Icon3 from "assets/icons/Ellipse-3.svg";
import FeedbackCard from "components/FeedbackCard/FeedbackCard";
import { IFeedbackCard } from "types/feedback.types";
import "./Feedback.scss";

const cards: IFeedbackCard[] = [
  {
    name: "Hadid Khan",
    position: "UIUX Designer",
    comment:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    icon: Icon1,
  },
  {
    name: "Wade Warren",
    position: "Web Designer",
    comment:
      "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
    icon: Icon2,
  },
  {
    name: "Hadid Khan",
    position: "UIUX Designer",
    comment:
      "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking.",
    icon: Icon3,
  },
];

const Feedback = () => {
  return (
    <section className="feedback">
      {cards.map((card) => (
        <FeedbackCard {...card} />
      ))}
    </section>
  );
};

export default Feedback;
