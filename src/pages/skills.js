import { useEffect, useState } from "react";
import Head from "next/head";

export default function home() {
    const [skills, setSkills] = useState(null);
    useEffect(() => {
        const getSkills = async () => {
            let res = await fetch('/myData/skills.json');
            let data = await res.json();
            setSkills(data);
        }
        getSkills();
    }, []);

    return (
        <>
            <Head>
                <title>My Skills</title>
            </Head>

            <header class="header">
                <a href="/">Udip's Portfolio</a>
                <div class="navigation">
                    <a href="/education">Education</a>
                    <a href="/projects">Projects</a>
                    <a href="/skills">Skills</a>
                    <a href="/experience">Experience</a>
                </div>
            </header>

            <ul className="skills-detail">
                {skills && skills.map((skill) => (
                    <li key={skill.id}>
                        <h2>{skill.Name}</h2>
                        <img src={skill.Image} alt={skill.Name}></img>
                    </li>
                ))}
            </ul>
        </>
    );
}