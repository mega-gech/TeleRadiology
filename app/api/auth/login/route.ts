
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import prisma from "@/lib/prisma";
import { createSessionToken, setSessionCookie } from "@/lib/auth";


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    // Validate required fields
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find facility account
    const user = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    // Verify account and password
    if (
      !user ||
      !(await bcrypt.compare(password, user.passwordHash))
    ) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Create JWT
    const token = await createSessionToken({
      id: user.id,
      email: user.email,
    });

    // Store JWT in HTTP-only cookie
    await setSessionCookie(token);

    return NextResponse.json({
      message: "Login successful.",
      user: {
        id: user.id,
        facilityName: user.facilityName,
        facilityType: user.facilityType,
        contactPerson: user.contactPerson,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { message: "Something went wrong during login." },
      { status: 500 }
    );
  }
}
