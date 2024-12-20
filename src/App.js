import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0);  // State for the current index

  // Function to handle next button click
  const nextPerson = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length); // Loop back to the start
  };

  // Function to handle prev button click
  const prevPerson = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length); // Loop back to the end
  };

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className='section-center'>
        {data.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === data.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={prevPerson}>
          <FiChevronLeft />
        </button>

        <button className='next' onClick={nextPerson}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
