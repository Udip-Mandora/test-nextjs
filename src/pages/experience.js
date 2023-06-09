import { useEffect, useState } from "react";
import Head from "next/head";
// import styles from '../styles/Home.module.css'

export default function home() {
    const [experience, setExperience] = useState(null);
    useEffect(() => {
        const getExperience = async () => {
            let res = await fetch('/myData/experience.json');
            let data = await res.json();
            // let edu = data.data;
            setExperience(data);
        }
        getExperience();
    }, []);

    return (
        <>
            <Head>
                <title>My Experience</title>
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

            <main>
                <ul className="experience-detail">
                    {experience && experience.map((exp) => (
                        <li key={exp.id}>
                            <h2>{exp.Company}</h2>
                            <p>{exp.Title}</p>
                            <p>{exp.Started}</p>
                            <p>{exp.End}</p>
                            <p>{exp.Location}</p>
                            <p>{exp.Description}</p>
                        </li>
                    ))}
                </ul>
            </main>

            <footer class="footer">
                <h3>©️ Udip Mandora, 2023</h3>
                <div class="myForm">
                    <form>
                        <label>Email:</label>
                        <input type="email" placeholder='Please Enter Your Email Here'></input>
                        <input id="mybtn" type="submit" value="Contact Me"></input>
                    </form>
                </div>
            </footer>
        </>
    );
}