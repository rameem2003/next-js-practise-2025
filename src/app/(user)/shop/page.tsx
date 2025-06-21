import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FilterComp from "./FilterComp";

interface productType {
  id: number;
  title: string;
  description: string;
  price: number;
}

const page = async ({ searchParams }: { searchParams: any }) => {
  const { price, category, page } = await searchParams;
  const res = await fetch(
    `http://localhost:3000/api/products?price=${price || ""}&category=${
      category || ""
    }&page=${page || 1}`
  );
  const data = await res.json();
  const { products } = data;

  return (
    <div>
      <h1 className="text-2xl text-white font-bold font-ubuntu">Shop Page</h1>

      <Button variant={"secondary"}>Click me</Button>

      <Suspense fallback={<p>Loading filters...</p>}>
        <FilterComp />
      </Suspense>
      <div className="flex flex-wrap gap-4">
        {products.map((item: productType) => (
          <div
            key={item.id}
            className="flex-1 basis-[calc(33.333%-1rem)]  p-4 rounded"
          >
            <Card className="bg-gray-800">
              <CardHeader>
                <CardTitle className=" text-2xl text-white font-semibold">
                  {item.title}
                </CardTitle>

                <CardAction className="text-lg text-white font-medium">
                  {item.price}
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className=" text-white">{item.description}</p>
              </CardContent>

              <CardFooter>
                <Link
                  href={`/shop/product/${item.id}`}
                  className=" block w-full"
                >
                  <Button
                    className=" w-full bg-white text-black hover:bg-gray-500 cursor-pointer"
                    size={"icon"}
                  >
                    Buy Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
