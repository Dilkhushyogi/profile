// import React from "react";

// export default function Skills() {
//     const skills = [
//         "HTML", "CSS", "JavaScript", "Python", "Django", "MySQL"," N8N Workflow ", "MS Word", "MS Excel"
//     ];
//     return ( <
//         section id = "skills"
//         className = "p-8" >
//         <
//         h2 className = "text-3xl font-bold mb-4" > Skills < /h2> <
//         ul className = "grid grid-cols-2 gap-2" > {
//             skills.map((skill, index) => ( <
//                 li key = { index }
//                 className = "bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl" > { skill } < /li>
//             ))
//         } <
//         /ul> < /
//         section >
//     );
// }


import React from "react";

export default function Skills() {
    const skills = [
        "Python",
        "Java",
        "JavaScript",
        "HTML5",
        "CSS3",
        "React.js",
        "Django",
        "MySQL",
        "n8n Workflow Automation",
        "API Integration",
        "Git",
        "GitHub",
        "Data Structures & Algorithms",
        "DBMS"
    ];

    return (
        <section id="skills" className="p-8">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>

            <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}
