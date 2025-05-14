import React from "react";

export default function Projects() {
    const projects = [
        "Theme Mode (Dark/Light)",
        "User Login Panel",
        "Vehicle Parking Software",
        "Responsive Navbar",
        "Pop-up Ad"
    ];
    return ( <
        section id = "projects"
        className = "p-8" >
        <
        h2 className = "text-3xl font-bold mb-4" > Projects < /h2> <
        ul className = "space-y-2" > {
            projects.map((project, index) => ( <
                li key = { index }
                className = "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow" > { project } < /li>
            ))
        } <
        /ul> < /
        section >
    );
}