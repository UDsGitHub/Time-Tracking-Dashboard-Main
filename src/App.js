import "./sass/style.css";
import React from "react";
import { UserProfile, Activities } from "./components/index";
import { useDispatch } from "react-redux";
import { getDaily } from "./actions/activities";


function App() {
  const dispatch = useDispatch();

  dispatch(getDaily());

  return (
    <>
      <div className="AppBody">
        <main className="layout-container">
          <UserProfile
            userName="Jeremy Robinson"
            profilePic="https://i.ibb.co/M18sGHP/image-jeremy.png"
            alt="image-jeremy"
          />
          <Activities className="activities-container"/>
        </main>
      </div>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Udochukwu Amaefule</a>.
      </footer>
    </>
  );
}

export default App;
