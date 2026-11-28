
"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    setMessage("");
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setIsError(true);
        setMessage(result.message || "Registration failed.");
        return;
      }

      setMessage(
        "Registration successful! You can now sign in."
      );

      form.reset();

    } catch {
      setIsError(true);
      setMessage(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  const inputStyles =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="facilityName" className="mb-2 block text-sm font-medium">
          Facility Name
        </label>
        <input
          id="facilityName"
          name="facilityName"
          type="text"
          placeholder="e.g. Addis Medical Center"
          required
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="facilityType" className="mb-2 block text-sm font-medium">
          Facility Type
        </label>
        <select
          id="facilityType"
          name="facilityType"
          required
          defaultValue=""
          className={inputStyles}
        >
          <option value="" disabled>Select facility type</option>
          <option value="hospital">Hospital</option>
          <option value="clinic">Clinic</option>
          <option value="diagnostic_center">Diagnostic Center</option>
        </select>
      </div>

      <div>
        <label htmlFor="contactPerson" className="mb-2 block text-sm font-medium">
          Contact Person
        </label>
        <input
          id="contactPerson"
          name="contactPerson"
          type="text"
          placeholder="Full name"
          required
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="facility@example.com"
          required
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+251..."
          required
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="address" className="mb-2 block text-sm font-medium">
          Facility Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="City, Sub-city, Street"
          required
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          placeholder="At least 8 characters"
          required
          className={inputStyles}
        />
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register Facility"}
      </Button>

      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`text-center text-sm ${
            isError ? "text-red-500" : "text-muted-foreground"
          }`}
        >
          {message}
        </p>
      )}

      <p className="text-center text-sm text-muted-foreground">
        Already registered?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
