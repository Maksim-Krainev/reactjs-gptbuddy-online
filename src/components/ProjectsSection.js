import React from 'react';

import Morphpic from '../img/mrph.jpg';
import PlayIpddoger from '../img/ipdoggie-header-bg.webp';
import HabsterPunks from "../img/hamster_holding.jpg";
import PysyunChain from "../img/pysyun_chain/pysyun_chain_bg.jpg";
import PythonClaude from "../img/claude/claude_01.jpg"


const projectsData = [
  {
    title: "GPT Morph",
    description: "Our cutting-edge technology for code generation",
    image: Morphpic,
    link: "https://gptmorph.com"
  },
  {
    title: "Play ipdoggie",
    description: "Protect your intellectual property with Play ipdoggie",
    image: PlayIpddoger,
    link: "https://ipdoggie.com/"
  },
  {
    title: "Hamsterpunks",
    description: "Dive into the world of Blockchain Level 2 gaming with HamsterPunks NFTs, where your in-game activities matter.",
    image: HabsterPunks,
    link: "https://hamsterpunks.com/"
  },
  {
    title: "Pysyun Chain",
    description: "Introducing pysyun_chain: Streamline Your Data Processing with Powerful Pipelines! ",
    image: PysyunChain,
    link: "/pysyun_chain"
  },
  {
    title: "Python Claude Web Authenticator Introduction",
    description: "Claude is a powerful AI model popular among developers, but it lacks an official API. This complicates integration into applications. The unofficial Python Claude Web Authenticator library addresses this issue.",
    image: PythonClaude,
    link: "/claude_web"
  }
  
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="title-2">Our projects</h2>
        <ul className="adventages">
          {projectsData.map((project, index) => (
            <li className={`adventage ${index % 2 === 0 ? 'right' : 'left'}`} key={project.title}>
              <div className="right-text">
                <h3 className="title-3">{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="cta" target="_blank" rel="noopener noreferrer">
                  <span className="hover-underline-animation">Visit site</span>
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                </a>
              </div>
              <img src={project.image} alt={project.title} className="adventage-pic" />
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
};

export default ProjectsSection;
