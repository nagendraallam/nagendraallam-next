import React from "react";

export default function NotFound() {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h1 className="text-xl md:text-4xl">404 : Page Not Found</h1>
      <h1 className="text-md md:text-xl">
        Cat-astrophe! The page you&apos;re hunting for is in stealth mode.
        Here&apos;s a cat that&apos;s not hiding.
      </h1>
      <img
        src="https://source.unsplash.com/random/?cat"
        alt="404 cat's also 404"
        className="h-44 w-44 border-2 mt-2 object-cover p-2"
      />

      <a href="/" className="mt-4 hover:text-blue-700 border-2 p-4">
        {" "}
        Go back home
      </a>
    </div>
  );
}
