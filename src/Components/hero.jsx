import React from 'react';
import { motion } from 'framer-motion';
import './ComponentStyles/hero.css';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import {MdSupportAgent} from 'react-icons/md';
import MCAAI from '../assets/MCAAI.png';

const HeroSection = () => {
const navigate = useNavigate();

  return (
    <div className="hero-section">
      <motion.div className="overlay"
      initial={{ opacity: 0, y:0}}
          whileInView={{ opacity: 1, y: 0,x:0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: false }}>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
           whileInView={{ opacity: 1, y: 0,x:0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
         Embracing Technology{' '} <br />
         <TypeAnimation
        sequence={['For innovators', 2000, '', 500]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        style={{ color: '#0bedf5' }}
      />
        </motion.h1>
       

         <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          The Maseno University Computing And Informatics studenta Association is a vibrant, Student led body committed to bridging the technological divide across all fuculties through its inclsive and forward-thinking nature.Rooted in innovations and collaboration, MUCISA empowers students from all disciplines to explore, apply, and thrive in the digital space by providing platforms for skill development, research, and TechDriven Solutions
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, x:150 }}
          whileInView={{ opacity: 1, y: 0,x:0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <button onClick={()=>navigate( '/contact')} className="join-btn">Talk to Us <MdSupportAgent className='hero-icon'/> </button>
        </motion.div>

       <motion.div className='hero-partners'>
        <h4>In Partnership with:</h4>
        <img src={MCAAI} alt="MCAAI" />
       </motion.div>
      
      </motion.div>
    </div>
  );
};

export default HeroSection;

