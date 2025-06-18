import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import User from "@/models/User";
import { connectToDB } from "@/lib/connectDB";

interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const { name, email, password }: RegisterBody = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered." }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      userID: uuidv4(),
      username: name,
      email,
      password: hashedPassword,
      role: "user",
    });

    return NextResponse.json({
      success: true,
      user: {
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err: any) {
    console.error("Registration Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
