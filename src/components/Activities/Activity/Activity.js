import React from "react";
import "../../../sass/style.css";
import threeDots from "../../../images/icon-ellipsis.svg";

const Activity = ({ activity, timeframe }) => {
  let time = activity.timeframes[timeframe];
  return (
    <div className="activity">
      <div className="top-bar">
        <p className="title">{activity.title}</p>
        <img src={threeDots} alt="" className="dotmenu" />
      </div>
      <div className="bottom-bar">
        <p className="current">{time.current}hrs</p>
        <p className="previous">
          Last {timeframe} - {time.previous}hrs
        </p>
      </div>
    </div>
  );
};

export default Activity;
