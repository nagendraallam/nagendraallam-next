import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function LayoutContainer({
  children,
  isMain,
}: {
  children: React.ReactNode;
  isMain?: boolean;
}) {
  if (isMain) return <div>{children}</div>;
  else
    return (
      <div
        className={
          "docbody overflow-hidden text-white w-screen h-[100dvh] flex flex-col justify-between bg-[#2e3192] "
        }
      >
        <Navbar />
        {children}
        <div className="bottom-0 left-0 text-2xl w-full z-10 mb-4 pt-2 border-t-2 border-[#83a598]">
          <h2 className="text-lg text-center mb-2">find me on :</h2>
          <div className="flex flex-row w-screen justify-evenly md:justify-center">
            <a href="https://discord.gg/QXU4yEub" target="_blank">
              <FontAwesomeIcon
                icon={faDiscord}
                className="mb-2 w-7 h-7 md:w-10 md:h-10 md:mr-4 md:ml-4 hover:border-2 cursor-pointer"
              />
            </a>
            <a href="https://github.com/nagendraallam" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="mb-2 w-7 h-7 md:w-10 md:h-10 md:mr-4 md:ml-4 hover:border-2 cursor-pointer"
              />
            </a>
            <a href="https://www.reddit.com/user/nagi-1998" target="_blank">
              <FontAwesomeIcon
                icon={faReddit}
                className="mb-2 w-7 h-7 md:w-10 md:h-10 md:mr-4 md:ml-4 hover:border-2 cursor-pointer"
              />
            </a>
            <a href="https://linkedin.com/in/nagendraallam" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="mb-2 w-7 h-7 md:w-10 md:h-10 md:mr-4 md:ml-4 hover:border-2 cursor-pointer"
              />
            </a>

            <a href="https://twitter.com/__nagendra__" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="mb-2 md:mr-4 md:w-10 md:h-10 md:ml-4 w-7 h-7 hover:border-2 cursor-pointer"
              />
            </a>

            <a href="mailto:hello@nagendraallam.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mb-2 w-7 h-7 md:w-10 md:h-10 md:mr-4 md:ml-4 hover:border-2 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    );
}
