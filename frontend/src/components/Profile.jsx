import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });
                setProfile(response.data);
                setError("");
            } catch (error) {
                console.error("Error fetching profile:", error);
                setError("Failed to load profile. Please try again.");
            }
        };

        fetchProfile();
    }, []);

    if (!profile && !error)
        return (
            <p className="p-6 text-center text-red-500 font-semibold">Loading profile...</p>
        );

    return (
        <>
            {/* Poppins Font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                rel="stylesheet"
            />

            <div
                className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
                style={{
                    background: "linear-gradient(to right, #fbcfe8, #f87171)", // faded pink-red
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <header className="max-w-xl w-full mb-10 text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">Welcome to Your Profile</h1>
                    <p className="italic text-lg opacity-90">
                        "Your journey begins with knowing yourself."
                    </p>
                </header>

                <div className="bg-white bg-opacity-95 rounded-xl shadow-2xl max-w-md w-full p-8 border border-red-300">
                    <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">
                        My Profile
                    </h2>

                    {error && (
                        <p className="mb-6 text-red-500 font-semibold text-center">{error}</p>
                    )}

                    {profile && (
                        <div className="space-y-4 text-gray-800 text-lg">
                            <p>
                                <span className="font-semibold text-red-500">ID:</span>{" "}
                                {profile.id}
                            </p>
                            <p>
                                <span className="font-semibold text-red-500">Username:</span>{" "}
                                {profile.username}
                            </p>
                            <p>
                                <span className="font-semibold text-red-500">Email:</span>{" "}
                                {profile.email}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Profile;