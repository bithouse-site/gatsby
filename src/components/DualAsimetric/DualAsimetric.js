import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import "./DualAsimetric.scss"

const DualAsimetric = ({
  data: {
    title,
    content,
    description,
    colorLeft,
    colorRight,
    image,
    imageSide,
    button,
  },
}) => {
  const bgColorImage =
    imageSide === "left" ? colorLeft?.value : colorRight?.value
  const bgColorText =
    imageSide === "left" ? colorRight?.value : colorLeft?.value
  const textColor = bgColorText === "#FCFCFC" ? "#1B1C1E" : "#FCFCFC"
  const altText = description === null ? "Banner Dual Asimetric" : description
  const buttonColor = bgColorText === "#0A694D" ? "alternative" : "default"

  return (
    <div className={`DualAsimetric ${imageSide}`}>
      {image?.asset && (
        <div
          className="ImageContainer"
          style={{ backgroundColor: bgColorImage }}
        >
          <GatsbyImage image={image.asset.gatsbyImageData} alt={altText} />
        </div>
      )}
      <div className="TextContainer" style={{ backgroundColor: bgColorText }}>
        {(title || content) && (
          <>
            <p className="Title" style={{ color: textColor }}>
              {title}
            </p>
            <p className="Content" style={{ color: textColor }}>
              {content}
            </p>
          </>
        )}
        {button?.link && (
          <a
            href={button?.link}
            rel="noreferrer"
            className={`Button ${buttonColor}`}
          >
            {button?.nameButton}
          </a>
        )}
      </div>
    </div>
  )
}

export default DualAsimetric
