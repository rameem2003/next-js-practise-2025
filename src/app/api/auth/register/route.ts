import { dataBaseConnect } from "@/lib/db";
import { loginValidator } from "@/lib/validators";
import user from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const response = await req.json();
    const { data, error } = loginValidator.safeParse(response);

    if (error) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    await dataBaseConnect();

    let exist = await user.findOne({ email: data.email });

    if (exist) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    let newUser = new user({ email: data.email, password: data.password });
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
    // return NextResponse.redirect(new URL("/", req.url));
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
