import React from "react";

const page = () => {
  return (
    <div className=" bg-[url(/nih.jpg)] bg-center bg-contain rounded-4xl ">
      <div className="mx-auto  max-w-6xl flex flex-col justify-center items-center   ">
        <h1 className=" text-3xl font-bold bg-gradient-to-r from-red-900 to-green-400 bg-clip-text text-transparent">
          SERVICES
        </h1>
        <h1 className="text-5xl font-black mt-5 text-white ">
          Aerial Data At Your Fingertips
        </h1>
        <p className="mt-4 text-[#dff1e5] text mb-10">
          Accurate and world class Geospatial Data at the click of a button{" "}
        </p>
      </div>
      <div className="mt-5 mb-5 mx-auto  max-w-6xl flex flex-col justify-center  items-center sm:flex-row space-y-3 gap-x-10">
        <div className="hover:scale-105 transition border-[#434345] bg-[#1f202184] shadow-2xs shadow-[#434345] px-10 py-10 rounded-4xl border-1">
          <div className="">
            <div className=" ">
              <img
                className="h-40 w-40 mb-3 ml-17 rounded-3xl "
                src="/Aimage.png"
                alt=""
              />
            </div>
            <h1 className=" text-1xl text-center font-bold text-white">
              Aerial Imaging and Topographic Survey{" "}
            </h1>

            <p className="mt-7 text-[#ffffff] text-sm mb-10">
              Accurate aerial surveys deliver reliable <br /> data for planning,
              inspection, and <br /> confident infrastructure development.
            </p>
            <h1 className=" text-1xl font-bold text-white">Learn More </h1>
          </div>
        </div>
        <div className=" hover:scale-105 transition border-[#434345] bg-[#1f20218a] shadow-2xs shadow-[#434345] px-10 py-10 rounded-4xl border-1">
          <div className="">
            <div className=" ">
              <img
                className="h-40 w-40 mb-3 ml-12 rounded-4xl "
                src="/newig.jpg"
                alt=""
              />
            </div>
            <h1 className=" text-1xl text-center font-bold text-white">
              Progress Monitoring{" "}
            </h1>

            <p className="mt-7 text-[#ffffff] text-sm mb-10">
              We deliver project monitoring with <br /> detailed reports,
              creative drone <br /> visuals, and essential documentation.
            </p>
            <h1 className=" text-1xl font-bold text-white">Learn More </h1>
          </div>
        </div>
        <div className=" hover:scale-105 transition border-[#434345] bg-[#1f202172] shadow-2xs shadow-[#434345] px-10 py-10 rounded-4xl border-1">
          <div className="">
            <div className=" ">
              <img
                className="h-40 mb-3 ml-14 rounded-3xl w-40 "
                src="/volimg.jpg"
                alt=""
              />
            </div>
            <h1 className=" text-1xl text-center font-bold text-white">
              Volumetric Analysis{" "}
            </h1>

            <p className="mt-7 text-[#ffffff] text-sm mb-10">
              We provide accurate, cost-effective <br /> stockpile volumetrics,
              monitoring, and <br /> cut-and-fill analysis for construction
              planning.
            </p>
            <h1 className=" text-1xl font-bold text-white">Learn More </h1>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 mx-auto  max-w-6xl flex flex-col justify-center  items-center sm:flex-row space-y-3 gap-x-10">
        <div className="hover:scale-105 transition border-[#434345] bg-[#1f202171] shadow-2xs shadow-[#434345] px-10 py-10 rounded-4xl border-1">
          <div className="">
            <div className=" ">
              <img
                className="h-40 w-40 mb-3 ml-17 rounded-3xl "
                src="/spray.jpg"
                alt=""
              />
            </div>
            <h1 className=" text-1xl text-center font-bold text-white">
              Crop Spraying & Plant Health Monitoring{" "}
            </h1>

            <p className="mt-7 text-[#ffffff] text-sm mb-10">
              We deliver precision spraying, crop <br /> health imaging, yield
              forecasting, and <br /> replanting insights for optimized farming.
            </p>
            <h1 className=" text-1xl font-bold text-white">Learn More </h1>
          </div>
        </div>
        <div className=" hover:scale-105 transition border-[#434345] bg-[#1f202182] shadow-2xs shadow-[#434345] px-10 py-10 rounded-4xl border-1">
          <div className="">
            <div className=" ">
              <img
                className="h-40 w-40 mb-3 ml-15 rounded-4xl "
                src="/insta10.jpg"
                alt=""
              />
            </div>
            <h1 className=" text-1xl text-center font-bold text-white">
              Damage Assessment{" "}
            </h1>

            <p className="mt-7 text-[#ffffff] text-sm mb-10">
              Drones provide rapid, detailed damage <br /> assessment, enabling
              safer inspections, <br />
              faster decisions, and reduced restoration costs.
            </p>
            <h1 className=" text-1xl font-bold text-white">Learn More </h1>
          </div>
        </div>
        <div className=" hover:scale-105 transition border-[#434345] bg-[#1f202182] shadow-2xs shadow-[#434345] px-10 py-10 rounded-4xl border-1">
          <div className="">
            <div className=" ">
              <img
                className="h-40 mb-3 ml-14 rounded-3xl w-40 "
                src="/train.jpg"
                alt=""
              />
            </div>
            <h1 className=" text-1xl text-center font-bold text-white">
              Training{" "}
            </h1>

            <p className="mt-7 text-[#ffffff] text-sm mb-10">
              Drone training equips users with <br /> practical flight skills,
              safety knowledge, <br />
              data collection, and industry applications.
            </p>
            <h1 className=" text-1xl font-bold text-white">Learn More </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
