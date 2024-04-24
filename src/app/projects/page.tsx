"use client";

import React from "react";
import EmblaCarousel from "@/components/EmblaCarousel";

export default function page() {
  const list = [
    {
      name: "SnappiTech",
      link: "https://editor.snappi.tech",
      images: [
        "/images/snappi/snappi3.jpg",
        "/images/snappi/snappi1.jpg",
        "/images/snappi/snappi.jpg",

        "/images/snappi/snappi2.jpg",
      ],
      shortDesc: "Create Interactive Experience for the web",
      longDesc:
        "Making online interactive experiences is typically costly and time-consuming. Snappi’s no-code editor makes it a breeze to take static content such as images, video and audio and turn them into interactive adventures, complete with gamified functionality.",
    },
    {
      name: "Chris Ramsay Escape Room",
      link: "https://play.snappi.tech/chrisramsayescape",
      images: [
        "/images/snappi/snappi4.jpg",
        "https://www.youtube.com/embed/nNIoueZ-_Yo?si=hBJTkbST9ni3gTGg",
      ],
      shortDesc: "Interactive Experience",
      longDesc: "",
    },
    {
      name: "Moddio Game Engine 2",
      link: "https://github.com/moddio/moddio2",
      images: ["/images/moddio/moddio.png", "/images/moddio/moddio2.png"],
      shortDesc: "Game Engine",
      longDesc:
        "Moddio is a Multiplayer-First Game Engine. It has a built-in server-authoritative netcode, including snapshot interpolation and client-side reconciliation. It can support 50+ concurrent players or 300+ moving entities",
    },
    {
      name: "Modd.io",
      link: "https://modd.io",
      images: [
        "/images/moddio/moddio3.png",
        "/images/moddio/moddio4.png",
        "/images/moddio/moddio.png",
        "/images/moddio/moddio2.png",
      ],
      shortDesc: "No-code Platform",
      longDesc:
        "Moddio lets you make a multiplayer game without needing to know how to code in seconds! Create a game with drag-and-drop script, publish a game, and play with your friends. Our mission is to empower game creators to bring their imaginations to life.",
    },
    {
      name: "AskGPT",
      link: "https://github.com/nagendraallam/AskGPT",
      images: [
        "/images/projects/img1.png",
        "/images/projects/img2.png",
        "/images/projects/img3.png",
      ],
      shortDesc: "chatgpt integrated to your terminal for easier access",
      longDesc:
        "Askgpt is a Python package that allows users to interact with the OpenAI GPT-3 model directly from the terminal, providing quick and convenient access to powerful language processing capabilities.",
    },
  ];

  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="w-[100%] h-[100%] overflow-auto flex flex-col items-center">
      <h2 className="text-5xl mt-4">Portfolio</h2>
      <h5 className="mx-4">
        Profesh Level Unlocked. Get a glimpse of what I can do.
      </h5>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[100%] md:p-10">
        {list.map((project, index) => {
          let imgArr: any[] = [];
          project.images.forEach((img: string) => {
            if (img.includes("youtube")) {
              imgArr.push(
                <iframe
                  src={img}
                  title="video"
                  frameBorder={0}
                  allowFullScreen
                ></iframe>
              );
            } else imgArr.push(<img src={img} alt={img + " image "} />);
          });

          return (
            <div
              key={index + "_project"}
              className="border-2 border-dashed m-4 flex flex-col cursor-pointer "
            >
              <h1
                className="text-3xl p-4 cursor-pointer hover:underline"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
              >
                {project.name}
              </h1>
              <EmblaCarousel className slides={imgArr} options={OPTIONS} />
              <h2 className="p-4 text-xl">{project.shortDesc}</h2>
              <h3 className="p-4 text-lg">{project.longDesc}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
