import React, { useRef } from "react";
import "./portfolio.scss";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/amazPro.png",
    desc: "E-commerce website built with react and redux",
  },
  {
    id: 2,
    title: "AI powered Mobile APP",
    img: "/ethioplant.jpg",
    desc: "The mobile app design to detect crop disease from their leaf and give treatment procedure.It design to help farmer and agriculture worker.",
  },
  {
    id: 3,
    title: "Booking Mobile App",
    img: "/booking.jpg",
    desc: "The mobile app design for the hotel booking.Each hotel have different kind of services.It design with react native and firebase",
  },
  {
    id: 4,
    title: "Furniture E-commerce",
    img: "/furniture.PNG",
    desc: "The website is used sell different kind of furniture product.It design with react,react-redux and firebase.",
  },
  {
    id: 5,
    title: "Amharic Chatbot",
    img: "/AIchat.PNG",
    desc: "The chatbot design to help people with mental health problem.It design with machine learning and python UI.",
  },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
