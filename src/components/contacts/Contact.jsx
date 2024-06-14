import React from "react";
import {motion } from "framer-motion"
import React from 'react'

function contact() {
  return (
    <section className="contact">
        <motion.form>
            <h2>Contact us</h2>
            <input type ="text" placeholder="Name"/>
            <input type ="text" placeholder="Email"/>
            <textarea placeholder ="message" cols="30" rows="10"></textarea>
            <button type ="submit">Send</button>
            

        </motion.form>
    </section>
  )
}

export default contact
