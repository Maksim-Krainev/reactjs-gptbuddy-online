import React, { useEffect} from 'react';



import img01 from "../img/pysyun_chain/pysyun_chain-Efficiency.jpg";
import img02 from "../img/pysyun_chain/pysyun_chain-Flexibility.jpg";
import img03 from "../img/pysyun_chain/pysyun_chain-Performance.jpg";
import img04 from "../img/pysyun_chain/pysyun_chain-Readability.jpg";
import fatBuddy from "../img/fat-buddy.jpg";
import pysyunChain from "../img/pysyun_chain/pysyun_chain_bg.jpg";


// Animation libreris

import 'aos/dist/aos.css'; 
import AOS from 'aos';
import NavBar from "../components/NavBar";


function PysyunChain() {

  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
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
              pysyun_chain
              </h1>
              <p>
              pysyun_chain is an innovative Python library designed to simplify and optimize data processing workflows. By implementing a versatile pipeline structure, pysyun_chain allows users to efficiently handle large amounts of data with ease. This case study explores the key aspects of pysyun_chain, from the problem it addresses to the benefits it provides. 
              </p>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star-text">| Efficient coding | Personalized assistance</span>
              </div>
              <div className="review"  data-aos="fade-down">
                <p className="review-text">“Introducing `pysyun_chain`: Streamline Your Data Processing with Powerful Pipelines!”</p>
                <p className="name">
                  <a href="https://t.me/FatBuddyBot" className="rewiev-link" target="__new">
                    <img src={fatBuddy} alt="Mia Thomas" width={35} className="rewiev-pic" />
                    @FatBuddyBot
                  </a>
                </p>
              </div>
            </div>
            <div className="left-section" style={{ position: 'relative' }}>
              <img 
                src={pysyunChain} 
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
            <p>The introduction of pysyun_chain brings several notable benefits to data processing workflows</p>
            <ul className="adventages">
              <li className="adventage right">
                <div className="right-text">
                  <h3 className="title-3">Efficiency</h3>
                  <p data-aos="zoom-in" >Reduces the amount of boilerplate code, making pipelines easier to write and maintain.</p>
                </div>
                <img src={img01}  alt="advetage" className="adventage-pic" data-aos="slide-right"/>
              </li>
              <li className="adventage left">
                <div className="right-text">
                  <h3 className="title-3">Performance</h3>
                  <p data-aos="zoom-in">Multi-threading capabilities in ChainableGroup enhance processing speed and efficiency.</p>
                </div>
                <img src={img02}  alt="advetage" className="adventage-pic" data-aos="slide-left" />
              </li>
              <li className="adventage right">
                <div className="right-text">
                  <h3 className="title-3">Readability</h3>
                  <p data-aos="zoom-in">The use of an intuitive method for chaining processing steps improves code readability and reduces complexity.</p>
                </div>
                <img  src={img03}  alt="advetage" className="adventage-pic" data-aos="slide-right"/>
              </li>
              <li className="adventage left">
                <div className="right-text">
                  <h3 className="title-3">Flexibility</h3>
                  <p data-aos="zoom-in">The architecture is designed to be extensible, allowing users to integrate custom processors and adapt the library to their specific needs.</p>
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

export default PysyunChain;
