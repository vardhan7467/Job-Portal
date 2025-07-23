// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';

// import Login from './pages/Login';
// import Register from './pages/Register';
// import Homepage from './pages/HomePage';

// import JobList from './components/JobList';
// import ResumeUpload from './components/ResumeUpload';
// import JobMatch from './components/JobMatch';
// import JobPostForm from './components/JobPostForm';
// import ResumeList from './components/ResumeList';
// import ResumeMatchAllJobs from './components/ResumeMatchAllJobs';
// import OnlineJobs from './components/OnlineJobs';
// import MatchOnlineJobs from './components/MatchOnlineJobs';
// import Profile from './components/Profile';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/home" element={<Homepage />} />
//           <Route path="/jobs" element={<JobList />} />
//           <Route path="/upload" element={<ResumeUpload />} />
//           <Route path="/match" element={<JobMatch />} />
//           <Route path="/post-job" element={<JobPostForm />} />
//           <Route path="/resumes" element={<ResumeList />} />
//           <Route path="/match-resume" element={<ResumeMatchAllJobs />} />
//           <Route path="/online-jobs" element={<OnlineJobs />} />
//           <Route path="/match-online-jobs" element={<MatchOnlineJobs />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/HomePage';

import JobList from './components/JobList';
import ResumeUpload from './components/ResumeUpload';
import JobMatch from './components/JobMatch';
import JobPostForm from './components/JobPostForm';
import ResumeList from './components/ResumeList';
import ResumeMatchAllJobs from './components/ResumeMatchAllJobs';
import OnlineJobs from './components/OnlineJobs';
import MatchOnlineJobs from './components/MatchOnlineJobs';
import Profile from './components/Profile';

function AppContent() {
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Hide Navbar on login, register, and homepage
  const hideNavbarPaths = ['/', '/register', '/home'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar setToken={setToken} />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/upload" element={<ResumeUpload />} />
          <Route path="/match" element={<JobMatch />} />
          <Route path="/post-job" element={<JobPostForm />} />
          <Route path="/resumes" element={<ResumeList />} />
          <Route path="/match-resume" element={<ResumeMatchAllJobs />} />
          <Route path="/online-jobs" element={<OnlineJobs />} />
          <Route path="/match-online-jobs" element={<MatchOnlineJobs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
