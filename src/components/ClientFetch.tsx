"use client";
import React, { useEffect, useState } from "react";

interface array {
  id: number;
  title: string;
}

const ClientFetch = () => {
  const [data, setData] = useState<Array<array>>([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data.products);

    setData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default ClientFetch;
