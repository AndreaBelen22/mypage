import React from "react";
import { Link } from "react-router-dom";
import { FontAwesome } from "react-icons";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <ul className="footer-ul">
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaEnvelope />
          </li>
        </ul>
      </div>
    </div>
  );
}
