import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const BannerCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <div>
        <StaticImage src="../../images/logoWhite.svg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <StaticImage src="../../images/logoWhite.svg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <StaticImage src="../../images/logoWhite.svg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}

export default BannerCarousel
