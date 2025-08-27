"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="relative rounded-2xl h-screen w-full overflow-hidden">
      <div className="h-screen flex items-center">
        <div className="absolute w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            src="/vid2.mp4"
          ></video>
        </div>

        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        <div className="max-w-md relative z-5 mx-auto border rounded-2xl border-gray-800 p-8 space-y-4">
          <h1 className="text-xl text-black">Client Login</h1>
          <input
            className="border border-gray-800 text-black rounded-2xl p-2 w-full mb-4"
            placeholder="Project Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-800 text-black rounded-2xl p-2 w-full mb-4"
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() =>
              signIn("credentials", {
                email,
                password,
                callbackUrl: "/products",
              })
            }
            className="bg-blue-600 w-full text-white px-4 py-2 rounded-2xl"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
