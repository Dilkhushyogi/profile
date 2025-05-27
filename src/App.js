// // App.js
// import React from "react";

// export default function App() {
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "Python",
//     "Django",
//     "MySQL",
//     "MS Word",
//     "MS Excel",
//   ];
//   const projects = [
//     "Theme Mode (Dark/Light)",
//     "User Login Panel",
//     "Vehicle Parking Software",
//     "Responsive Navbar",
//     "Pop-up Ad",
//   ];
//   const links = ["home", "about", "skills", "projects", "contact"];

//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
//       <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
//         <ul className="flex justify-center space-x-6 p-4">
//           {" "}
//           {links.map((link) => (
//             <li key={link}>
//               <a
//                 href={`#${link}`}
//                 className="capitalize text-gray-700 dark:text-white hover:text-blue-500"
//               >
//                 {" "}
//                 {link}{" "}
//               </a>{" "}
//             </li>
//           ))}{" "}
//         </ul>{" "}
//       </nav>{" "}
//       <section
//         id="home"
//         className="p-8 h-screen flex flex-col justify-center items-center text-center"
//       >
//         <h1 className="text-4xl font-bold mb-4"> Hi, I 'm Dilkhush Yogi </h1>{" "}
//         <p className="mb-4"> Final year BCA student & aspiring developer </p>{" "}
//         <a
//           href="/CV_2025050820491149.pdf"
//           download
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           Download Resume{" "}
//         </a>{" "}
//       </section>{" "}
//       <section id="about" className="p-8">
//         <h2 className="text-3xl font-bold mb-4"> About Me </h2>{" "}
//         <p className="mb-2">
//           {" "}
//           A dedicated and results - driven final - year student with a strong
//           academic background in computer science.{" "}
//         </p>{" "}
//         <p className="mb-1">
//           {" "}
//           Location: Bapu Nagar, Bilwa, Jaipur(302022){" "}
//         </p>{" "}
//         <p className="mb-1"> Email: dilkhushyogi2509 @gmail.com </p>{" "}
//         <p className="mb-1"> Phone: +91 7413992509 </p>{" "}
//         <p className="mb-1">
//           {" "}
//           LinkedIn:{" "}
//           <a
//             href="https://www.linkedin.com/in/dilkhush-yogi-07512a316"
//             className="text-blue-400"
//           >
//             {" "}
//             Profile{" "}
//           </a>{" "}
//         </p>{" "}
//       </section>{" "}
//       <section id="skills" className="p-8">
//         <h2 className="text-3xl font-bold mb-4"> Skills </h2>{" "}
//         <ul className="grid grid-cols-2 gap-2">
//           {" "}
//           {skills.map((skill, index) => (
//             <li
//               key={index}
//               className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl"
//             >
//               {" "}
//               {skill}{" "}
//             </li>
//           ))}{" "}
//         </ul>{" "}
//       </section>{" "}
//       <section id="projects" className="p-8">
//         <h2 className="text-3xl font-bold mb-4"> Projects </h2>{" "}
//         <ul className="space-y-2">
//           {" "}
//           {projects.map((project, index) => (
//             <li
//               key={index}
//               className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow"
//             >
//               {" "}
//               {project}{" "}
//             </li>
//           ))}{" "}
//         </ul>{" "}
//       </section>{" "}
//       <section id="contact" className="p-8">
//         <h2 className="text-3xl font-bold mb-4"> Contact Me </h2>{" "}
//         <form className="flex flex-col space-y-4 max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-2 rounded bg-gray-100 dark:bg-gray-800"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-2 rounded bg-gray-100 dark:bg-gray-800"
//           />
//           <textarea
//             placeholder="Your Message"
//             className="p-2 rounded bg-gray-100 dark:bg-gray-800"
//           >
//             {" "}
//           </textarea>{" "}
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//           >
//             {" "}
//             Send{" "}
//           </button>{" "}
//         </form>{" "}
//       </section>{" "}
//     </div>
//   );
// }

import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Project";
// import Contact from "./sections/Contect";
import Navbar from "./components/Navbar";
// import './project.html';

export default function App() {
    return ( <
        div className = "bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300" >
        <
        Navbar / >
        <
        Home / >
        <
        About / >
        <
        Skills / >
        <
        Projects / >
        <
        contact / >
        <
        /div >
    );
}
