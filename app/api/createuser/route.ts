
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists",
        },
        { status: 409 }
      );
    }
    // check if name already exists
    const existingUserByUsername = await prisma.user.findUnique({
      where: { name: name },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    // protect the password
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully ",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something want wrong",
      },
      { status: 500 }
    );
  }
}


