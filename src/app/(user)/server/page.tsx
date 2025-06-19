import React from "react";

interface itemType {
  id: number;
  title: string;
}

const page = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  return (
    <div>
      <h1 className="text-2xl text-white">Server Page</h1>
      <div>
        {products.map((item: itemType) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default page;
