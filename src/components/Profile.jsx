import React from "react";
import { NavLink } from "react-router-dom";

const ProfileContent = () => {
  return (
    <>
      <div className="profile-container-content" data-aos="fade-right">
        <div className="dictoration-line">
          <div className="line"></div>
          <div className="dot"></div>
        </div>
        <div className="profileName">
          <h1>Hello, I'm Dheeraj Jaiswal, a ReactJS/Frontend Developer</h1>
        </div>
        <div>
          <h4>
            Passionate front-end web developer using React.js, JavaScript,
            HTML5 and CSS to build all aspects of
            the user experience and user interface for client-facing landing
            pages.
          </h4>
        </div>
        <div className="profile-btn">
          <NavLink to="/contact">
            <button>
              Get In Touch <i className="fa-solid fa-arrow-right"></i>
            </button>
          </NavLink>
         
            <a target="_blank" href="https://drive.google.com/file/d/1JZUqwz-m_OlEiYUJlumdhIqAjqWCYs-a/view?usp=sharing">Resume/CV</a>
         
        </div>
      </div>
    </>
  );
};

const ProfileImage = () => {
  return (
    <>
      <div className="profile-container-image" data-aos="fade-left">
        <div className="profile-image">
       
        </div>
        <div className="contact-link">
          <a target="_blank" href="https://www.linkedin.com/in/dheeraj-jaiswal-3b25a7156/">
            <div className="div-1">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </a>
          <a target="_blank" href="https://github.com/Dheeraj-Jaiswal780">
          <div className="div-2">
          <i class="fa-brands fa-github"></i>
          </div></a>
          <div className="div-3">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export { ProfileContent, ProfileImage };
