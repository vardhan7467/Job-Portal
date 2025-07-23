// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//     FaFileUpload,
//     FaFileAlt,
//     FaBriefcase,
//     FaSearch,
//     FaLink,
//     FaGlobe,
//     FaExternalLinkAlt,
//     FaUser,
//     FaSignOutAlt,
// } from "react-icons/fa";

// const HomePage = () => {
//     const navigate = useNavigate();

//     const cards = [
//         {
//             title: "Upload Resume",
//             desc: "Upload your resume to start matching",
//             bg: "bg-gradient-to-r from-blue-500 to-blue-700",
//             icon: <FaFileUpload size={24} />,
//             link: "/upload",
//         },
//         {
//             title: "View Resumes",
//             desc: "Check all resumes you’ve uploaded",
//             bg: "bg-gradient-to-r from-green-500 to-green-700",
//             icon: <FaFileAlt size={24} />,
//             link: "/resumes",
//         },
//         {
//             title: "Post Job",
//             desc: "Post a new job to the portal",
//             bg: "bg-gradient-to-r from-purple-500 to-purple-700",
//             icon: <FaBriefcase size={24} />,
//             link: "/post-job",
//         },
//         {
//             title: "View Jobs",
//             desc: "Browse all job listings",
//             bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
//             icon: <FaSearch size={24} />,
//             link: "/jobs",
//         },
//         {
//             title: "Match Resume to All Jobs",
//             desc: "Match your resume to all posted jobs",
//             bg: "bg-gradient-to-r from-pink-500 to-pink-700",
//             icon: <FaLink size={24} />,
//             link: "/match-resume",
//         },
//         {
//             title: "Match Resume to Online Jobs",
//             desc: "Find jobs from external sources",
//             bg: "bg-gradient-to-r from-orange-500 to-orange-700",
//             icon: <FaGlobe size={24} />,
//             link: "/match-online-jobs",
//         },
//         {
//             title: "Online Jobs",
//             desc: "Explore jobs from Adzuna API",
//             bg: "bg-gradient-to-r from-indigo-500 to-indigo-700",
//             icon: <FaExternalLinkAlt size={24} />,
//             link: "/online-jobs",
//         },
//         {
//             title: "My Profile",
//             desc: "View your profile details",
//             bg: "bg-gradient-to-r from-teal-500 to-teal-700",
//             icon: <FaUser size={24} />,
//             link: "/profile",
//         },
//         {
//             title: "Logout",
//             desc: "Sign out of your account",
//             bg: "bg-gradient-to-r from-red-500 to-red-700",
//             icon: <FaSignOutAlt size={24} />,
//             action: () => {
//                 localStorage.removeItem("token");
//                 navigate("/");
//             },
//         },
//     ];

//     return (
//         <div
//             className="h-screen overflow-hidden bg-cover bg-center flex items-center justify-center px-4"
//             style={{
//                 backgroundImage:
//                     'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1740&q=80")',
//             }}
//         >
//             <div className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg p-8 max-w-6xl w-full">
//                 <h1 className="text-4xl font-bold text-white text-center mb-4">
//                     Welcome to the Job Portal
//                 </h1>
//                 <p className="text-lg text-white text-center mb-10">
//                     Find jobs, match your resume, post opportunities, and explore your career path.
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {cards.map((card, index) => (
//                         <div
//                             key={index}
//                             className={`cursor-pointer text-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ${card.bg}`}
//                             onClick={() => (card.action ? card.action() : navigate(card.link))}
//                         >
//                             <div className="flex items-center gap-3 mb-2">
//                                 {card.icon}
//                                 <h2 className="text-xl font-bold">{card.title}</h2>
//                             </div>
//                             <p className="text-sm opacity-90">{card.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//     FaFileUpload,
//     FaFileAlt,
//     FaBriefcase,
//     FaSearch,
//     FaLink,
//     FaGlobe,
//     FaExternalLinkAlt,
//     FaUser,
//     FaSignOutAlt,
// } from "react-icons/fa";

// const HomePage = () => {
//     const navigate = useNavigate();

//     const cards = [
//         // Group 1
//         {
//             title: "Upload Resume",
//             desc: "Upload your resume to start matching",
//             bg: "bg-gradient-to-r from-blue-500 to-blue-700",
//             icon: <FaFileUpload size={24} />,
//             link: "/upload",
//         },
//         {
//             title: "View Resumes",
//             desc: "Check all resumes you’ve uploaded",
//             bg: "bg-gradient-to-r from-green-500 to-green-700",
//             icon: <FaFileAlt size={24} />,
//             link: "/resumes",
//         },
//         {
//             title: "Post Job",
//             desc: "Post a new job to the portal",
//             bg: "bg-gradient-to-r from-purple-500 to-purple-700",
//             icon: <FaBriefcase size={24} />,
//             link: "/post-job",
//         },

//         // Group 2
//         {
//             title: "View Jobs",
//             desc: "Browse all job listings",
//             bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
//             icon: <FaSearch size={24} />,
//             link: "/jobs",
//         },
//         {
//             title: "Match Resume to All Jobs",
//             desc: "Match your resume to all posted jobs",
//             bg: "bg-gradient-to-r from-pink-600 to-pink-800",
//             icon: <FaLink size={24} />,
//             link: "/match-resume",
//         },
//         {
//             title: "Match Resume to Online Jobs",
//             desc: "Find jobs from external sources",
//             bg: "bg-gradient-to-r from-orange-600 to-orange-800",
//             icon: <FaGlobe size={24} />,
//             link: "/match-online-jobs",
//         },

//         // Group 3
//         {
//             title: "Online Jobs",
//             desc: "Explore jobs from Adzuna API",
//             bg: "bg-gradient-to-r from-indigo-600 to-indigo-800",
//             icon: <FaExternalLinkAlt size={24} />,
//             link: "/online-jobs",
//         },
//         {
//             title: "My Profile",
//             desc: "View your profile details",
//             bg: "bg-gradient-to-r from-teal-600 to-teal-800",
//             icon: <FaUser size={24} />,
//             link: "/profile",
//         },
//         {
//             title: "Logout",
//             desc: "Sign out of your account",
//             bg: "bg-gradient-to-r from-red-600 to-red-800",
//             icon: <FaSignOutAlt size={24} />,
//             action: () => {
//                 localStorage.removeItem("token");
//                 navigate("/login");
//             },
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 px-4 py-12">
//             <h1 className="text-4xl font-bold text-center text-white mb-6">Welcome to the Job Portal</h1>
//             <p className="text-lg text-center text-white mb-10">
//                 Find jobs, match your resume, post opportunities, and explore your career path.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//                 {cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className={`cursor-pointer text-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ${card.bg}`}
//                         onClick={() => (card.action ? card.action() : navigate(card.link))}
//                     >
//                         <div className="flex items-center gap-3 mb-2">
//                             {card.icon}
//                             <h2 className="text-xl font-bold">{card.title}</h2>
//                         </div>
//                         <p className="text-sm opacity-90">{card.desc}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HomePage;
import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaFileUpload,
    FaFileAlt,
    FaBriefcase,
    FaSearch,
    FaLink,
    FaGlobe,
    FaExternalLinkAlt,
    FaUser,
    FaSignOutAlt,
} from "react-icons/fa";

const HomePage = () => {
    const navigate = useNavigate();

    const cards = [
        {
            title: "Upload Resume",
            desc: "Upload your resume to start matching",
            bg: "bg-gradient-to-r from-blue-500 to-blue-700",
            icon: <FaFileUpload size={24} />,
            link: "/upload",
        },
        {
            title: "View Resumes",
            desc: "Check all resumes you’ve uploaded",
            bg: "bg-gradient-to-r from-green-500 to-green-700",
            icon: <FaFileAlt size={24} />,
            link: "/resumes",
        },
        {
            title: "Post Job",
            desc: "Post a new job to the portal",
            bg: "bg-gradient-to-r from-purple-500 to-purple-700",
            icon: <FaBriefcase size={24} />,
            link: "/post-job",
        },
        {
            title: "View Jobs",
            desc: "Browse all job listings",
            bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
            icon: <FaSearch size={24} />,
            link: "/jobs",
        },
        {
            title: "Match Resume to All Jobs",
            desc: "Match your resume to all posted jobs",
            bg: "bg-gradient-to-r from-pink-500 to-pink-700",
            icon: <FaLink size={24} />,
            link: "/match-resume",
        },
        {
            title: "Match Resume to Online Jobs",
            desc: "Find jobs from external sources",
            bg: "bg-gradient-to-r from-orange-500 to-orange-700",
            icon: <FaGlobe size={24} />,
            link: "/match-online-jobs",
        },
        {
            title: "Online Jobs",
            desc: "Explore jobs from Adzuna API",
            bg: "bg-gradient-to-r from-indigo-500 to-indigo-700",
            icon: <FaExternalLinkAlt size={24} />,
            link: "/online-jobs",
        },
        {
            title: "My Profile",
            desc: "View your profile details",
            bg: "bg-gradient-to-r from-teal-500 to-teal-700",
            icon: <FaUser size={24} />,
            link: "/profile",
        },
        {
            title: "Logout",
            desc: "Sign out of your account",
            bg: "bg-gradient-to-r from-red-500 to-red-700",
            icon: <FaSignOutAlt size={24} />,
            action: () => {
                localStorage.removeItem("token");
                navigate("/");
            },
        },
    ];

    return (
        <div
            className="min-h-screen bg-cover bg-center px-4 py-8"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1740&q=80")',
            }}
        >
            <div className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white text-center mb-4">
                    Welcome to the Job Portal
                </h1>
                <p className="text-lg text-white text-center mb-10">
                    Find jobs, match your resume, post opportunities, and explore your career path.
                </p>

                <div className="max-w-xl space-y-6">
                    <p className="text-sm text-purple-400 font-medium tracking-wide">Find Jobs, Employment & Career</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Get a <span className="text-purple-400">Job</span> that Perfect <br /> for <span className="text-pink-400">You</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Be found. Put your CV in front of great employers.
                    </p>
                    <p>
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer text-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ${card.bg}`}
                            onClick={() => (card.action ? card.action() : navigate(card.link))}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                {card.icon}
                                <h2 className="text-xl font-bold">{card.title}</h2>
                            </div>
                            <p className="text-sm opacity-90">{card.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Additional Information Section */}
                {/* About Section */}
                <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
                    <h2 className="text-3xl font-bold text-white mb-4 border-b border-white/30 pb-2">✨ About Us</h2>
                    <p className="text-white/90 mb-4 leading-relaxed text-lg">
                        Our job portal is designed to simplify your job hunting and hiring process.
                        Whether you’re a job seeker or an employer, we offer a seamless and intuitive platform for interaction.
                    </p>
                    <ul className="text-white/90 space-y-3 list-inside list-disc pl-4 text-base">
                        <li><span className="text-green-300 font-semibold">✓</span> Upload and manage your resumes easily</li>
                        <li><span className="text-green-300 font-semibold">✓</span> Match resumes to job descriptions with AI-powered scoring</li>
                        <li><span className="text-green-300 font-semibold">✓</span> Discover job listings from top companies and external APIs</li>
                        <li><span className="text-green-300 font-semibold">✓</span> Post and manage job offers as a recruiter or admin</li>
                        <li><span className="text-green-300 font-semibold">✓</span> View profiles and track application statuses</li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
                    <h2 className="text-3xl font-bold text-white mb-4 border-b border-white/30 pb-2">📞 Contact Us</h2>
                    <p className="text-white/90 mb-4 leading-relaxed text-lg">
                        Have questions, feedback, or need support? Reach out to us through the following channels. We’re here to help you!
                    </p>
                    <ul className="text-white/90 space-y-3 list-inside list-disc pl-4 text-base">
                        <li><span className="text-yellow-300 font-semibold">📧</span> <strong>Email:</strong> <a href="mailto:vardhanm@gmail.com" className="underline hover:text-blue-200">vardhanm@gmail.com</a></li>
                        <li><span className="text-yellow-300 font-semibold">📞</span> <strong>Phone:</strong> <a href="tel:+9090909909" className="underline hover:text-blue-200">+91 90909 09909</a></li>
                        <li><span className="text-yellow-300 font-semibold">📍</span> <strong>Location:</strong> Hyderabad, India</li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default HomePage;
