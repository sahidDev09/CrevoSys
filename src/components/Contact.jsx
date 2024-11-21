import { useRef } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zfc771m", "template_osqqjhn", form.current, {
        publicKey: "J-gfgRTIzlCl-V4wK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <Navbar />
      <section className="flex justify-center items-center min-h-screen">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-[600px] w-full bg-transparent border-2 p-[25px] pt-[30px] rounded-[8px] shadow-md m-[25px]">
          <p className="font-bold text-3xl text-center">Contact with us</p>
          <div className="mt-[20px]">
            <label>Full Name</label>
            <input
              name="from_name"
              className="mt-[8px] w-full h-[50px] bg-transparent border-2 border-white outline-none p-[15px] rounded-[6px]"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-[20px]">
            <label>Email Address</label>
            <input
              name="from_email"
              className="mt-[8px] w-full h-[50px] bg-transparent border-2 border-white outline-none p-[15px] rounded-[6px]"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-[20px]">
            <label>Your Message</label>
            <textarea
              name="message"
              className="h-[150px] resize-none mt-[8px] w-full bg-transparent border-2 border-white outline-none p-[15px] rounded-[6px]"
              id=""
              placeholder="Enter your message"></textarea>
          </div>
          <div className="items-center justify-center flex mt-[10px]">
            <button type="submit" value="send">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </svg>
                </div>
              </div>
              <span>Submit</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
