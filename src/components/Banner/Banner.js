import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "./Banner.scss"

const Banner = ({data : {title, description, color, image}}) => {
  const textColor = color?.value === "#FCFCFC" ? "#1B1C1E" : "#FCFCFC"
  const showText = image === null ? true : undefined
  const bgColor = color === null ? "#0A694D" : color?.value
  const altText = description === null ? "Banner" : description

  return (
    <div className="Banner" style={{ backgroundColor: bgColor }}>
      {image?.asset && (
        <GatsbyImage
          image={image.asset.gatsbyImageData}
          alt={altText}
        />
      )}
      {showText && (
        <p className="Title" style={{ color: textColor }}>
          {title}
        </p>
      )}
    </div>
  )
}

export default Banner
