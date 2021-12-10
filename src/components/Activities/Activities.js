import React from "react";
import "../../sass/style.css";
import { Activity } from "..";
import { connect } from "react-redux";

const Activities = ({activities, timeframe}) => {
  return (
    <div className="activities">
      {activities.map((activity) => (
        <Activity key={activity._id} activity={activity} timeframe={timeframe} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.data,
    timeframe: state.timeframe
  }
}

export default connect(mapStateToProps)(Activities);
