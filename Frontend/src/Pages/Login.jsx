import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      const data = response.data;
      if (data && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("✅ Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data.message) {
        alert("❌ " + error.response.data.message);
      } else {
        alert("Login failed. Please try again.");
      }
      setPassword(""); 
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20230519/original/pngtree-store-with-hanging-clothing-in-a-high-end-environment-picture-image_2654941.jpg")`,
      }}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/*Login page*/}
      <div className="relative bg-white/90 shadow-lg rounded-2xl w-full max-w-md p-8">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">User Login</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/*Email*/}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required/>
          </div>
          {/*Password*/}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required/>
          </div>
          {/*Submit button*/}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white font-semibold py-3 rounded-lg transition duration-300`}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 font-semibold hover:underline">Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;



