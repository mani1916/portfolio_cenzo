import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/80957358-4d56-4540-ba37-e48d3192096d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-[black] text-[#fb3] ">
            Contact
          </p>
          <p className=" py-4">
            Submit the form below or shoot me an email -
            lmanikandan031@gmail.com
          </p>
        </div>
        <input
          className="border-b-2 border-black p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 border-b-2 border-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className=" p-2 border-b-2 border-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className=" border-2 hover:border-black-600 bg-black text-white rounded-lg px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
