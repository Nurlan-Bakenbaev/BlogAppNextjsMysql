"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loginError, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const nav = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        login,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      nav.push("/");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg duration-300 hover:shadow-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              value={login.email}
              placeholder="E-mail"
              onChange={handleChange}
            />
          </div>
          {loginError && (
            <span className="text-red-500 font-semibold">User not found</span>
          )}
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Login
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/signup">
              Create an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
