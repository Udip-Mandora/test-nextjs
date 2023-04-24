import { useEffect, useState } from "react";
import Head from "next/head";

export default function home() {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        const getProjects = async () => {
            let res = await fetch('/myData/project.json');
            let data = await res.json();
            setProjects(data);
        }
        getProjects();
    }, []);

    return (
        <>
            <Head>
                <title>My Projects</title>
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

            <ul className="projects-detail">
                {projects && projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.Name}</h2>
                        <p>{project.Content}</p>
                    </li>
                ))}
            </ul>

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