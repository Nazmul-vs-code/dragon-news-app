'use client'
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data, " data here for google Oauth")
  }

  const handleGithubeSignIn = async () => {

    const data = await authClient.signIn.social({
      provider: "github"
    })

    console.log(data, " data here for Github Oauth")
  }

  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-2">

        <button
          onClick={handleGoogleSignIn}
          className="btn border-blue-500 text-blue-500">
          <FaGoogle />
          Login with google
        </button>

        <button
          onClick={handleGithubeSignIn}
          className="btn">
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
