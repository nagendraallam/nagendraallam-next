"use client";

import axios from "axios";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {

    axios.post("https://server.nagendraallam.com/api/v1/visit", JSON.stringify({
      userAgent: window.navigator.userAgent,
      location: window.location.href,
      referrer: document.referrer || "--",
      cookiesEnabled: navigator.cookieEnabled,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      timeZoneOffset: new Date().getTimezoneOffset(),
      ip: "",
      ip_data: {
        error: "No IP found",
      },
    })
    );

    if (process.env.NEXT_PUBLIC_DEV === "PRODUCTION") {
      try {
        axios
          .get(
            `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
          )
          .then((res) => {
            axios.post(
              "https://server.nagendraallam.com/api/v1/visit",
              JSON.stringify({
                userAgent: window.navigator.userAgent,
                location: window.location.href,
                referrer: document.referrer || "--",
                cookiesEnabled: navigator.cookieEnabled,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                timeZoneOffset: new Date().getTimezoneOffset(),
                ip: res.data.ip,
                ip_data: res.data,
              })
            );
          })
          .catch((err) => {
            axios.post("https://server.nagendraallam.com/api/v1/visit", {
              userAgent: window.navigator.userAgent,
              location: window.location.href,
              referrer: document.referrer || "--",
              cookiesEnabled: navigator.cookieEnabled,
              screenWidth: window.screen.width,
              screenHeight: window.screen.height,
              timeZoneOffset: new Date().getTimezoneOffset(),
              ip: "",
              ip_data: {
                error: "No IP found",
              },
            });
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <div className="w-screen font-['MyWebFont'] text-[#fbf1c7] flex flex-col md:flex-row justify-between items-center md:border-b-2 border-[#fbf1c7]">
      <div className="flex flex-col justify-center mt-4 md:mt-8 md:mb-8 md:ml-10 text-2xl">
        <a
          href="/"
          className="border-2 border-[#fbf1c7] border-dashed pl-2 pr-2 cursor-pointer hover:text-black hover:border-black"
        >
          <h1>NA</h1>
        </a>
      </div>
      <div className="justify-center h-full items-center md:justify-end md:mr-10 flex w-full border-b-2 md:border-b-0">
        <ul className="flex flex-row items-center mt-2 md:mt-0 justify-center text-md md:text-2xl">
          <a
            href="/"
            className={` ${pathname === "/" && "underline"
              } text-center pl-4 pr-4 pt-1 pb-1 border-2 hover:underline border-transparent hover:border-2 md-hover:border-white cursor-pointer`}
          >
            Home
          </a>
          <a
            href={"/about"}
            className={`  ${pathname === "/about" && "underline"
              } text-center pl-4 pr-4 pt-1 pb-1 border-2 hover:underline border-transparent hover:border-2 md-hover:border-white cursor-pointer`}
          >
            About
          </a>
          <a
            href="/projects"
            className={`  ${pathname === "/projects" && "underline"
              } text-center pl-4 pr-4 pt-1 pb-1 border-2 hover:underline border-transparent hover:border-2 md-hover:border-white cursor-pointer`}
          >
            Projects
          </a>
          <a
            href="/contact"
            className={` ${pathname === "/contact" && "underline"
              } text-center pl-4 pr-4 pt-1 pb-1 border-2 hover:underline border-transparent hover:border-2 md-hover:border-white cursor-pointer`}
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
}
