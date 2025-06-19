// models/User.ts

import mongoose, { Document, Model, Schema } from "mongoose";

// 1. Define TypeScript interface
export interface IUser extends Document {
  userID: string;
  username: string;
  email: string;
  password: string;
  profilePicture?: string | null;
  joinDate?: Date | null;
  lastLogin?: Date | null;
  role: "user" | "admin";
  status: "active" | "inactive";
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Define Mongoose Schema
const UserSchema: Schema<IUser> = new Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // Hide by default when querying
    },
    profilePicture: {
      type: String,
      default: null,
    },
    joinDate: {
      type: Date,
      default: null,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // 🔥 limited to only what you're using
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// 3. Export Mongoose model
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
