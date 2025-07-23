import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/register/", form);
            if (res.data.token) {
                alert("Registration successful!");
                navigate("/"); // ✅ Redirect to login
            }
        } catch (err) {
            setError("Registration failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/reg.jpg')" }}>
            <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
                <div className="text-center mb-6">
                    <img src="https://img.icons8.com/color/96/briefcase.png" alt="Logo" className="mx-auto mb-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Register to Job Portal</h2>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            className="w-full border px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full border px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Register
                    </button>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                </form>

                <p className="text-center mt-4 text-sm text-gray-700">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-600 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;