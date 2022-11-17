import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { PortableText } from "@portabletext/react"
import "./DualAsymmetric.scss"

const DualAsymmetric = ({
  data: {
    title,
    _rawRichTextDualA,
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
  const textColor =
    bgColorText === "#0A694D" ||
    bgColorText === "#1B1C1E" ||
    bgColorText === "#868585"
      ? "#FCFCFC"
      : "#1B1C1E"
  const altText = description === null ? "Banner Dual Asimetric" : description
  const buttonColor =
    bgColorText === "#0A694D" ||
    bgColorText === "#1B1C1E" ||
    bgColorText === "#868585"
      ? "default"
      : "alternative"

  return (
    <div className={`DualAsymmetric ${imageSide}`}>
      {image?.asset && (
        <div
          className="ImageContainer"
          style={{ backgroundColor: bgColorImage }}
        >
          <GatsbyImage image={image.asset.gatsbyImageData} alt={altText} />
        </div>
      )}
      <div className="TextContainer" style={{ backgroundColor: bgColorText }}>
        {(title || _rawRichTextDualA) && (
          <>
            <p className="Title" style={{ color: textColor }}>
              {title}
            </p>
            <PortableText value={_rawRichTextDualA} className="Content" />
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

export default DualAsymmetric
