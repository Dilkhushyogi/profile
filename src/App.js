import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";
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
        Contact / >
        <
        /div >
    );
}
