import './About.css'
import { motion } from 'framer-motion'

import headshot from '../assets/Headshot.jpg'
import cplus from '../assets/cplus.svg'
import sql from '../assets/sql.svg'
import java from '../assets/javascript.svg'
import rstudio from '../assets/rstudio.png'
import aws from '../assets/amazon.svg'




const python = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";

function About(){
    return(
        <>
        <div className="about">
            <img src={headshot} alt="Headshot"></img>
            <h2>Learn More About Me</h2>
            <p>I am currently a Data and Information Fellow at Wofford College's Career Center, where I focus on automating and improving data management processes. With a solid foundation in Python and a growing expertise in Tableau, I leverage AI to streamline tasks and enhance data-driven insights. I am also a
            Software Engineering Fellow at Headstarter where I am embarking on building 5 AI projects in 5 weeks.
            </p>
        </div>
        <motion.div 
            initial={{opacity:0, x: 50}}
            whileInView={{opacity: 1, x: 0, transition: {delay: 1 , duration: 0.5}}}
            viewport={{once: false, amount: .5}} 
            className="skills">
            <ul>
                <li>Programming Languages</li>
                <li>
                <img className="python" src={python} alt="python logo"></img>
                <img className="cplus" src={cplus} alt="C++ logo"></img>
                <img className="sql" src={sql} alt="sql logo"></img>
                <img className="java" src={java} alt="javascript logo"></img>
                <img className="R" src={rstudio} alt="R logo"></img>
                </li>
                <li>Certifications:</li>
                <li><img className="Aws" src={aws} alt="amazon logo"></img><p>*Currently pursuing*</p></li>
                
            </ul>
        </motion.div>
        </>
    );
}

export default About