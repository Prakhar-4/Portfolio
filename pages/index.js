import Head from "next/head";
import Layout, { siteTitle } from "../components/layout.js";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>About Me</h1>
        <p>
          I'm Prakhar Grover, a passionate 2nd year B.Tech Computer Science
          student at SRM Institute of Science and Technology with my
          specialization in Cloud Computing, eager to explore the ever-evolving
          world of technology. My interests lie in software development, quantum
          computing, and cybersecurity.
        </p>
        <p>
          I actively seek out new challenges and thrive on collaborative
          projects that enhance my problem-solving abilities. Beyond coding, I
          stay abreast of the latest tech trends and have recently been diving
          into the exciting realm of Web3. I am determined to leverage my skills
          and knowledge to make a significant contribution to the dynamic
          digital landscape.
        </p>
        <p>My interests include online gaming, cricket and music.</p>
        <h1>My Socials</h1>
        <p>
          <a href="https://github.com/Prakhar-4" target="_blank">
            Github @Prakhar-4
          </a>
        </p>
        <p>
          <a href="http://www.linkedin.com/in/prakhar04" target="_blank">
            Linkedin @prakhar04
          </a>
        </p>
        <p>
          <a href="https://devfolio.co/@prakhar_4" target="_blank">
            Devfolio @prakhar_4
          </a>
        </p>
        <p>
          <a href="https://www.hackerrank.com/profile/pg6359" target="_blank">
            HackerRank @pg6359
          </a>
        </p>
        <h1>Projects</h1>
        <p>
          <a
            href="https://github.com/vinay-04/unfold-precompile-evm"
            target="_blank"
          >
            ZkSnark Precompile
          </a>
        </p>
        <p>A ZkSnark based precompile for the Avalanche network</p>
        <p>
          <a href="https://github.com/Prakhar-4/pet-store-api" target="_blank">
            Pet Store API
          </a>
        </p>
        <p>
          A simple api to perform CRUD operation using FastAPI and firebase
          realtime database for a pet-store.
        </p>
        <h1>Hackathons</h1>
        <p>
          I thoroughly enjoy taking part in hackathons. They provide an
          excellent opportunity to quickly acquire knowledge about emerging
          technologies and, of course, connect with fellow individuals who share
          similar interests.
        </p>
        <p>
          I participated in a few hackathons during my 3rd semester and gained
          valuable knowledge including my last hackathon
        </p>
        <p>
          <a href="https://unfoldweb3.com/#home">Unfold 2023</a> and our team
          won{" "}
          <a href="https://x.com/Avalanche_In/status/1717543567571464642?s=20">
            3rd Position
          </a>{" "}
          in the Avalanche Track and won $1000 as the prize amount.
        </p>
        <h1>Academics</h1>
        <p>Semester wise GPA</p>
        <p>Semester 1: 10</p>
        <p>Semester 2: 10</p>
        <h2></h2>
        <h4>Contact me</h4>
        <p>prakhar.grover04@gmail.com</p>
      </section>
    </Layout>
  );
}
