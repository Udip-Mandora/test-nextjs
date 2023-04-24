import { useEffect, useState } from "react";
import Head from "next/head";
// import styles from '../styles/Home.module.css'

export default function home() {
    const [education, setEducation] = useState(null);
    useEffect(() => {
        const getEducation = async () => {
            let res = await fetch('/myData/education.json');
            let data = await res.json();
            // let edu = data.data;
            setEducation(data);
        }
        getEducation();
    }, []);

    return (
        <>
            <Head>
                <title>My Education</title>
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


            <ul className="education-detail">
                {education && education.map((edu) => (
                    <li key={edu.id}>
                        <h2>{edu.Degree}</h2>
                        <p>{edu.Discipline}</p>
                        <p>{edu.Institute}</p>
                        <p>{edu.Location}</p>
                        <p>{edu.Started_at}</p>
                        <p>{edu.Ended_at}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}