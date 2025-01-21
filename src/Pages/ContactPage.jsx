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
    <div className="flex py-6 flex-col w-full">
      <h1 className="text-[50px] font-semibold font-[Playfair-Display] text-center pb-5">
        Contact Us
      </h1>
      <div className="w-full gap-20 flex items-center justify-evenly m-auto">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 p-2">
            <div className="flex gap-4 items-center">
              <img src={email} />
              <div>
                <p className="text-2xl font-[Inconsolata]">Email us</p>
                <p>info@homefeels.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={phone} />
              <div>
                <p className="text-2xl font-[Inconsolata]">Phone</p>
                <p>1234567890</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={location} />
              <div>
                <p className="text-2xl font-[Inconsolata]">Location</p>
                <p>Location,location</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={pintrest} alt="" />
          </div>
        </div>

        <form className="flex flex-col gap-3">
          <div className="flex gap-1 flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-80 border-2 text-md px-2 py-1"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-80 border-2 text-md px-2 py-1"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              className="w-80 border-2 text-md px-2 py-1"
            />
          </div>

          <div className="mt-3">
            <button className="border-[#E27D60] m-auto px-2 py-2 border-2 w-full rounded-md text-[#E27D60] text-lg font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
