import React from "react";
import "./footer.css";

const Footer = () => (
  <footer>
    <div className="footer-image">
      <div className="img"><img src="https://cdn.pixabay.com/photo/2017/10/16/23/02/brooklyn-2858985_960_720.png" /></div>
      <div className="footer-holder">
        <p>Tessa group is commited to ensure the best experience to everyone. We are continue to working
          to improve our services, and we welcome any feedback, requests. If you wish to report an issue, please constact us at (832) 200-4899.
    </p>
        <ul className="social-media">
          <li> Twitter</li>
          <li> Facebook</li>
          <li> Gmail</li>
        </ul>
        <p className="copyright">&#9400; Copyright © 2020 Tessa, LLC. All rights reserved. Equal Housing Opportunity.</p>
      </div>
    </div>
  </footer>
)
export default Footer