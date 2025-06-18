import mongoose, { Document, Model, Schema } from "mongoose";

// Define the TypeScript interface for a User document
export interface IUser extends Document {
  userID: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  profilePicture?: string | null;
  joinDate?: Date | null;
  lastLogin?: Date | null;
  role: "user" | "superAdmin" | "admin" | "writer" | "editor";
  status: "active" | "inactive";
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the Mongoose schema
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
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
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
      select: false,
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
      enum: ["user", "superAdmin", "admin", "writer", "editor"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

// Export the model with proper type
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
