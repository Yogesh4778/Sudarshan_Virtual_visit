import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "../data/MP";
import { Link } from "react-router-dom"
const Slider = () => {
  const [mp] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = mp.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, mp]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);



  return (
    <section className="section">
      <div className="title">
        <h2>top Places</h2>
      </div>
      <div className="section-center">
        {mp.map((item, indexMp) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexMp === index) {
            position = "activeSlide";
          }
          if (
            indexMp === index - 1 ||
            (index === 0 && indexMp === mp.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <Link to={"/detail"}>
              <img src={image} alt={name} className="person-img" />
              </Link>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
