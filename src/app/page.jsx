import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video Container   */}
      <div className="absolute w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="/vid2.mp4"
        ></video>
      </div>

      {/* Dark Overlay  */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Page content */}

      <div className="mt-20 relative z-5 ">
        <div className=" p-2 mx-auto max-w-6xl h-full flex flex-col justify-center items-center text-center py-20">
          <h1 className="text-white font-extrabold text-6xl md:text-7xl mb-6">
            Data From The Skies <br />
            <span className="text-blue-200 text-2xl font-extralight">
              Let us give you the Aerial Advantage.
            </span>{" "}
          </h1>

          <a href="/services">
            <button className="rounded-4xl px-8 py-2 text-white hover:bg-[#307FDB] bg-[#306FDB]">
              Learn more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
