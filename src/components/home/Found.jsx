import React from 'react'
import {motion} from "framer-motion"
import mee from "../../assets/WhatsApp Image 2024-05-03 at 4.17.58 PM.png"





function Found() {
    const options ={
        initial:{
            x:"-100%",
            opacity:0

        },
        whileInView:{
            x:0,
            opacity:1,
        }
    }

  return (
    <section className='founder'>
        <motion.div
        {...options}>
            <img src ={mee} alt ="Founder" height={200} width={200}/>
            <h3>UTSAV SINGH </h3>
            <p>
                HEY, EVERYONE I AM UTSAV SINGH ,THE FOUNDER OF BTECH
                BURGER WALA.
                <br/>
                Burgers are a timeless symbol of good times, great food, and shared memories.
                Our aim is to create the most tasty burger on planet.
            </p>
        </motion.div>
    </section>
  )
}

export default Found
