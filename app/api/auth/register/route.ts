
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import prisma from "@/lib/prisma";


const facilityTypes = [
  "hospital",
  "clinic",
  "diagnostic_center",
] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      facilityName,
      facilityType,
      contactPerson,
      email,
      phone,
      address,
      password,
    } = body;

    // Validate required fields
    if (
      !facilityName ||
      !facilityType ||
      !contactPerson ||
      !email ||
      !phone ||
      !address ||
      !password
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate field types
    if (
      typeof facilityName !== "string" ||
      typeof facilityType !== "string" ||
      typeof contactPerson !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof address !== "string" ||
      typeof password !== "string"
    ) {
      return NextResponse.json(
        { message: "Invalid input data." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Validate email
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
    ) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate facility type
    if (
      !facilityTypes.includes(
        facilityType as (typeof facilityTypes)[number]
      )
    ) {
      return NextResponse.json(
        { message: "Invalid facility type." },
        { status: 400 }
      );
    }

    // Validate password
    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must contain at least 8 characters." },
        { status: 400 }
      );
    }

    if (Buffer.byteLength(password, "utf8") > 72) {
      return NextResponse.json(
        { message: "Password is too long." },
        { status: 400 }
      );
    }

    // Check whether email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create facility account
    const user = await prisma.user.create({
      data: {
        facilityName: facilityName.trim(),
        facilityType: facilityType.toUpperCase() as
          | "HOSPITAL"
          | "CLINIC"
          | "DIAGNOSTIC_CENTER",
        contactPerson: contactPerson.trim(),
        email: normalizedEmail,
        phone: phone.trim(),
        address: address.trim(),
        passwordHash,
      },
      select: {
        id: true,
        facilityName: true,
        facilityType: true,
        contactPerson: true,
        email: true,
        phone: true,
        address: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "Facility registered successfully.",
        user,
      },
      { status: 201 }
    );

  } catch (error) {
    // Handle duplicate email race conditions
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    console.error("Registration error:", error);

    return NextResponse.json(
      { message: "Something went wrong during registration." },
      { status: 500 }
    );
  }
}
