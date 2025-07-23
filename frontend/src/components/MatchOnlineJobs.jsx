import React, { useEffect, useState } from "react";
import API from "../api/api";

function MatchOnlineJobs() {
    const [resumes, setResumes] = useState([]);
    const [resumeId, setResumeId] = useState("");
    const [query, setQuery] = useState("developer");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const res = await API.get("resumes/");
                setResumes(res.data);
                setError("");
            } catch (err) {
                console.error("Failed to fetch resumes", err);
                setError("Failed to load resumes. Please try again.");
            }
        };
        fetchResumes();
    }, []);

    const handleMatch = async () => {
        if (!resumeId) return;
        setLoading(true);
        setError("");
        setResults([]);

        try {
            const res = await API.post("match-online-jobs/", {
                resume_id: resumeId,
                query: query,
            });
            setResults(res.data.results || []);
        } catch (err) {
            console.error("Error matching online jobs:", err);
            setError("Failed to match jobs. Please try again.");
        }
        setLoading(false);
    };

    return (
        <>
            {/* Import Poppins font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                rel="stylesheet"
            />

            <div
                className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
                style={{
                    background: "linear-gradient(to right, #fdba74, #fb923c)", // faded orange
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <header className="max-w-2xl w-full mb-10 text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">Find Online Opportunities</h1>
                    <p className="italic text-lg opacity-90">
                        "Let your resume explore the world of opportunities."
                    </p>
                </header>

                <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-3xl w-full p-8 border-2 border-orange-600">
                    <h2 className="text-3xl font-bold mb-8 text-center text-orange-800">
                        Match Resume with Online Jobs
                    </h2>

                    <div className="mb-6 space-y-4">
                        <label className="block font-semibold text-orange-700">
                            Select Resume:
                            <select
                                value={resumeId}
                                onChange={(e) => setResumeId(e.target.value)}
                                className="block w-full mt-2 p-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="">-- Choose Resume --</option>
                                {resumes.map((resume) => (
                                    <option key={resume.id} value={resume.id}>
                                        {resume.filename || resume.file.split("/").pop()}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="block font-semibold text-orange-700">
                            Job Title / Query:
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="e.g. Python Developer"
                                className="block w-full mt-2 p-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </label>

                        <button
                            onClick={handleMatch}
                            disabled={!resumeId || loading}
                            className={`w-full py-3 rounded-md text-white font-semibold shadow-md transition-colors ${!resumeId || loading
                                    ? "bg-orange-300 cursor-not-allowed"
                                    : "bg-orange-600 hover:bg-orange-700"
                                }`}
                        >
                            {loading ? "Matching..." : "Match Jobs"}
                        </button>

                        {error && (
                            <p className="text-red-600 font-medium mt-4 text-center">{error}</p>
                        )}
                    </div>

                    {results.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-orange-800 text-center">
                                Matching Jobs
                            </h3>
                            <div className="space-y-5 max-h-96 overflow-y-auto">
                                {results.map((job, idx) => (
                                    <div
                                        key={idx}
                                        className="border border-orange-300 rounded-md p-5 shadow hover:bg-orange-50 transition"
                                    >
                                        <h4 className="text-lg font-bold text-orange-700">
                                            {job.job_title}
                                        </h4>
                                        <p className="text-sm text-orange-600">{job.company}</p>
                                        <p className="mt-2 text-sm">
                                            Score: <strong>{job.score}%</strong>
                                        </p>
                                        <p className="mt-1 text-sm">
                                            Matched Keywords: {job.matched_keywords.join(", ")}
                                        </p>
                                        <p className="mt-1 text-sm">
                                            Missing Keywords: {job.missing_keywords.join(", ")}
                                        </p>
                                        <a
                                            href={job.apply_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-block text-orange-700 underline hover:text-orange-900"
                                        >
                                            Apply Now
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default MatchOnlineJobs;