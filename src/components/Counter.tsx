"use client";
import React, { useState } from "react";

const Counter = ({ number }: { number: number }) => {
  const [state, setState] = useState<number>(0);
  return (
    <div>
      <h1 className="text-5xl font-bold font-ubuntu">{state}</h1>

      <button
        onClick={() => setState((prev) => prev + 1)}
        className=" p-3 bg-amber-600 text-white font-semibold hover:bg-amber-800"
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
