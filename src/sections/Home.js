import React from "react";

export default function Home() {
    return ( <
        section id = "home"
        className = "p-8 h-screen flex flex-col justify-center items-center text-center" >
        <
        h1 className = "text-4xl font-bold mb-4" > Hi, I 'm Dilkhush Yogi</h1> <
        p className = "mb-4" > Final year BCA student & aspiring developer < /p> <
        a href = "/CV_2025050820491149.pdf"
        download className = "bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition" >
        Download Resume <
        /a> < /
        section >
    );
}