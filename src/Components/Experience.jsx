
import './Experience.css'
import { motion } from 'framer-motion'

const wofford = 'https://www.wofford.edu/';
const headstarter = 'https://headstarter.co/';
const oncocyte = 'https://oncocyte.com/';


function Experience(){
    return(
        <>
        <motion.h1
            initial={{opacity:0}}
            whileInView={{opacity: 1, transition: {delay: 0.2 , duration: 1}}}
            viewport={{once: false, amount: 1}} 
            className='exp-title'>Experience
        </motion.h1>

        <motion.div 
            initial={{opacity:0, x: 500}}
            whileInView={{opacity: 1, x: 0, transition: {delay: 0.2 , duration: 1}}}
            viewport={{once: false, amount: .5}} 
            className='experiences'>
            <motion.ul
                initial={{opacity:0}}
                whileInView={{opacity: 1, transition: {delay: 0.2 , duration: 1}}}
                viewport={{once: false, amount: .5}} 
            >Data and Information Fellow
                <p><a href={wofford}>Wofford College</a>: June 2024 - Present</p>
                <li>Conducted data analysis and tracked metrics to create actionable reports on student engagement.</li>
                <li>Led a team of 8 student ambassadors in organizing collaborative programs to enhance campus involvement.</li>
                <li>Highlight career development data trends in blogs, newsletters, and websites to optimize student outcomes.</li>
            </motion.ul>
            <motion.ul
                initial={{opacity:0}}
                whileInView={{opacity: 1, transition: {delay: 0.2 , duration: 1}}}
                viewport={{once: false, amount: .5}} >Software Engineering Fellow
                <p><a href={headstarter}>Headstarter</a>: July 2024 - Present</p>
                <li>Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI.</li>
                <li>Developed projects from design to development collaborating with 3+ engineering fellows.</li>
                <li>Coached by Google, Capital One, and Bloomburg engineers on meeting industry standard projects. </li>
            </motion.ul>
            <motion.ul
                initial={{opacity:0}}
                whileInView={{opacity: 1, transition: {delay: 0.2 , duration: 1}}}
                viewport={{once: false, amount: .5}} >Bayesion False Discovery Researcher
                <p><a href={wofford}>Wofford College</a>: June 2021 - August 2023</p>
                <li>Compared different methodologies of improving syndromic surveillance to aid the discovery of potential health outbreaks.</li>
                <li>Retrieved and analyzed over 1,000,000 inputs of daily surface level 8-hour ozone data from 1997 to 2022 through the US Environmental Protection Agency's air explorer database.</li>
                <li>Prepared ozone data accessibility by analyzing and adjusting for timely consideration of decreasing trends.</li>
            </motion.ul>
            <motion.ul
                initial={{opacity:0}}
                whileInView={{opacity: 1, transition: {delay: 0.2 , duration: 1}}}
                viewport={{once: false, amount: .5}} > Bioinformatics Intern
                <p><a href={oncocyte}>Oncocyte</a>: June 2022 - August 2022</p>
                <li>Downloaded and cleaned methylation and mutation dataset with over 4,300 samples from the Cancer Genome Atlas and generated Heatmaps to visualize the data.</li>
                <li>Employed different methods of normalization in 15 cancer types in the validation of DetermaIOTM results.</li>
                <li>Developed a PubMed web scrapping program using Python for oncogene-related literature review.</li>
            </motion.ul>
        </motion.div>
        </>
    );
}

export default Experience