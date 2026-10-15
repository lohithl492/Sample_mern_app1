import { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg.jpg";
import img2 from "../assets/img2.jpg.jpg";
import img3 from "../assets/img3.jpg.jpg";
import "./Home.css";

function Home() {
  let [currentSlide, setCurrentSlide] = useState(0);

  let slides = [
    { image: img1, alt: "Movie poster 1" },
    { image: img2, alt: "Movie poster 2" },
    { image: img3, alt: "Movie poster 3" },
  ];

  let nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  let previousSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        (previousSlide + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-title">Home Page</h1>

      <div className="poster-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`poster-slide ${
              currentSlide === index ? "active" : ""
            }`}
            aria-hidden={currentSlide !== index}
          >
            <img
              src={slide.image}
              alt=""
              className="poster-background"
            />

            <img
              src={slide.image}
              alt={slide.alt}
              className="poster-image"
            />
          </div>
        ))}

        <button
          type="button"
          className="poster-control poster-previous"
          onClick={previousSlide}
          aria-label="Previous poster"
        >
          &#10094;
        </button>

        <button
          type="button"
          className="poster-control poster-next"
          onClick={nextSlide}
          aria-label="Next poster"
        >
          &#10095;
        </button>

        <div className="poster-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              className={`poster-indicator ${
                currentSlide === index ? "selected" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show poster ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;