// import prisma from "@/lib/db";
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

// import prisma from "@/lib/db";
// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import * as z from "zod";

// // Define a schema for input validation
// const userSchema = z.object({
//   name: z.string().min(1, "UserName is required").max(100),
//   email: z.string().min(1, "Email is required").email("Invalid email"),
//   password: z
//     .string()
//     .min(1, "Password is required")
//     .max(8, "Password must be less than 8 characters"),
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, email, password } = body;

//     // Validate input data
//     const validationResult = userSchema.safeParse({ name, email, password });
//     if (!validationResult.success) {
//       return NextResponse.json(
//         { message: validationResult.error.message },
//         { status: 400 }
//       );
//     }

//     // Check if email already exists
//     const existingUserByEmail = await prisma.user.findUnique({
//       where: { email: email },
//     });
//     if (existingUserByEmail) {
//       return NextResponse.json(
//         { message: "User with this email already exists" },
//         { status: 409 }
//       );
//     }

//     // Check if name already exists
//     const existingUserByName = await prisma.user.findUnique({
//       where: { name: name },
//     });
//     if (existingUserByName) {
//       return NextResponse.json(
//         { message: "User with this name already exists" },
//         { status: 409 }
//       );
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//     });

//     // Protect the password
//     const { password: newUserPassword, ...rest } = newUser;

//     return NextResponse.json(
//       { user: rest, message: "User created successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }
