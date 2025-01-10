import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import navLogo from "../img/logo.png";
import menuButton from "../img/icon/menu.svg";
import telegramLogoblack from "../img/icon/telegram-logo-black.svg";
import linkedInLogoBlack from "../img/icon/linked-in-logo-black.svg";
import telegramLogoblue from "../img/icon/telegram-logo-blue.svg";
import linkedInLogoBlue from "../img/icon/linked-in-logo-blue.svg";

const NavBar = () => {
  const [telegramLogo, setTelegramLogo] = useState(telegramLogoblack);
  const [linkedInLogo, setLinkedInLogo] = useState(linkedInLogoBlack);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleLinkClick = (section) => {
    // Close menu
    closeMenu();
    
    // Navigate to home page and scroll to section
    navigate('/');
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -70
    });
  };

  return (
    <nav className="nav">
      <a className="nav__logo" href="/">
        <img className="nav__logo-pic" src={navLogo} width={50} alt="GPT Buddy Dev logo" />
        GPT Buddy Dev
      </a>
      <button className="menu-button" onClick={handleMenuClick}>
        <img src={menuButton} width={30} alt="Open menu button"/>
      </button>
      <ul className={`nav__links ${menuActive ? 'active' : ''}`}>
        <li>
          <a href="#" onClick={() => handleLinkClick('adventages')}>
            Our Advantages
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleLinkClick('reviews')}>
            Reviews
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleLinkClick('projects')}>
            Our Projects
          </a>
        </li>
        <li>
          <ul className="nav-social-links">
            <li>
              <a href="https://t.me/gptbuddy_online"
                onMouseEnter={() => setTelegramLogo(telegramLogoblue)}
                onMouseLeave={() => setTelegramLogo(telegramLogoblack)}
                target="_blank" rel="noopener noreferrer"
              >
                <img src={telegramLogo} width={30} alt="Telegram Logo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/gpt-buddy"
                onMouseEnter={() => setLinkedInLogo(linkedInLogoBlue)}
                onMouseLeave={() => setLinkedInLogo(linkedInLogoBlack)}
                target="_blank" rel="noopener noreferrer"
              >
                <img src={linkedInLogo} width={30} alt="Linked In Logo" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
