"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  // const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      return;
    }

    try {
      let res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/about"); // or wherever you want
  //   }
  // }, [status, router]);

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="m-auto">
        <h1 className="text-2xl font-bold text-gray-100">Register</h1>

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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-gray-100 placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
