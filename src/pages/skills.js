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

            <main>
                <ul className="skills-detail">
                    {skills && skills.map((skill) => (
                        <li key={skill.id}>
                            <h2>{skill.Name}</h2>
                            <img id="skill-image" src={skill.Image} alt={skill.Name}></img>
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