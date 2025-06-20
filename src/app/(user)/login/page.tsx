"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let data = await signIn("credentials", { email, password, redirect: true });

    if (data?.error) {
      console.log(data.error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="m-auto">
        <h1 className="text-2xl font-bold text-gray-100">Login</h1>

        <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-gray-100 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-gray-100 placeholder-gray-500"
          />

          <button
            type="submit"
            className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
