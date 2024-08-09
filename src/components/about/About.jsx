import React from "react";
import "./about.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa6";
// import { FaCcStripe } from "react-icons/fa"
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoReact, IoLogoCss3, IoLogoNodejs } from "react-icons/io5";
import { SiSvelte, SiFirebase } from "react-icons/si";
// import { BsStripe } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";

export default function About() {
  return (
    <section id="about">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiSvelte className="experience__details-icon" />
              <div>
                <h4>Svelte</h4>
              </div>
            </article>
            <article className="experience__details">
              <RiTailwindCssFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
          </div>
        </div>

        {/*====== Backend Tech ====== */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoPostgresql className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsStripe className="experience__details-icon" />
              <div>
                <h4>Stripe</h4>
              </div>
            </article> */}
        </div>
        </div>
      </div>
    </section>
  );
}
