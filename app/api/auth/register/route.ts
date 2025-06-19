// app/api/register/route.ts

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { connectToDB } from "@/lib/connectDB";
import User from "@/models/User";

interface RegisterBody {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const { username, email, password, confirmPassword }: RegisterBody = await req.json();

    // Validate required fields
    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Password match check (extra protection, though frontend should handle it)
    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered." }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({
      userID: uuidv4(),
      username,
      email,
      password: hashedPassword,
      role: "user", // ✅ locked to user only
    });

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err: any) {
    console.error("❌ Registration Error:", err.message);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
