import { motion } from 'framer-motion'
import './Projects.css'

import pubmed_pic from'../assets/Pubmed_pic.png';


const pubmed = 'https://github.com/T-Godwins/Oncocyte-Internship/blob/main/PubMed%20Scraping.ipynb';

function Projects(){
    return(
        <>
        <motion.h1
            initial={{opacity:0}}
            whileInView={{opacity: 1, transition: {delay: 0.2 , duration: 1}}}
            viewport={{once: false, amount: 1}} 
            className='pro-title'>Projects
        </motion.h1>

        <div className='project'>
            <motion.div 
                initial={{opacity:0, y: 50}}
                whileInView={{opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5}}}
                viewport={{once: false, amount: .5}} 
                className='name'>
                <h1>Gather article for your research with a PubMed Scrapper</h1>
                <p>PubMed comprises of over 37 million citations for biomedical literature. 
                    I developed an article scrapper to promote efficient and thorough literature review. 
                    Selenium, Beautiful Soup and Pandas packages were used wihtin Jupyter Notebook.</p>
                <button><a href={pubmed}>Repository</a></button>
            </motion.div>
            
            <motion.div 
                initial={{opacity:0, x: 50}}
                whileInView={{opacity: 1, x: 0, transition: {delay: 1 , duration: 0.5}}}
                viewport={{once: false, amount: .5}} 
                className='demo'>
                <img className = 'pic' src={pubmed_pic} alt='notebook'></img>
            </motion.div>
        </div>
        </>
    );
}

export default Projects