import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../lib/auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className=" max-w-6xl mx-auto justify-between  flex items-center">
        <Link className="" href={"/"}>
          <img className="h-25 v-25" src="/aaglogo.png" alt="" />
        </Link>{" "}
        <div className=" ml-40 space-x-8 hidden md:flex">
          <Link className="hover:text-indigo-200 text-sm" href={"/"}>
            Home
          </Link>{" "}
          <Link className="hover:text-indigo-200 text-sm" href={"/products"}>
            Projects
          </Link>{" "}
          <Link className="hover:text-indigo-200 text-sm" href={"/services"}>
            Services
          </Link>{" "}
          <Link className="hover:text-indigo-200 text-sm" href={"/about"}>
            About
          </Link>{" "}
        </div>
        {session?.user?.role === "admin" && (
          <Link
            className="hover:text-indigo-200 text-sm"
            href={"/admin/products"}
          >
            Admin Page
          </Link>
        )}
        {!session ? (
          <Link href={"/clientlogin"}>
            <button className="bg-[#1a72a9] px-8 py-2 rounded-4xl">
              Client Login
            </button>
          </Link>
        ) : (
          <form action="/api/auth/signout" method="post">
            {/* call back url to redirect to homepage */}
            <input type="hidden" name="callbackUrl" value="/" />
            {/* <button className="bg-red-600 px-8 py-2 rounded-4xl">Logout</button> */}
          </form>
        )}
        {!session ? (
          <Link href={"/login"}>
            <img className="h-25 v-25" src="/aaglogo.png" alt="" />
          </Link>
        ) : (
          <form action="/api/auth/signout" method="post">
            {/* call back url to redirect to homepage */}
            <input type="hidden" name="callbackUrl" value="/" />
            <button className="bg-red-600 px-8 py-2 rounded-4xl">Logout</button>
          </form>
        )}
      </div>
    </div>
  );
}
