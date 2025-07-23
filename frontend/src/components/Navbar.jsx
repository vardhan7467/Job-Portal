// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import {
//     Briefcase, UploadCloud, FileSearch, PlusCircle, FileText,
//     Layers, BadgeCheck, Globe, LogOut, Home, User
// } from 'lucide-react';

// function Navbar({ setToken }) {
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     };

//     const topNavItems = [
//         { path: '/home', label: 'Home', icon: <Home size={18} /> },
//         { path: '/profile', label: 'Profile', icon: <User size={18} /> },
//     ];

//     const bottomNavItems = [
//         { path: '/jobs', label: 'Jobs', icon: <Briefcase size={18} /> },
//         { path: '/upload', label: 'Upload Resume', icon: <UploadCloud size={18} /> },
//         // { path: '/match', label: 'Match Resume', icon: <FileSearch size={18} /> },
//         { path: '/post-job', label: 'Post Job', icon: <PlusCircle size={18} /> },
//         { path: '/resumes', label: 'Resumes', icon: <FileText size={18} /> },
//         { path: '/match-resume', label: 'Match All', icon: <Layers size={18} /> },
//         { path: '/match-online-jobs', label: 'Match Online', icon: <BadgeCheck size={18} /> },
//         { path: '/online-jobs', label: 'Online Jobs', icon: <Globe size={18} /> },
//     ];

//     return (
//         <div className="w-full shadow-md bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white z-50">
//             <div className="flex justify-between items-center px-4 py-3">
//                 <div className="text-2xl font-bold flex items-center gap-2">
//                     <Briefcase size={28} />
//                     Job Portal
//                 </div>
//                 <div className="flex gap-4 items-center">
//                     {topNavItems.map((item) => (
//                         <Link
//                             key={item.path}
//                             to={item.path}
//                             className={`flex items-center gap-1 px-3 py-1 rounded-md font-medium transition duration-200 ${location.pathname === item.path
//                                     ? 'bg-white text-purple-700 shadow'
//                                     : 'hover:bg-white/20'
//                                 }`}
//                         >
//                             {item.icon}
//                             {item.label}
//                         </Link>
//                     ))}
//                     <button
//                         onClick={handleLogout}
//                         className="flex items-center gap-1 px-3 py-1 rounded-md font-medium transition duration-200 hover:bg-white/20"
//                     >
//                         <LogOut size={18} />
//                         Logout
//                     </button>
//                 </div>
//             </div>

//             <div className="flex flex-wrap justify-center gap-2 pb-3 px-4">
//                 {bottomNavItems.map((item) => (
//                     <Link
//                         key={item.path}
//                         to={item.path}
//                         className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium transition duration-200 ${location.pathname === item.path
//                                 ? 'bg-white text-purple-700 shadow'
//                                 : 'hover:bg-white/20'
//                             }`}
//                     >
//                         {item.icon}
//                         {item.label}
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Navbar;
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    Briefcase, UploadCloud, FileSearch, PlusCircle, FileText,
    Layers, BadgeCheck, Globe, LogOut, Home, User
} from 'lucide-react';

function Navbar({ setToken }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    // Map each route to a specific Tailwind background gradient class
    const pageColorMap = {
        '/home': 'from-purple-600 via-pink-500 to-red-500',
        '/profile': 'from-blue-600 via-green-500 to-teal-400',
        '/jobs': 'from-yellow-500 via-orange-400 to-red-500',
        '/resumes': 'from-green-500 via-emerald-400 to-lime-500',
        '/upload': 'from-indigo-500 via-blue-500 to-cyan-500',
        '/post-job': 'from-pink-600 via-purple-500 to-indigo-500',
        '/match-resume': 'from-rose-500 via-pink-400 to-fuchsia-500',
        '/online-jobs': 'from-teal-800 via-cyan-700 to-blue-700',
        '/match-online-jobs': 'from-orange-500 via-yellow-400 to-red-400',
    };

    const defaultGradient = 'from-gray-700 via-gray-600 to-gray-500';
    const currentGradient = pageColorMap[location.pathname] || defaultGradient;

    const topNavItems = [
        { path: '/home', label: 'Home', icon: <Home size={18} /> },
        { path: '/profile', label: 'Profile', icon: <User size={18} /> },
    ];

    const bottomNavItems = [
        { path: '/jobs', label: 'Jobs', icon: <Briefcase size={18} /> },
        { path: '/upload', label: 'Upload Resume', icon: <UploadCloud size={18} /> },
        { path: '/post-job', label: 'Post Job', icon: <PlusCircle size={18} /> },
        { path: '/resumes', label: 'Resumes', icon: <FileText size={18} /> },
        { path: '/match-resume', label: 'Match All', icon: <Layers size={18} /> },
        { path: '/match-online-jobs', label: 'Match Online', icon: <BadgeCheck size={18} /> },
        { path: '/online-jobs', label: 'Online Jobs', icon: <Globe size={18} /> },
    ];

    return (
        <div className={`w-full shadow-md bg-gradient-to-r ${currentGradient} text-white z-50`}>
            <div className="flex justify-between items-center px-4 py-3">
                <div className="text-2xl font-bold flex items-center gap-2">
                    <Briefcase size={28} />
                    Job Portal
                </div>
                <div className="flex gap-4 items-center">
                    {topNavItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-1 px-3 py-1 rounded-md font-medium transition duration-200 ${
                                location.pathname === item.path
                                    ? 'bg-white text-purple-700 shadow'
                                    : 'hover:bg-white/20'
                            }`}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-1 px-3 py-1 rounded-md font-medium transition duration-200 hover:bg-white/20"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pb-3 px-4">
                {bottomNavItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium transition duration-200 ${
                            location.pathname === item.path
                                ? 'bg-white text-purple-700 shadow'
                                : 'hover:bg-white/20'
                        }`}
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
