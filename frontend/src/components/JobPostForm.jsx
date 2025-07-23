import React, { useState } from "react";

const JobPostForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [skillsRequired, setSkillsRequired] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            alert("You must be logged in to post a job.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/jobs/", {
                method: "POST",
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    skills_required: skillsRequired,
                }),
            });

            if (!response.ok) throw new Error("Failed to post job");

            alert("Job posted successfully!");
            setTitle("");
            setDescription("");
            setSkillsRequired("");
        } catch (error) {
            console.error("Error posting job:", error);
            alert("Failed to post job.");
        }
    };

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
                    background: "linear-gradient(to right, #d8b4fe, #9333ea)", // faded to deep purple
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <header className="max-w-md w-full mb-10 text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">Post Opportunities</h1>
                    <p className="italic text-lg opacity-90">
                        "Be the bridge between talent and success."
                    </p>
                </header>

                <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-md w-full p-8 border-2 border-purple-700">
                    <h2 className="text-3xl font-bold mb-6 text-center text-purple-900">
                        Post a Job
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            placeholder="Job Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                        <textarea
                            placeholder="Job Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            rows={4}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Skills Required (comma separated)"
                            value={skillsRequired}
                            onChange={(e) => setSkillsRequired(e.target.value)}
                            className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 rounded-md bg-purple-700 text-white font-semibold shadow hover:bg-purple-800 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default JobPostForm;