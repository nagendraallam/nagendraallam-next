import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faSquareJs } from "@fortawesome/free-brands-svg-icons";

export default function page() {
  return (
    <div className="flex flex-col md:flex-row overflow-auto ml-2 mr-2">
      <div className="text-center font-sans p-2 md:w-[50vw] md:justify-center flex-col md:p-40 flex md:h-[80vh]">
        <h1 className="text-4xl font-bold mt-6">
          <u>Hey there👋</u>
        </h1>
        <p className="text-xl mt-4 font-thin text-justify border-b-2 md:border-b-0 md:text-2xl p-1">
          I&apos;m Nagendra Allam. Full Stack developer from Bengaluru, India. I
          make cool web and mobile apps. I&apos;m a huge fan of open source and
          love to contribute to it. I&apos;m currently working as a Full Stack
          Developer at
          <a
            href="https://www.modd.io"
            target="_blank"
            className="text-white hover:underline"
          >
            Modd.io
          </a>
          .
        </p>
        <div className="hidden w-full justify-center mt-4">
          <button className="border-2 w-fit pl-4 pr-4 pt-2 pb-2 text-bold text-lg">
            Download Resume
          </button>
        </div>
      </div>
      <div className="md:w-[50vw] md:text-2xl p-2 text-lg flex flex-col justify-center md:p-20">
        <h2>
          <u>Tech Stack:</u>
        </h2>
        <label className="text-sm md:text-lg">Languages</label>
        <div className="flex flex-row">
          <h2>Javascript, Typescript, Python, Kotlin, Swift, Go</h2>
        </div>
        <label className="text-sm md:text-lg mt-2">Frontend</label>
        <div className="flex flex-row">
          <h2>React, Svelte, Astro, HTML, CSS, jQuery, Preact</h2>
        </div>
        <label className="text-sm md:text-lg mt-2">Backend</label>
        <div className="flex flex-row">
          <h2>Node.js, Django, Flask, Laravel, Express.js</h2>
        </div>
        <label className="text-sm md:text-lg mt-2">Full Stack Frameworks</label>
        <div className="flex flex-row">
          <h2>Next.js, Nuxt.js, Gatsby.js, Sapper.js</h2>
        </div>
        <label className="text-sm md:text-lg mt-2">Mobile App</label>
        <div className="flex flex-row mb-4">
          <h2>React Native, Flutter, SwiftUI, Android Studio</h2>
        </div>
      </div>
    </div>
  );
}
