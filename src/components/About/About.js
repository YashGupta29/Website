import React from "react";
import "./About.css";

function About() {
  var bgstyle = {
    backgroundImage: "url(./images/3025.jpg)",
    height: "100vh",
  };
  return (
    <div className="About-bg" style={bgstyle}>
      <div className="About-textbox">
        <p>
          We are a small team of students who are enthusiastic developers. We
          are trying to create a better viable platform for students who want to
          learn but due to financial issues can't afford new books. We also want
          to help those who want to sell thier books which they don't need. We
          hope that you will find this platform usefull. We are always trying to
          make this platform better and better.
        </p>
      </div>
    </div>
  );
}
export default About;
