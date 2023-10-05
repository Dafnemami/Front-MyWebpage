import React from 'react'
import './footer.css';
import { toast } from 'react-hot-toast'; //  manejo notificaciones

import linkedin_logo from "../../assets/footer/logo-linkedin.svg";
import github_logo from "../../assets/footer/github-square.svg";
import mail_logo from "../../assets/footer/mail-outline.svg";


function Footer() {
  
  const clickMail = () => {
    // window.open('mailto: dafne.arrigada@uc.cl');
    toast('Hola! Mi mail es dafne.arriagada@uc.cl (puedes copiarlo directamente desde aquí)',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      fontFamily: 'Fira Code'
      },
    }
  );
  }

  return (

  <div className="footer-container">
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" >
            <img className='logo mail' src={ mail_logo } onClick={clickMail} alt="Logo de mail" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/dafne-arriagada-241350212/">
            <img className="logo linkedin" src={ linkedin_logo } alt="Logo de linkedin" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/Dafnemami">
            <img className='logo github' src={ github_logo } alt="Logo de github" />
          </a></li>
      </ul>
      
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Volver al inicio</a></li>
        {/* <li className="menu__item"><a className="menu__link" href="#">About</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Contact</a></li> */}
      </ul>


      <div className='close'>
        Dafne Arriagada | Santiago, Octubre 2023
      </div>


    </footer>

  </div>


  ); 

}


export default Footer;

