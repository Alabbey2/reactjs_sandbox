import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HeroCarousel() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/600x400/?nature,water"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Lasting positive legacy</h3>
      <p>"Conscience is an opened wound, only the truth can heal it"</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/600x400/?forest"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Honourable Leadership</h3>
      <p>"All that glitters is not gold. Of what gain or benefit it to be rich through crooked means while fellow human beings languish in abject poverty. Public service is a calling to serve humanity, not an avanue to steal from the people.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/600x400/?birds"
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
