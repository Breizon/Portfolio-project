import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

//dont use img in production

const data = [
  {
    id: 1,
    image: IMG6,
    title: "Random phrase generator",
    github: "https://github.com/Breizon/entregable-1.git",
    demo: "https://proyecto-entregable-01.netlify.app/",
  },
  {
    id: 2,
    image: IMG5,
    title: "Weather App",
    github: "https://github.com/Breizon/entregable-2.git",
    demo: "https://weathe-app-entregable-2.netlify.app",
  },
  {
    id: 3,
    image: IMG4,
    title: "Wiki Rick and Morty",
    github: "https://github.com/Breizon/entregable-3.git",
    demo: "https://rick-and-morty-project03.netlify.app",
  },
  {
    id: 4,
    image: IMG3,
    title: "Users list",
    github: "https://github.com/Breizon/entregable-4.git",
    demo: "https://users-cards-list.netlify.app",
  },
  {
    id: 5,
    image: IMG2,
    title: "Pokedex",
    github: "https://github.com/Breizon/entregable-05.git",
    demo: "https://pokedex-entregable05.netlify.app",
  },
  {
    id: 6,
    image: IMG1,
    title: "Ecommerce",
    github: "https://github.com/Breizon/Entregable-6.git",
    demo: "https://e-commerce-entregable06.netlify.app",
  },
  {
    id: 7,
    image: IMG7,
    title: "Age Calculator",
    github: "https://github.com/Breizon/Age-calculator.git",
    demo: "https://age-calculator-challenge-bybecn.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="porfolio" className="section_portfolio">
      <h5>Take a look at</h5>
      <h2>Portfolio</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="container portfolio_container"
      >
        {data?.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className=" portfolio_item swiper-slide">
              <div className="portfolio_item-image">
                <img className="portfolio_image" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
