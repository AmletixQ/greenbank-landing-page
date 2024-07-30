import { IFeedbackCard } from "components/sections/Feedback/Feedback";
import Quotes from "assets/icons/quotes.svg";
import { FC } from "react";
import "./FeedbackCard.scss";

const FeedbackCard: FC<IFeedbackCard> = ({ name, position, icon, comment }) => {
  return (
    <div className="feedback-card">
      <div className="quote-container">
        <img src={Quotes} alt="Quotes" />
      </div>
      <p>"{comment}"</p>
      <div className="user">
        <img src={icon} alt={icon} />
        <div className="user-info">
          <h6>{name}</h6>
          <p className="dark-text">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
