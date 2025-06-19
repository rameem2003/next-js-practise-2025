"use client";
import ClientFetch from "@/components/ClientFetch";
import Counter from "@/components/Counter";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl text-white">Client page</h1>
      <Counter number={10} />
      <ClientFetch />
    </div>
  );
};

export default page;
