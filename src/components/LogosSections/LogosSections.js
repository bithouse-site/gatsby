import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import SanityImage from "gatsby-plugin-sanity-image"

import "./LogosSections.scss"

const LogosSections = ({ data }) => {
  console.log(data)

  const logoList = data.map(logo => {
    return (
      <div className="logos__image">
        <SanityImage {...logo} alt="logo" />
      </div>
    )
  })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobileTablet: {
      breakpoint: { max: 767, min: 577 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  }
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <FontAwesomeIcon
        class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left custom-arrow left"
        icon="fa-solid fa-chevron-left"
        onClick={() => onClick()}
      />
    )
  }
  const CustomRightArrow = ({ onClick }) => {
    return (
      <FontAwesomeIcon
        class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right custom-arrow right"
        icon="fa-solid fa-chevron-right"
        onClick={() => onClick()}
      />
    )
  }

  return (
    <div className="logos py-3 my-3">
      <Carousel
        responsive={responsive}
        autoPlay={logoList.length > 4}
        autoPlaySpeed={3000}
        infinite={logoList.length > 4}
        containerClass={"containerCarrusel"}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        removeArrowOnDeviceType={logoList.length <= 4 && ["tablet", "desktop"]}
      >
        {logoList}
      </Carousel>
    </div>
  )
}

export default LogosSections
