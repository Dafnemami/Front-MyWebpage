import React, { useState } from "react";
import "./landing.css";
import StarsRating from 'react-star-rate';


// Imágenes en .jsx se importan acá y se usan como src:
import yoFlorencia from "../../assets/yoFlorencia.jpeg";
import yoCasita from "../../assets/yoCasita.jpeg";
import wave1 from "../../assets/wave1.svg";
import linkedin from "../../assets/logos/linkedin_logo.jpg";
import github from "../../assets/logos/github_logo.jpg";
import github2 from "../../assets/logos/github_logo_2.jpg";
import github3 from "../../assets/footer/github-square.svg";
import externalLink from "../../assets/external_link.svg";


// Imagenes para lugares


// Texto para lugares
const title1 = "Palacio Pereira";
const des1 = "Pereira es una ciudad colombiana, pero en Chile su representación más conocida toma forma en el popular Palacio Pereira, estructura que data del 1924 con un estilo Neoclásico";
const dir1 = "Bandera 76";
const exp1 = "Una de las cosas que mi mente recuerda son los detalles en mármol. Es una estructura que da la sensación de espacio y libertad, transmitiendo tranquilidad y permitiendo que la creatidad fluya"

const title2 = "Palacio Cousiño";
const des2 = "El Palacio Cousiño es una mansión ubicada en la ciudad de Santiago, Chile. Fue construido entre 1870 y 1878 por el arquitecto francés Paul Lathoud para el empresario minero Matías Cousiño.";
const dir2 = "Dieciocho 438";
const exp2 = "El salón dorado, fue mi espacio favorito. Me quedé un buen momento atrapada pensando en cómo hubiera sido asistir a un evento allí. Su escalera con tantos tipos de mármol y su increíble comedor son totalmente destacables."

const title3 = "Cerro Calán";
const des3 = "Cerro Calán tiene una altitud de 1.050 msnm y es el punto más alto de la ciudad de Santiago. Alberga el Observatorio Astronómico Nacional de Chile de la Universidad de Chile.";
const dir3 = "Precordillera en Las Condes";
const exp3 = "Recomendada caminada con una visión privilegiada de la ciudad. Arriba se dictan clases de astronomía. El 2017 tomé varias clases de Astronomía con Valentín González que me ayudaron a decidir qué estudiar (muy buenas charlas por cierto. Lamentablemente en mi caso, me hicieron percatarme que para mi la astronomía era solo un hobby)."


// Texto para ruta del completo
const title4 = "Dominó";
const des4 = "Vende completos desde 1952. El local de la calle Bandera es el más antiguo y el más conocido. En 2012, el local de Bandera fue declarado Monumento Histórico.";
const dir4 = "Sucursales en todo Chile. Mi sede favorita: Av. Hernando de Aguirre 35";
const exp4 = "Mi completo fav es el tipo 'dominó'. Fun fact: Ellos inventaron el día del completo."

const title5 = "Elkika Ilmenau";
const des5 = "Elkika Ilmenau es una empresa familiar de origen alemán, que se dedica a la elaboración de embutidos y productos cárnicos. Fue fundada en 1930 por el alemán Enrique Ilmenau.";
const dir5 = "Av. Hernando de Aguirre 47";
const exp5 = "Mi completo fav es el tipo 'italiano', con su gran mayo casera. Extra: Gran lomito italiano. Las papas fritas son anchas, como si fueran cortadas a mano."

const title6 = "El Completo Feliz";
const des6 = "El Completo Feliz es un emprendimiento familiar que nace en 2006 y se ubica a la salida del metro Patronato. Destaca por ofrecer completos veganos, permitiendo 12 variedades.";
const dir6 = "Av. Recoleta 313";
const exp6 = "Mi completo fav es el tipo 'vegano italiano chilote'. Extra: El megavegan pesa 1 kilo. Puedes mandar un WhatsApp al +569.4062983, transferir antes y después solo pasar a retirarlo."


function Landing() {

    //useState para lugares
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [di, setDir] = useState('');
    const [exp, setExp] = useState('');
    // const [nota, setNota] = useState('');

    const click1 = () => {
        setTitle(title1); setDes(des1); setDir(dir1);
        setExp(exp1); // setNota(nota1);
    }

    const click2 = () => {
        setTitle(title2); setDes(des2); setDir(dir2);
        setExp(exp2); setNota(nota2);
    }

    const click3 = () => {
        setTitle(title3); setDes(des3); setDir(dir3);
        setExp(exp3); setNota(nota3);
    }

    const click4 = () => {
        setTitle(title4); setDes(des4); setDir(dir4);
        setExp(exp4); setNota(nota4);
    }

    const click5 = () => {
        setTitle(title5); setDes(des5); setDir(dir5);
        setExp(exp5); setNota(nota5);
    }

    const click6 = () => {
        setTitle(title6); setDes(des6); setDir(dir6);
        setExp(exp6); setNota(nota6);
    }


    return (
    <main className="landing-container">

        <div className="container-general-1">

            {/* Fondo de dos imágenes */}
            <div className="container-boxleft"></div>
            <div className="container-boxright"></div>

            <div className="dafne-container">
                &lt; / DAFNE &gt; ...
            </div>

            <div className="cv-and-yoCasita-container">
                    <img className="yoCasita-landing" src={ yoCasita } alt="Yo en mi casita, un día con sol muy lindo" />
                <a href="https://www.canva.com/design/DAFwYUF2EEk/xI1wC0pYcr1JWDFNnwA2ww/view?utm_content=DAFwYUF2EEk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                    <div className="middle">
                        <div className="text">Mi CV</div>
                    </div>
                </a>
            </div>

            <a href="https://www.linkedin.com/in/dafne-arriagada-241350212/" target="_blank" rel="noreferrer">
                <img className="linkedin-logo logo-container-1" src={ linkedin } alt="Logo de linkedin" />
            </a>

            <a href="https://github.com/Dafnemami" target="_blank" rel="noreferrer">
                <img className="github-logo logo-container-1" src={ github2 } alt="Logo de github" />
            </a>

            <div className="mi-descrip">
                Licenciada en ciencias de la ingeniería con mención en física, cursando mi último año para la consecución del título de Ingeniera Civil Industrial.
                <br></br>
                <br></br>
                Experiencia en el desarrollo de aplicaciones web, con conocimientos en JavaScript, React, Node.js, TypeScript, NextJS, Postgresql, AWS y GitHub.
                <br></br>
                <br></br>
                En el futuro me gustaría aprender: VUE & Tailwind.
            </div>

        </div>

        <div className="container-general-2">
            <img className="layer1" src={ wave1 } alt="wave1" />
        </div>

        <div className="container-general-3">

            <div className="container-boxleft-lugares">
                <div className="title-3">LUGARES SANTIAGO</div>
                {/* <div className="line-title-3"></div> */}

                <div className="reactive-row">
                    <div className="elementleft">
                        <div className="title-element">{title1}</div>
                        <StarsRating value={4.5} count={7} disabled={true}/>
                        <div className="line-element-3"></div>
                        <button className="button-element" onClick={click1}>Más info</button>
                    </div>

                    <div className="elementleft">
                        <div className="title-element">{title2}</div>
                        <StarsRating value={4.5} count={7} disabled={true}/>
                        <div className="line-element-3"></div>
                        <button className="button-element" onClick={click2}>Más info</button>
                    </div>

                    <div className="elementleft">
                        <div className="title-element">{title3}</div>
                        <StarsRating value={4.5} count={7} disabled={true}/>
                        <div className="line-element-3"></div>
                        <button className="button-element" onClick={click3}>Más info</button>
                    </div>
                </div>

            </div>

            <div className="container-relleno">
                {/* Parchar el desplazamiento que tuve que hacer para las waves */}
            </div>


            <div className="container-boxright-completos">
                <div className="title-3">RUTA DEL COMPLETO</div>

                <div className="reactive-row">
                    <div className="elementleft">
                        <div className="title-element">{title4}</div>
                        <StarsRating value={4.5} count={7} disabled={true}/>
                        <div className="line-element-3"></div>
                        <button className="button-element" onClick={click4}>Más info</button>
                    </div>

                    <div className="elementleft">
                        <div className="title-element">{title5}</div>
                        <StarsRating value={4.5} count={7} disabled={true}/>
                        <div className="line-element-3"></div>
                        <button className="button-element" onClick={click5}>Más info</button>
                    </div>

                    <div className="elementleft">
                        <div className="title-element">{title6}</div>
                        <StarsRating value={4.5} count={7} disabled={true}/>
                        <div className="line-element-3"></div>
                        <button className="button-element" onClick={click6}>Más info</button>
                    </div>
                </div>

            </div>

        </div>


        <div className="container-general-4">
            {title ? ( // Si title existe, entonces renderiza el div
                <div className="hookedContainer">
                    <div className="title-hooked">{title}</div>
                    <div className="des-hooked">{des}</div>
                    <div className="left-title-1"> DIRECCIÓN:</div>
                    <div className="dir-hooked">{di}</div>
                    <div className="left-title-2"> MI EXPERIENCIA:</div>
                    <div className="exp-hooked">{exp}</div>
                    {/* <div className="nota-3">{nota}</div> */}
                </div>
            ): null }

        </div>

        <div className="container-general-5">
            <div className="title-5">PROJECTOS PERSONALES Y UNIVERSITARIOS</div>

            <div className="proyectos-personales">
                <div className="elementleft-proyecto">
                    <div className="title-element-proyecto">Projecto semestral aplicaciones web (IIC2513)</div>
                    <div className="descrip-proyecto">
                        En este proyecto realicé principalmente el front-end. Techs usadas: NodeJS, React, Sequelize, Postgresql, GitHub.
                    </div>
                    <div className="line-element-proyecto"></div>
                    <div className="botones-proyecto">
                        <a href="https://come-6-hi.onrender.com/" target="_blank" rel="noreferrer">
                            <button className="button-element-proyecto">Deploy</button>
                            <img className="external-link-icon" src={ externalLink } alt="Icono de link externo" />
                        </a>
                        <a href="https://github.com/Dafnemami/Front-Projecto-IIC2143" target="_blank" rel="noreferrer">
                            <button className="button-element-proyecto"> GitHub</button>
                            <img className="logo_proyecto" src={ github3 } alt="Logo de github" />
                        </a>
                    </div>
                </div>

                <div className="elementleft-proyecto">
                    <div className="title-element-proyecto">Projecto semestral Bases de Datos (IIC2143)</div>
                    <div className="descrip-proyecto">
                        En este proyecto participé de todo un poco. Fue la primera vez que trabajé con html de hecho. Techs usadas: PHP, Postgresql, GitHub.
                    </div>
                    <div className="line-element-proyecto"></div>
                    <div className="botones-proyecto">
                    <button className="button-element-proyecto"> Deploy</button>
                        <img className="external-link-icon" src={ externalLink } alt="Icono de link externo" />
                        <a href="https://github.com/Dafnemami/AirLogistic" target="_blank" rel="noreferrer">
                            <button className="button-element-proyecto"> GitHub</button>
                            <img className="logo_proyecto" src={ github3 } alt="Logo de github" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
            


    </main>


    ); // Fin return

} // Fin Landing FUNC

export default Landing;
