import React from "react";
import email from "../assets/email-svgrepo-com.svg";
import phone from "../assets/phone-svgrepo-com.svg";
import location from "../assets/location-pin-svgrepo-com.svg";
import facebook from "../assets/facebook-176-svgrepo-com.svg";
import instagram from "../assets/instagram-167-svgrepo-com.svg";
import twitter from "../assets/twitter-svgrepo-com.svg";
import pintrest from "../assets/pintrest-svgrepo-com (1).svg";

const ContactPage = () => {
  return (
    <div className="flex items-center py-6 flex-col justify-center p-3">
      <h1 className="text-[30px] font-[Playfair-Display]">Contact page</h1>
      <div>
        <div className="flex-col gap-32 p-2">
          <div>
            <img src={email} />
            <p className="text-2xl font-[Inconsolata]">Email us</p>
            <p>info@homefeels.com</p>
          </div>
          <div>
            <img src={phone} />
            <p className="text-2xl font-[Inconsolata]">Phone</p>
            <p>1234567890</p>
          </div>
          <div>
            <img src={location} />
            <p className="text-2xl font-[Inconsolata]">Location</p>
            <p>Location,location</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={pintrest} alt="" />
        </div>
      </div>

      <div>
        <label htmlFor="FirstName" id="First-Name">FirstName</label>
        <input type="text" name="FirstName" id="FirstName"/>
        <label htmlFor="LastName" id="Last-Name">LastName</label>
        <input type="text" name="LastName" id="LastName" />
      </div>
    </div>
  );
};

export default ContactPage;
