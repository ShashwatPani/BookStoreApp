import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Homme"; // Correct casing and path
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import About from "./about/About";
import Contact from "./contact/Contact";
import Jobs from "./jobs/Jobbs";
import Apply from "./components/Apply";

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/about"element={<About />} />
      <Route path="/course"element={<Courses />} />
      <Route path="/contact"element={<Contact />} />
      <Route path="/signup"element={<Signup />} />
      <Route path="/jobs"element={<Jobs />} />
      <Route path="/apply"element={<Apply />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
