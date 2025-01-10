import React, { useEffect} from 'react';



import heroLaptop from "../img/photo-hero-laptop.jpg";
import img01 from "../img/art-frendly.jpg";
import img02 from "../img/representing-stream.jpg";
import img03 from "../img/featuri-crystal.jpg";
import fatBuddy from "../img/fat-buddy.jpg";
import vadimRozov from "../img/vadim-rozov-spacebus-ceo.jpg";


// Animation libreris

import 'aos/dist/aos.css'; 
import AOS from 'aos';
import NavBar from "../components/NavBar";
import Projects from "../components/ProjectsSection";

function Home() {

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
                Boost Your <br />Coding Efficiency
              </h1>
              <p>
                Enhance your coding experience with a personal GPT Buddy - a skilled human-developer tailored for GPT code generation.
              </p>
              <a className="primery-button" href="https://t.me/gptbuddy_online">Contact us</a>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star-text">| Efficient coding | Personalized assistance</span>
              </div>
              <div className="review"  data-aos="fade-down">
                <p className="review-text">“I'm happy to be part of the GPT Buddy team.”</p>
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
                src={heroLaptop} 
                alt="GPT Buddy Dev" 
                className="hero-laptop_pic" 
                style={{ position: 'relative', zIndex: 2 }} 
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

        <section id="adventages" className="section-2">
          <div className="container">
            <h2 className="title-2"  data-aos="fade">Boost Your Coding Efficiency</h2>
            <p>Enhance your coding experience with a personal GPT Buddy.</p>
            <ul className="adventages">
              <li className="adventage right">
                <div className="right-text">
                  <h3 className="title-3">Speed up coding tasks</h3>
                  <p data-aos="zoom-in" >Our team of skilled human-developers is dedicated to providing quick and efficient coding assistance, ensuring you can complete tasks in record time.</p>
                </div>
                <img src={img02}  alt="advetage" className="adventage-pic" data-aos="slide-right"/>
              </li>
              <li className="adventage left">
                <div className="right-text">
                  <h3 className="title-3">Improve code quality</h3>
                  <p data-aos="zoom-in">With the expertise of our GPT Buddies, you can enhance the quality of your code, making it more efficient and error-free.</p>
                </div>
                <img src={img03}  alt="advetage" className="adventage-pic" data-aos="slide-left" />
              </li>
              <li className="adventage right">
                <div className="right-text">
                  <h3 className="title-3">Enhance productivity</h3>
                  <p data-aos="zoom-in">Collaborate with our GPT Buddies to boost your productivity and streamline your coding workflow, allowing you to focus on innovation.</p>
                </div>
                <img  src={img01}  alt="advetage" className="adventage-pic" data-aos="slide-right"/>
              </li>
            </ul>
          </div>
        </section>

        <section id="reviews" className="quote">
  <div className="container">
    <div className="review">
      <svg 
        className="svg-background" 
        width="404" 
        height="404" 
        fill="none" 
        viewBox="0 0 404 404" 
        role="img" 
        aria-labelledby="svg-squares"
      >
        <title id="svg-squares">squares</title>
        <defs>
          <pattern 
            id="ad119f34-7694-4c31-947f-5c9d249b21f3" 
            x="0" 
            y="0" 
            width="30" 
            height="30" 
            patternUnits="userSpaceOnUse"
          >
            <rect 
              x="0"
              y="0" 
              width="4" 
              height="4" 
              className="text-primary" 
              fill="currentColor" 
            ></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"></rect>
      </svg>
      <div className="quote-content">
        <p>"These guys are pretty cheap and pretty fast. Best for POCs."</p>
        <p className="name">
          <img src={vadimRozov} alt="Vadim, Spacebus.dev CEO." width={35} className="rewiev-pic" />
          Vadim,&nbsp; <a href="https://Spacebus.dev" className="spaceBus-company-link" target="__new">Spacebus.dev</a> &nbsp;CEO.
        </p>
      </div>
    </div>
  </div>
</section>        
<section className="contact">
  <div className="container">
    <div className="contact-us">
      <h2 className="title-2">Contact Us.</h2>
      <p>“GPT Buddy Dev is the way to reduce Web3 development costs compared to classical Outsourcing Services.” - Dr. Natalia, IP NFT (<a className="ipnft-project-link" href="https://ipnft.uk" target="__new">ipnft.uk</a>).</p>
      <a className="primery-button" href="https://t.me/gptbuddy_online">Contact us</a>
    </div>
  </div>
  <div className="left-section" style={{ position: 'relative' }}>
  <div 
  className="gray-squard"
      style={{ 
        position: 'absolute', 
        top: '-500px', 
        left: '130px', 
        width: '700px', 
        height: '400px', 
        backgroundColor: 'gray', 
        borderRadius: '1.5rem', 
        opacity: 0.1 
      }} 
    ></div>
    <svg 
      className="absolute" 
      width="404" 
      height="392" 
      fill="none" 
      viewBox="0 0 404 392" 
      style={{ 
        position: 'absolute', 
        top: '-400px', 
        right: '230px', 
        opacity: 0.1, 
        zIndex: 1 
      }}
    >
      <defs>
        <pattern 
          id="pattern-squares" 
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
      <rect width="404" height="392" fill="url(#pattern-squares)"></rect>
    </svg>
    
  </div>
</section>
<Projects />
      </main>
    </div>
    </div>
  );
}

export default Home;
