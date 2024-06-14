import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import mee from "../../assets/WhatsApp Image 2024-05-03 at 4.17.58 PM.png"


const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>BTECH Burger Wala</h4>
          <p>
            We are BTECH  Burger Wala. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={mee} alt="Founder" />
              <h3>UTSAV Singh</h3>
            </div>

            <p>
              I am UTSAV SINGH, the founder of BTECH Burger Wala. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;