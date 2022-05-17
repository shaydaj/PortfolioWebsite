import React from "react";
import "./experience.css";
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiSwift } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiFlutter } from "react-icons/si";

const experience = () => {
  return (
    <section id="experience">
      <h5>My skills</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Languages</h3>
          <div className="experience__content">
            <div>
              <article className="experience__details">
                <FaPython className="experience__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>

              <article className="experience__details">
                <SiJavascript className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <div>
                  <SiSwift className="experience__details-icon" />
                  <h4>Swift</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__other"></div>
          <h3>Other</h3>
          <article className="experience__details-icon">
            <SiReact className="experience" />
            <div>
              <h4>ReactJs</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <SiTensorflow className="experience__details-icon" />
            <div>
              <h4>TensorFlow</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <SiNodedotjs cclassName="experience__details-icon" />
            <div>
              <h4>NodeJs</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <SiNumpy className="experience__details-icon" />
            <div>
              <h4>NumPy</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <SiFlutter className="experience__details-icon" />
            <div>
              <h4>Flutter</h4>
              <small className="text-light">Beginner</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default experience;
