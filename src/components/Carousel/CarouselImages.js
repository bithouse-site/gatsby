import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import useArticle from "../../hooks/useArticle"
import { StaticImage } from "gatsby-plugin-image"
import SanityImage from "gatsby-plugin-sanity-image"
import "./CarouselImages.scss"

const CarouselImages = () => {
  const dataArticles = useArticle().allSanityArticle?.nodes[0]?.carousel

  const images = dataArticles?.map((image, idx) => (
    <div key={idx}>
      <SanityImage {...image} alt="Image Art" />
    </div>
  ))

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={true}
      showThumbs={false}
    >
      {images}

      {/* 
      <SanityImage {...dataArticles[0]} alt="Image Art" />
      <SanityImage {...dataArticles[1]} alt="Image Art" />
      <SanityImage {...dataArticles[2]} alt="Image Art" /> */}
    </Carousel>
  )
}

export default CarouselImages
