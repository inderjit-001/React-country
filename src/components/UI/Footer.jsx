import React from "react";
import footerContact from "../../api/footerApi.json";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
const footerIcon = {
  FaMapMarkerAlt: <FaMapMarkerAlt />,
  FaPhoneAlt: <FaPhoneAlt />,
  FaEnvelope: <FaEnvelope />,
};

function Footer() {
  return (
    <footer className="footer-section">
      <div className=" container grid grid-three--cols">
        {footerContact.map((contact, index) => {
          const { icon, title, details } = contact;
          return (
            <div key={index} className="footer-contact">
              <div className="icon">{footerIcon[icon]}</div>
              <div className="contact-details ">
                <h3>{title}</h3>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
