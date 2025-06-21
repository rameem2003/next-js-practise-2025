import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  let price = searchParams.get("price");
  let page = parseInt(searchParams.get("page")!) || 1;
  let category = searchParams.get("category");

  let filePath = path.join(process.cwd(), "public", "products.json");

  let data = await fs.readFile(filePath, "utf-8");
  let products = JSON.parse(data);

  if (category) {
    products = products.filter((product: any) => product.category === category);
  }

  if (price == "asc") {
    products.sort((a: any, b: any) => a.price - b.price);
  } else if (price == "desc") {
    products.sort((a: any, b: any) => b.price - a.price);
  }

  // Pagination logic
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const paginated = products.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    page,
    totalPages: Math.ceil(products.length / limit),
    totalItems: products.length,
    products: paginated,
  });
};
