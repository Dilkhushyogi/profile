import React from "react";

export default function Navbar() {
    const links = ["home", "about", "skills", "projects", "contact"];
    return ( <
        nav className = "fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50" >
        <
        ul className = "flex justify-center space-x-6 p-4" > {
            links.map((link) => ( <
                li key = { link } >
                <
                a href = { `#${link}` }
                className = "capitalize text-gray-700 dark:text-white hover:text-blue-500" > { link } <
                /a> < /
                li >
            ))
        } <
        /ul> < /
        nav >
    );
}