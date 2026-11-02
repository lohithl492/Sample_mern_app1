
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.jpg";
import "./Home.css";

function Home() {
  const slides = [
    {
      image: img1,
      title: "Welcome to MyPortal",
      description: "Your workspace for learning, teamwork, and productivity.",
    },
    {
      image: img2,
      title: "Work Smarter Together",
      description: "Manage tasks and collaborate with your team efficiently.",
    },
    {
      image: img3,
      title: "Build Your Future",
      description: "Turn your ideas into action with the right tools.",
    },
  ];

  return (
    <div className="home-page container-fluid py-4">
      <div
        id="homeCarousel"
        className="carousel slide carousel-fade home-carousel"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner rounded-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.image}
                className="d-block w-100 home-slide-image"
                alt={slide.title}
              />

              <div className="home-slide-overlay">
                <div className="container">
                  <div className="home-slide-content">
                    <span className="home-badge">
                      <i className="bi bi-stars me-2"></i>
                      Welcome
                    </span>

                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>

                    <a href="/about" className="btn home-cta">
                      Explore More
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous */}
        <button
          className="carousel-control-prev home-carousel-control"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
          aria-label="Previous slide"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>

        {/* Next */}
        <button
          className="carousel-control-next home-carousel-control"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
          aria-label="Next slide"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      {/* Welcome section */}
      <section className="home-welcome text-center">
        <span className="welcome-label">GET STARTED</span>
        <h2>Everything You Need, In One Place</h2>
        <p>
          A simple and efficient portal to help you manage your work,
          stay organized, and achieve more every day.
        </p>
      </section>
    </div>
  );
}

export default Home;
