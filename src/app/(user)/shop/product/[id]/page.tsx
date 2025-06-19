import React from "react";
interface productType {
  id: number;
  title: string;
  description: string;
  price: number;
}

const page = async (props: any) => {
  let { id } = await props.params;

  const product = await fetch(`https://dummyjson.com/products/${id}`);
  const data: productType = await product.json();

  return (
    <div>
      <h1 className="text-2xl text-white">Product: {data.title}</h1>
    </div>
  );
};

export default page;
