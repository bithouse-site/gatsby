import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "./BannerDoble.scss"

const BannerDoble = ({
  data: { title, description, color, image, button },
}) => {
  const textColor = color?.value === "#FCFCFC" ? "#1B1C1E" : "#FCFCFC"
  const bgColor = color === null ? "#0A694D" : color?.value
  const altText = description === null ? "Banner Doble" : description

  return (
    <div className="Banner" style={{ backgroundColor: bgColor }}>
      {image?.asset && (
        <GatsbyImage image={image.asset.gatsbyImageData} alt={altText} />
      )}
      <div className="Text">
        {title && (
          <p className="Title" style={{ color: textColor }}>
            {title}
          </p>
        )}
        {button?.link && (
          <div className="Button">
            <a
              href={button?.link}
              rel="noreferrer"
              style={{ color: textColor }}
            >
              {button?.nameButton}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default BannerDoble
