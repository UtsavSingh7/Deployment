import React from 'react'
import {motion} from "framer-motion";
import Found from './Found';
import  Me from './Me';


const Home = () => {
  return (
    <>
    <section className="home">
    <div>
      <motion.h1 initial={{
        x:"-100%",
        opacity:0,
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      >BTECH BURGER WALA</motion.h1>
      <motion.p initial={{
        x:"-100%",
        opacity:0,
      }}
      whileInView={{
        x:0,
        opacity:1
      }}>It's Burger o'Clock.</motion.p>
    </div>
   
    <motion.a href="menuCard"
   initial={{
      y:"-100%",
      opacity:0,
    }}
    whileInView={{
      y:0,
      opacity:1
    }}transition={{
      delay:0.4,
    }

    }>Explore Menu</motion.a>
    </section>
    <Found/>
    <Me/>
    </>

  )
}

export default Home;
