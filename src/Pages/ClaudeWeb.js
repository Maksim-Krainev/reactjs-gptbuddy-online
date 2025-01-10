import React, {useEffect} from 'react';

import img01 from "../img/claude/claude_01.jpg";
import img02 from "../img/claude/claude_02.jpg";
import img03 from "../img/claude/claude_03.jpg";
import img04 from "../img/claude/claude_04.jpg";
import PythonClaude from "../img/claude/claude_04.jpg";


// Animation libraries
import 'aos/dist/aos.css';
import AOS from 'aos';
import NavBar from "../components/NavBar";


function ClaudeWeb() {

  useEffect(() => {
    AOS.init({duration: 1500, once: false});
  }, []);

  return (
    <div>
    <div className="App">
      <div className="container">
      <NavBar />
      </div>
      <main>
        <section className="hero">
          <div className="container">
            <div className="right-section">
              <h1 className="title-1" data-aos="fade-up">
              Python Claude Web Authenticator Introduction
              </h1>
              <p>
              Claude, a powerful AI language model, has gained significant popularity among developers and researchers. However, unlike some other AI platforms, Claude does not provide an official API for programmatic access. This limitation poses a significant challenge for those wanting to integrate Claude's capabilities into their applications or automated workflows. The Python Claude Web Authenticator library was developed as an unofficial solution to address these challenges. 
              </p>
            </div>
            <div className="left-section" style={{ position: 'relative' }}>
              <img 
                src={PythonClaude} 
                alt="pysyun chain hero pictures" 
                className="hero-laptop_pic" 
                style={{ position: 'relative', zIndex: 2}} 
              />
              <svg 
                className="absolute" 
                width="404" 
                height="392" 
                fill="none" 
                viewBox="0 0 404 392" 
                style={{ 
                  position: 'absolute', 
                  top: '-80px', 
                  left: '-30px', 
                  opacity: 0.1, 
                  zIndex: 1 
                }}
              >
                <defs>
                  <pattern 
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659" 
                    x="0" 
                    y="0" 
                    width="20" 
                    height="20" 
                    patternUnits="userSpaceOnUse"
                  >
                    <rect 
                      x="0" 
                      y="0" 
                      width="4" 
                      height="4" 
                      className="text-accent-500/20 dark:text-accent-800" 
                      fill="currentColor" 
                    ></rect>
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
              </svg>
              <div 
                className="tablet-hide"
                style={{ 
                  position: 'absolute', 
                  top: '-130px', 
                  right: '0', 
                  width: '400px', 
                  height: '250px', 
                  backgroundColor: 'gray', 
                  borderRadius: '1.5rem', 
                  opacity: 0.1 
                }} 
              ></div>
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="container">
            <h2 className="title-2"  data-aos="fade">Benefits</h2>
            <p>The Python Claude Web Authenticator library offers several benefits</p>
            <ul className="adventages">
              <li className="adventage right">
                <div className="right-text">
                  <h3 className="title-3">Access to Claude's Capabilities</h3>
                  <p data-aos="zoom-in" >Despite the lack of an official API, users can still integrate Claude's powerful AI into their applications and workflows.</p>
                </div>
                <img src={img01}  alt="advetage" className="adventage-pic" data-aos="slide-right"/>
              </li>
              <li className="adventage left">
                <div className="right-text">
                  <h3 className="title-3">Secure Authentication</h3>
                  <p data-aos="zoom-in">The library provides a secure method for obtaining and managing authentication credentials.</p>
                </div>
                <img src={img02}  alt="advetage" className="adventage-pic" data-aos="slide-left" />
              </li>
              <li className="adventage right">
                <div className="right-text">
                  <h3 className="title-3">Enhanced Workflow Integration</h3>
                  <p data-aos="zoom-in">Developers can incorporate Claude's capabilities into their existing Python-based applications and scripts, enabling seamless automation.</p>
                </div>
                <img  src={img03}  alt="advetage" className="adventage-pic" data-aos="slide-right"/>
              </li>
              <li className="adventage left">
                <div className="right-text">
                  <h3 className="title-3">Comprehensive Interaction</h3>
                  <p data-aos="zoom-in"> The library offers a range of interaction methods, allowing for versatile use of Claude's features.</p>
                </div>
                <img src={img04}  alt="advetage" className="adventage-pic" data-aos="slide-left" />
              </li>
            </ul>
          </div>
        </section>    
      </main>
    </div>
    </div>
  );
}

export default ClaudeWeb;
