import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HeroCarousel() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/600x400/?black"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>"Conscience is an opened wound, only the truth can heal it!"</h3>
      <p className="hausa">"Ba ruwan mu da adini, yare benle ina mutumin ya fito. Wanda ze temaka a nijeriya ne munaso. Chuchi ya yawa akan yare, adini da garin kasa."</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/600x400/?dark"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Honourable Leadership</h3>
      <p>My country people. Abeg make we no allow dis politicians use tribe, religion, abi where dem born person for we country de cheat us. We be one people.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/600x400/?grey"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Ignorance breeds corruption</h3>
      <p>Nobody can force an opinion, culture or religion on any group of people. Do not let one person's opinion define your personality or existence. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default HeroCarousel;
