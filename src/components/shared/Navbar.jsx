'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png"; // Your local default file
import NavLink from "./NavLink";
import { authClient, signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user

  console.log(user, " User in nav")

  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li><NavLink href={"/"}>Home</NavLink></li>
        <li><NavLink href={"/about-us"}>About</NavLink></li>
        <li><NavLink href={"/career"} className={"text-yellow-500"}>Career</NavLink></li>
      </ul>

      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">

          {/* 🖼️ Logic: Use session image if it exists, otherwise use local avatar */}
          <Image
            src={user?.image || userAvatar}
            alt="User profile"
            width={45}
            height={45}
            className="rounded-full object-cover border border-gray-200"
          />

          {session?.user && (
            <span className="text-xs font-semibold text-gray-600 mt-1">
              {session.user.name}
            </span>
          )}
        </div>

        {!session ? (
          <button className="btn bg-purple-500 text-white">
            <Link
              href={'/login'}
              >Login</Link>
          </button>
        ) : (
          <button onClick={async () => await signOut()}
          className="btn bg-red-500 text-white text-sm px-3 py-1 rounded">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;