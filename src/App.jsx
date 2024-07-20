import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'

import { motion } from 'framer-motion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar"><Navbar/></div>
      <div className="header"><Header/></div>


      <motion.div 
        initial={{opacity:0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.2 , duration: 0.5}}}
        viewport={{once: false, amount: .5}} 
        className="About"><About/></motion.div>


      <div className="experience"><Experience/></div>
      <div className="projects"><Projects/></div>


      


  
      <motion.h1
      initial={{opacity:0, x:-50}}
      whileInView={{opacity:1, x:0, trantion: {delay: 0.2, duration: 0.5}}}
      viewport={{once:false, amount:.5}}
      className='footer'>More projects in the comming weeks!</motion.h1>

      <h1 className='thanks'>
        
      <motion.p 
          initial={{opacity:0, x:-50}}
          whileInView={{opacity:1, x:0, trantion: {delay: 5, duration: 10}}}
          viewport={{once:false, amount:.5}}>
          Thank you
        </motion.p>

        <motion.p 
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0, trantion: {delay: 5, duration: 10}}}
          viewport={{once:false, amount:.5}}>
          .
        </motion.p>
      </h1>
    </>
  )
}

export default App
