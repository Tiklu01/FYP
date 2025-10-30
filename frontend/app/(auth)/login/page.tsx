"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with backend API call
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 py-10 px-4">
      <div className="w-full max-w-lg md:max-w-xl bg-white rounded-xl shadow-lg p-10 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-8">
          Sign In to AIMind
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="px-5 py-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="px-5 py-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-lg"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full py-4 bg-sky-600 text-white font-medium text-lg rounded-lg shadow hover:bg-sky-700 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-slate-600 text-lg">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-sky-700 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

