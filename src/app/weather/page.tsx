"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { format, set } from "date-fns";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function WeatherApp() {
  const AllMetrics = ["metric", "imperial"];

  const [metric, setMetric] = useState("metric");

  const [error, setError] = useState(false);

  const [SearchCity, setSearchCity] = useState("Hyderabad") as any;

  const [recentSearches, setRecentSearches] = useState([]) as any;

  const [loading, setLoading] = useState(true);

  const [weatherData, setWeatherData] = useState() as any;

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((location) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location.data.city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=${metric}`
          )
          .then((res) => {
            console.log(res.data);
            setWeatherData({ ...location.data, weather: res.data });
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(recentSearches.length);
    if (localStorage.length > 1) {
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    } else {
      localStorage.getItem("recentSearches");
    }
  }, [recentSearches]);

  const makeApiCall = () => {
    setRecentSearches([SearchCity, ...recentSearches]);
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=${metric}`
      )
      .then((res) => {
        setLoading(false);
        let weather = res.data;
        setWeatherData({ weather });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return loading && !weatherData ? (
    <div
      className="h-screen w-screen flex justify-center items-center text-white"
      style={{
        backgroundImage: `url("https://source.unsplash.com/1920x1080/?nature")`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-4xl">Finding weather for your location...</h2>
    </div>
  ) : (
    <div
      className="text-black w-screen h-screen overflow-none flex flex-row"
      style={{
        backgroundImage: `url("https://source.unsplash.com/1920x1080/?${weatherData.weather.name},nature,dark")`,
        backgroundSize: "cover",
      }}
    >
      <div className=" flex w-full md:w-[60%] h-full flex-col justify-end">
        <div className="flex flex-row mb-28 md:ml-40 items-center justify-center md:justify-start text-white">
          <h1 className="text-4xl md:text-8xl ">
            {Math.round(weatherData.weather.main.temp)}&deg;
          </h1>
          <div className="flex flex-col justify-end ml-4">
            <h1 className="text-2xl md:text-4xl font-bold w-full text-justify ">
              {weatherData.weather.name}
            </h1>
            <h1 className="text-lg md:text-xl font-bold">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              {format(new Date(), "eeee, do MMM yy")}
            </h1>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ml-10 items-center justify-self-center"
            src={`https://openweathermap.org/img/wn/${weatherData.weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex fixed md:relative md:w-[40%] backdrop-blur-md bg-black/40 shadow-md shadow-gray-800 h-full flex-col translate-x-[300%] md:translate-x-0">
        <div className="flex flex-row m-4 h-10 items-center">
          <input
            type="text"
            className="bg-transparent h-full p-4 border-r-0 w-[90%] text-white border-2"
            placeholder="Search City"
            value={SearchCity}
            onChange={(e) => {
              if (error) setError(false);
              setSearchCity(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                makeApiCall();
              }
            }}
          />
          <div
            className="bg-white h-full p-2 w-[10%] items-center flex justify-center cursor-pointer"
            onClick={makeApiCall}
          >
            <FontAwesomeIcon icon={faSearch} className="text-black h-5" />
          </div>
        </div>
        {error && (
          <div className="bg-red-600 p-4 m-4 text-white text-2xl border-white border-2">
            Unable to find City, try again!
          </div>
        )}

        <div className="text-white mx-8 my-2 text-xl text-justify">
          <h2 className="text-4xl underline">Weather Details</h2>

          <div className="flex flex-row justify-between py-1">
            <h2>Temperature</h2>
            <h2>{weatherData.weather.main.temp}&deg;C</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Feels Like</h2>
            <h2>{weatherData.weather.main.feels_like}&deg;C</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Max Temperature</h2>
            <h2>{weatherData.weather.main.temp_max}&deg;C</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Min Temperature</h2>
            <h2>{weatherData.weather.main.temp_min}&deg;C</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Pressure</h2>
            <h2>{weatherData.weather.main.pressure} millibars</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Humidity</h2>
            <h2>{weatherData.weather.main.humidity} g.m-3</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Visibility</h2>
            <h2>{weatherData.weather.visibility} meters</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Wind Speed</h2>
            <h2>{weatherData.weather.wind.speed} km/h</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Wind Degree</h2>
            <h2>{weatherData.weather.wind.deg} &deg;</h2>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h2>Clouds</h2>
            <h2>{weatherData.weather.clouds.all}</h2>
          </div>

          <div className="flex flex-row justify-between py-1">
            <h2>Sunrise </h2>
            <h2>
              {format(
                new Date(weatherData.weather.sys.sunrise * 1000),
                "hh:mm a"
              )}
            </h2>
          </div>

          <div className="flex flex-row justify-between py-1">
            <h2>Sunset</h2>{" "}
            <h2>
              {format(
                new Date(weatherData.weather.sys.sunset * 1000),
                "hh:mm a"
              )}
            </h2>
          </div>
        </div>
        <div className="text-white mx-8 my-2 overflow-auto">
          <h2 className="text-2xl underline">Recent Search</h2>
          {recentSearches.map((city: String, index: number) => {
            return (
              <div
                key={city + index.toString()}
                onClick={() => {
                  setSearchCity(city);
                  makeApiCall();
                }}
                className="flex flex-row justify-between py-1 cursor-pointer"
              >
                {city}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
