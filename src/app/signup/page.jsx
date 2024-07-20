"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
const Registration = () => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    accountLogo: null,
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setError(false)
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        formData
      );
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError(true);
      } else {
        console.error("Error occurred:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none "
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className={`${
                error && "border-red-300"
              } w-full px-3 py-2 border rounded-lg focus:outline-none`}
              type="email"
              name="email"
              value={formData.email}
              placeholder="E-mail"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <input
              className={`${
                error && "border-red-300 bg-red-100 "
              } w-full px-3 py-2 border rounded-lg focus:outline-none`}
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="file"
              name="accountLogo"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign Up
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/login">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
