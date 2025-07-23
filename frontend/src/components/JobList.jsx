import React, { useEffect, useState } from "react";
import API from "../api/api";
import { FaBriefcase, FaExclamationTriangle } from "react-icons/fa";

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState("");

    const fetchJobs = async () => {
        try {
            const res = await API.get("jobs/");
            setJobs(res.data);
            setError("");
        } catch (error) {
            console.error("Error Fetching jobs:", error);
            setError("Failed to fetch jobs. Please try again later.");
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <>
            {/* Import Poppins font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                rel="stylesheet"
            />

            <div
                className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
                style={{
                    background: "linear-gradient(to right, #fde68a, #f59e0b)", // faded yellow to amber
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <header className="max-w-2xl w-full mb-10 text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">Discover Your Next Role</h1>
                    <p className="italic text-lg opacity-90">
                        "Opportunities don't happen. You create them."
                    </p>
                </header>

                <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-3xl w-full p-8 border-2 border-yellow-700">
                    <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-yellow-800">
                        <FaBriefcase size={30} />
                        Available Jobs
                    </h2>

                    {error && (
                        <p className="mb-6 text-red-700 font-semibold text-center flex items-center justify-center gap-2">
                            <FaExclamationTriangle />
                            {error}
                        </p>
                    )}

                    {jobs.length === 0 ? (
                        <p className="text-gray-700 text-center text-lg font-medium">
                            No jobs available.
                        </p>
                    ) : (
                        <div className="grid gap-6">
                            {jobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="border border-yellow-500 rounded-md p-6 hover:bg-yellow-50 transition cursor-pointer"
                                >
                                    <h3 className="text-xl font-semibold text-yellow-800">
                                        {job.title}
                                    </h3>
                                    <p className="mt-2 text-gray-700">{job.description}</p>
                                    <p className="mt-3 text-sm text-yellow-700 font-medium">
                                        Required Skills: {job.skills_required}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default JobList;