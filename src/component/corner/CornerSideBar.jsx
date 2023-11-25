import React, { useState } from "react";
import './style.scss';

const CornerSideBar = () => {
  const [showInformation, setShowInformation] = useState(false);

  const toggleInformation = () => {
    setShowInformation(!showInformation);
  };

  const [showSkiils, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkiils);
  };

  return (
    <div className="main-container">
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0YnsN-En1g485qO2RdP4QYaRG2HXGdx-iA&usqp=CAU" alt="User Profile" />
          </div>
          <h4>Nikhil Chouhan</h4>
          <p>Full Stack Developer</p>
          <h4 style={{ color: "red" }}>Coding Ninja's Student</h4>
        </div>
        <div className="profile__card">
          <div className="card__header" >
            <h4 onClick={toggleInformation}>Information</h4>
          </div>
          {showInformation && (
            <div className="card__content">
              <p>Name: Nikhil Chouhan</p>
              <p>Nationality: India </p>
              <p>Born: 2 May 2000</p>
            </div>
          )}
          <div className="card__header" >
            <h4 onClick={toggleSkills}>Skill's</h4>
          </div>
          {showSkiils && (
          <div className="card__content">
            <h4 style={{ color: "blue" }}>Technical Skills</h4>
            <p>(Programming languages, Full Stack Developer)</p>
            <h4 style={{ color: "blue" }}>Soft Skills</h4>
            <p>(Communication, Teamwork, Problem-solving)</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CornerSideBar;
