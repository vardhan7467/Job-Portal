import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFileAlt, FaExclamationTriangle } from "react-icons/fa";

const ResumeList = () => {
    const [resumes, setResumes] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://127.0.0.1:8000/api/resumes/", {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });
                setResumes(response.data);
                setError("");
            } catch (error) {
                console.error("Error fetching resumes:", error);
                setError("Failed to fetch resumes. Please try again later.");
            }
        };

        fetchResumes();
    }, []);

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                rel="stylesheet"
            />

            <div
                className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
                style={{
                    background: "linear-gradient(to right, #86efac, #16a34a)", // faded green to dark green
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <header className="max-w-md w-full mb-10 text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">Your Resume Library</h1>
                    <p className="italic text-lg opacity-90">
                        "Every resume holds a journey. Let's review yours."
                    </p>
                </header>

                <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-md w-full p-8 border-2 border-green-600">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                        <FaFileAlt className="text-green-600" size={30} />
                        Uploaded Resumes
                    </h2>

                    {error && (
                        <p className="mb-6 text-red-700 font-semibold text-center flex items-center justify-center gap-2">
                            <FaExclamationTriangle />
                            {error}
                        </p>
                    )}

                    {resumes.length === 0 ? (
                        <p className="text-gray-700 text-center text-lg font-medium">
                            No resumes uploaded yet.
                        </p>
                    ) : (
                        <ul className="space-y-4 max-h-72 overflow-y-auto">
                            {resumes.map((resume) => {
                                const fileName =
                                    resume.file_name || resume.file.split("/").pop();
                                return (
                                    <li
                                        key={resume.id}
                                        className="border-2 border-green-500 rounded-md p-4 hover:bg-green-100 transition cursor-pointer flex items-center gap-3"
                                    >
                                        <FaFileAlt className="text-green-600" size={22} />
                                        <a
                                            href={resume.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-700 font-semibold hover:underline"
                                        >
                                            {fileName}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default ResumeList;