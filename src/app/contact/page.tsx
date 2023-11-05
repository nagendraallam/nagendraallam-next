"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function ContactForm() {
  // get path from url in nextjs
  const router = useSearchParams();
  const path = router.get("success");

  return (
    <div className="flex flex-col md:flex-row overflow-auto ml-2 mr-2">
      <div className="text-center md:w-[40vw] md:flex md:flex-col md:justify-center">
        <h1 className="text-4xl underline mt-4">Contact</h1>
        <p className="text-xl mt-2">Get in touch with me</p>
        <h3 className="underline mt-1">Email</h3>
        <a href="mailto:hello@nagendraallam.com" className="font-sans">
          hello@nagendraallam.com
        </a>
        <h3 className="mt-1 underline">Phone</h3>
        <p className="font-sans">+91 - 9632106766</p>
      </div>
      <div className="text-center border-t-2 md:border-t-0 md:border-l-2 md:pl-10 md:pr-10 md:pb-10 h-fit m-2 md:w-[60vw]">
        <h2 className="text-2xl underline mt-4">Drop a message</h2>
        <p className="text-md mb-2">I will get back to you</p>
        <form
          className="flex flex-col text-white text-left"
          action="https://server.nagendraallam.com/api/v1/contact-message"
          method="get"
        >
          {path === "true" && (
            <div
              id="success-message"
              className="bg-green-500 border-2 p-2 text-center mb-2"
            >
              Your message has been sent successfully. I will get back to you
              soon.
            </div>
          )}

          <label>Name</label>
          <input
            className="text-black font-sans w-full h-10 text-xl p-2 rounded-sm"
            type="text"
            id="name"
            name="name"
          />
          <label className="mt-2">Email</label>
          <input
            className="text-black font-sans w-full h-10 text-xl p-2 rounded-sm"
            type="email"
            id="email"
            name="email"
          />
          <label className="mt-2">Subject</label>
          <input
            className="text-black font-sans w-full h-10 text-xl p-2 rounded-sm"
            type="text"
            id="subject"
            name="subject"
          />
          <label className="mt-2">Message</label>
          <textarea
            className="text-black font-sans w-full h-24 text-xl p-2 rounded-sm"
            id="message"
            name="message"
          ></textarea>
          <button className="border-2 p-2 mt-2" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
