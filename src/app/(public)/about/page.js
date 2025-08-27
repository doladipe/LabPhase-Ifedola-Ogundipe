import React from "react";

const page = () => {
  return (
    <div className=" mt-15 min-h-screen flex flex-col md:flex-row ">
      {/* Left Side  */}
      <div className="md:w-1/2">
        <h1 className="text-7xl font-semibold text-white ">
          We Are <br /> The Most Sophisticated Drone Team in Africa
        </h1>
        <p className="text-white mt-4">
          Aerial Advantage Global also AAG trading as is a leading data and
          technology company, with a diverse spectrum of services dedicated to
          improving efficiency across agriculture, engineering, and media
          industries with the provision of professional services in Mapping,
          Geospatial Intelligence, Data Management, Farm Management.
        </p>

        <a href="/services">
          <button className="mt-8 hover:scale-105 transition bg-gradient-to-r from-red-400 to-green-400 px-5 py-3 rounded-3xl">
            Explore Services
          </button>
        </a>
        <a href="https://wa.me/2348056065358/?text=I'm%20inquiring%20about%20your%20service">
          <button className="mt-8 hover:scale-105 transition bg-none border ml-6 text-white border-gray-500 px-5 py-3 rounded-3xl">
            Contact Us
          </button>
        </a>

        <div className=" flex gap-15 mt-10 ">
          <p className="text-white px-9 text-sm ">Area Mapped</p>
          <p className="text-white text-sm ">Clients</p>
        </div>
        <div className=" flex gap-18 mt-2 ">
          <p className="text-[#a8ec34] animate-pulse text-2xl ">+125,000 Ha</p>
          <p className=" text-[#a8ec34] animate-pulse text-2xl ">+30</p>
        </div>
      </div>

      {/* Right Side  */}
      <div className=" ">
        {" "}
        <img
          className="animate- mt-15 ml-10 w-full rounded-2xl max-w-xl"
          style={{ animationDuration: "3s" }}
          src="/m4.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
