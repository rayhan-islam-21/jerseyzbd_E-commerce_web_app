import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import {User} from "../../../models/user";

export async function POST(req) {
  try {
    await connectDB(); // ✅ connect to DB

    const body = await req.json();
    const { name, email, uid } = body;

    const existingUser = await User.findOne({ uid });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    const newUser = await User.create({ name, email, uid });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function GET() {
  try {
    await connectDB();

    const users = await User.find(); 
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}