import { useState, useEffect } from "react";

import img1 from "../assets/img1.jpg.jpg";
import img2 from "../assets/img2.jpg.jpg";
import img3 from "../assets/img3.jpg.jpg";

function Home() {
  let [currentSlide, setCurrentSlide] = useState(0);

  let posters = [
    {
      image: img1,
      title: "Welcome",
      description: "Welcome to the HR Management System",
    },
    {
      image: img2,
      title: "Our Services",
      description: "Manage employees efficiently",
    },
    {
      image: img3,
      title: "HR Management",
      description: "Organize your workplace",
    },
  ];

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentSlide((previousSlide) => {
        return (previousSlide + 1) % posters.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  let nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % posters.length);
  };

  let previousSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + posters.length) % posters.length
    );
  };

  return (
    <div className="container-fluid px-3 px-md-4">
      <h1 className="text-center my-4">Home Page</h1>

      <div className="custom-carousel">

        {/* Posters */}
        {posters.map((poster, index) => (
          <div
            key={index}
            className="custom-slide"
            style={{
              display: currentSlide === index ? "block" : "none",
            }}
          >
            <img
              src={poster.image}
              alt={poster.title}
              className="poster-image"
            />

            <div className="custom-caption">
              <h2>{poster.title}</h2>
              <p>{poster.description}</p>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          type="button"
          className="custom-prev"
          onClick={previousSlide}
          aria-label="Previous poster"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="custom-next"
          onClick={nextSlide}
          aria-label="Next poster"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="custom-indicators">
          {posters.map((poster, index) => (
            <button
              key={index}
              type="button"
              className={
                currentSlide === index ? "indicator active" : "indicator"
              }
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show poster ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;
