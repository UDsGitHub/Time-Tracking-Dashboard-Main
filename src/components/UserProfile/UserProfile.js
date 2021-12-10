import React from "react";
import "../../sass/style.css";
import { useDispatch } from "react-redux";
import { getDaily, getWeekly, getMonthly } from "../../actions/activities";

const UserProfile = ({ userName, profilePic }) => {
  const dispatch = useDispatch();

  return (
    <div className="user-profile">
      <div className="profile">
        <img src={profilePic} alt={userName} className="profile-pic" />
        <div>
          <p>Report for</p>
          <h1 className="userName">{userName}</h1>
        </div>
      </div>
      <ul className="time-frames">
        <li>
          <button onClick={() => dispatch(getDaily())}>Daily</button>
        </li>
        <li>
          <button onClick={() => dispatch(getWeekly())}>Weekly</button>
        </li>
        <li>
          <button onClick={() => dispatch(getMonthly())}>Monthly</button>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
