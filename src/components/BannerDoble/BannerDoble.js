import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"
import "./BannerDoble.scss"

const BannerDoble = ({
  data: { description, _rawContent, colorLeft, colorRight, image, button },
}) => {
  
  
  const bgColorImage = colorLeft === null ? "#0A694D" : colorLeft?.value
  const bgColorText = colorRight === null ? "#0A694D" : colorRight?.value
  const altText = description === null ? "Banner Doble" : description

  const darkColors = ["#0A694D", "#868585", "#1B1C1E"]
  const textColor = darkColors.includes(bgColorText)
    ? "light"
    : "dark"
  
  return (
    <div className="BannerDoble">
      {image?.asset && (
        <div
          className="ImageContainer"
          style={{ backgroundColor: bgColorImage }}
        >
          <GatsbyImage image={image.asset.gatsbyImageData} alt={altText} />
        </div>
      )}
      <div className={`Text ${textColor}`} style={{ backgroundColor: bgColorText }}>
        {_rawContent && (
            <PortableText
              value={_rawContent}
              style={{ color: textColor }}
            />
        )}
        {button?.link && (
          <div className="Button">
            <a
              href={button?.link}
              rel="noreferrer"
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
