import './Header.css'
import { motion } from 'framer-motion'


function Header(){
    return(
        <motion.div 
            initial={{opacity:0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition: {delay: 0.2 , duration: 1}}}
            viewport={{once: false, amount: .5}} className='head'>
        <div className="intro">
            <h3>Hello, I am</h3>
            <h1>Godwins Tuyishime</h1>
            <h4>Welcome to my portfolio. Come back each week for updates.</h4>
        </div>
        </motion.div>
    );
}

export default Header