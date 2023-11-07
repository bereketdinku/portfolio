import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "25",
  },
  {
    id: 2,
    title: "Html",
    percentage: "25",
  },
  {
    id: 3,
    title: "Html",
    percentage: "25",
  },
  {
    id: 4,
    title: "Html",
    percentage: "25",
  },
  {
    id: 5,
    title: "Html",
    percentage: "25",
  },
];
export const Skills = () => {
  return (
    <div>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>React</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Flutter</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Flutter</h4>
              <small className="text-light"> Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
