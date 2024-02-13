import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FooterDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="footer-container" data-aos="fade-left">
        <div className="footer-profile-details">
          <div className="footer-porfile-div">
            <h1>Description..</h1>
          </div>
          <div>
            <h4>
            Passionate about front-end web developer using React.js and JavaScript. And Help Client/Company for business growth.
            </h4>
          </div>
       
        </div>
        <div className="footer-contact">
          <div className="footer-porfile-div">
            <h1>Contact</h1>
          </div>
          <div>
            <h4>Dheeraj Jaiswal</h4>
            <h4>+91 9670730420</h4>
            <h4>Zip/Postal Code - 274001</h4>
          </div>
        </div>
        <div className="footer-utility">
          <div className="footer-porfile-div">
            <h1>Utility Pages</h1>
          </div>
          <div>
            <h4>Instructions</h4>
            <h4>Style Guide</h4>
            <h4>Licenses</h4>
            <h4>Changelog</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterDetails;
