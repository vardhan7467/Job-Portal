import React, { useEffect, useState } from "react";
import API from "../api/api";

function OnlineJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchJobs = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await API.get("online-jobs/");
            setJobs(res.data.results || []);
        } catch (err) {
            console.error("Failed to fetch online jobs:", err);
            setError("Failed to load online jobs. Please try again later.");
        } finally {
            setLoading(false);
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
                    background: "linear-gradient(to right, #c7d2fe, #6366f1)", // faded indigo
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <header className="max-w-2xl w-full mb-10 text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">Explore Remote Opportunities</h1>
                    <p className="italic text-lg opacity-90">
                        "Unlock doors to the digital workforce."
                    </p>
                </header>

                <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-4xl w-full p-8 border-2 border-indigo-700">
                    <h2 className="text-3xl font-bold mb-6 text-indigo-900 text-center">
                        Latest Online Jobs (Adzuna)
                    </h2>

                    {error && (
                        <p className="mb-6 text-red-600 font-semibold text-center">
                            {error}
                        </p>
                    )}

                    {loading ? (
                        <p className="text-indigo-700 text-center font-medium">Loading jobs...</p>
                    ) : jobs.length === 0 ? (
                        <p className="text-indigo-700 text-center font-medium">No jobs found.</p>
                    ) : (
                        <div className="grid gap-6 max-h-[75vh] overflow-y-auto">
                            {jobs.map((job, idx) => (
                                <div
                                    key={idx}
                                    className="border border-indigo-400 rounded-md p-5 shadow hover:bg-indigo-50 transition cursor-pointer"
                                >
                                    <h3 className="text-2xl font-extrabold text-indigo-800">
                                        {job.title}
                                    </h3>
                                    <p className="mt-1 font-semibold text-indigo-600">
                                        {job.company} - {job.location}
                                    </p>
                                    <p className="mt-2 text-indigo-700">
                                        {job.description?.slice(0, 200)}...
                                    </p>
                                    <a
                                        href={job.redirect_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-block bg-indigo-700 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-800 transition"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default OnlineJobs;