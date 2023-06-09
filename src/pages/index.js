import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Udip's Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div className='info'>
          <h3>Welcome to My Portfolio</h3>
          <img id="desk" src="./image/image3.jpg"></img>
          <p>Here, we will see the work I have done over the time.</p>
          <p>Each link will take you on a tour to the designated page and show you the exact work which has been done by me.</p>

          <p>I have done my post graduation in Web Development from Humber College. I have been an enthusiast whenever it came to technology
            and building websites. My goal always has been to work and develop websites and products which can change people's lives with
            that.
          </p>
        </div>


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
  )
}
