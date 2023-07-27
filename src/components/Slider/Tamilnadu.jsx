import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "../data/TamilNadu";

const Tamilnadu= () => {
  const [tamilnadu] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = tamilnadu.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, tamilnadu]);

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
        {tamilnadu.map((item, indexTamilnadu) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexTamilnadu === index) {
            position = "activeSlide";
          }
          if (
            indexTamilnadu === index - 1 ||
            (index === 0 && indexTamilnadu === tamilnadu.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
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

export default Tamilnadu;
