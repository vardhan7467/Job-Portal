import React, { useState, useRef } from "react";
import API from "../api/api";
import { FaFileUpload, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

function ResumeUpload() {
    const [file, setFile] = useState(null);
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError("");
        setSkills([]);
    };

    const handleUpload = async () => {
        if (!file) {
            setError("Please select a resume file to upload.");
            return;
        }
        setError("");
        setSkills([]);
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await API.post("resumes/upload/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setSkills(res.data.skills || []);
        } catch {
            setError("Failed to upload resume. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
            style={{
                background: "linear-gradient(135deg, #4A90E2, #50E3C2)",
            }}
        >
            <header className="max-w-md w-full mb-10 text-center text-white">
                <h1 className="text-4xl font-bold mb-2">Build Your Future Today</h1>
                <p className="italic text-lg opacity-90">
                    "Your resume is your first step toward your dream job."
                </p>
            </header>

            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <FaFileUpload className="text-gray-700" />
                    Upload Your Resume
                </h2>

                <label
                    htmlFor="file-upload"
                    className="relative block cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-10 text-center text-gray-700 hover:border-gray-500 transition"
                >
                    <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                    {file ? (
                        <p className="text-gray-900 font-medium truncate">{file.name}</p>
                    ) : (
                        <>
                            <p className="text-lg font-semibold">Click to select your resume</p>
                            <p className="text-sm text-gray-500 mt-1">(PDF, DOC, DOCX)</p>
                        </>
                    )}
                </label>

                <button
                    onClick={handleUpload}
                    disabled={loading}
                    className={`mt-6 w-full py-3 rounded-md text-white font-semibold shadow-md transition-colors ${loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gray-900 hover:bg-gray-800"
                        }`}
                >
                    {loading ? "Uploading..." : "Upload Resume"}
                </button>

                {error && (
                    <p className="mt-4 flex items-center text-red-600 font-medium gap-2">
                        <FaExclamationCircle />
                        {error}
                    </p>
                )}

                {skills.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-3">
                            <FaCheckCircle className="text-green-600" />
                            Extracted Skills
                        </h3>
                        <ul className="list-disc list-inside max-h-48 overflow-y-auto border border-gray-300 rounded-md p-4 text-gray-900 space-y-1 bg-white">
                            {skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResumeUpload;