import React, { useEffect, useState } from "react";
import API from "../api/api";

function ResumeMatchAllJobs() {
    const [resumes, setResumes] = useState([]);
    const [resumeId, setResumeId] = useState("");
    const [results, setResults] = useState([]);
    const [selectedResumeName, setSelectedResumeName] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const res = await API.get("resumes/");
                setResumes(res.data);
                setError("");
            } catch (err) {
                console.error("Error fetching resumes:", err);
                setError("Failed to load resumes. Please try again.");
            }
        };
        fetchResumes();
    }, []);

    const handleMatchAll = async () => {
        if (!resumeId) return;

        try {
            const selected = resumes.find((r) => r.id.toString() === resumeId);
            setSelectedResumeName(selected?.resume_name || `Resume ${resumeId}`);

            const res = await API.get(`resumes/${resumeId}/match_jobs/`);
            setResults(res.data.results || []);
            setError("");
        } catch (err) {
            console.error("Matching failed", err);
            setError("Failed to match jobs. Please try again.");
        }
    };

    return (
        <>
            {/* Font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                rel="stylesheet"
            />

            <div
                className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
                style={{
                    background: "linear-gradient(to right, #f9a8d4, #ec4899)", // faded pink
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <header className="max-w-2xl w-full mb-10 text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">Smart Job Matching</h1>
                    <p className="italic text-lg opacity-90">
                        "Let your resume speak for the perfect opportunity."
                    </p>
                </header>

                <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-3xl w-full p-8 border-2 border-pink-600">
                    <h2 className="text-3xl font-bold mb-8 text-center text-pink-800">
                        Job Search with Resume Matching
                    </h2>

                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
                        <label
                            htmlFor="resume-select"
                            className="font-semibold text-pink-700"
                        >
                            Select Resume:
                        </label>
                        <select
                            id="resume-select"
                            onChange={(e) => setResumeId(e.target.value)}
                            value={resumeId}
                            className="border border-pink-400 rounded-md p-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-pink-500"
                        >
                            <option value="">-- Choose Resume --</option>
                            {resumes.map((r) => (
                                <option key={r.id} value={r.id}>
                                    {r.resume_name}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={handleMatchAll}
                            className={`px-6 py-2 rounded-md text-white font-semibold shadow-md transition-colors ${!resumeId
                                    ? "bg-pink-300 cursor-not-allowed"
                                    : "bg-pink-600 hover:bg-pink-700"
                                }`}
                            disabled={!resumeId}
                        >
                            Match Jobs
                        </button>
                    </div>

                    {error && (
                        <p className="text-red-600 font-medium mb-4 text-center">{error}</p>
                    )}

                    {results.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-pink-800 text-center">
                                Matching Jobs for{" "}
                                <span className="font-bold">{selectedResumeName}</span>
                            </h3>
                            <div className="space-y-4 max-h-96 overflow-y-auto">
                                {results.map((job, index) => (
                                    <div
                                        key={index}
                                        className="border border-pink-300 rounded-md p-4 hover:bg-pink-50 transition"
                                    >
                                        <h4 className="text-lg font-bold text-pink-700">
                                            {job.job_title}
                                        </h4>
                                        <p className="font-medium">Score: {job.match_score}%</p>
                                        <p className="text-sm">
                                            Matched Skills: {job.matched_skills.join(", ")}
                                        </p>
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

export default ResumeMatchAllJobs;