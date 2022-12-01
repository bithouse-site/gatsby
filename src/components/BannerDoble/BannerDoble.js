import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import "./BannerDoble.scss"

const BannerDoble = ({
  data: {
    description,
    subtitle,
    _rawContent,
    colorLeft,
    colorRight,
    image,
    button,
    buttonType,
  },
}) => {
  const bgColorImage = colorLeft === null ? "#0A694D" : colorLeft?.value
  const bgColorText = colorRight === null ? "#0A694D" : colorRight?.value
  const altText = description === null ? "Banner Doble" : description

  const darkColors = ["#0A694D", "#868585", "#1B1C1E"]
  const textColor = darkColors.includes(bgColorText) ? "light" : "dark"
  const buttonColor = darkColors.includes(bgColorText)
    ? "alternative"
    : "default"
  const subtitleIcon = subtitle?.imageIcon

  return (
    <div className="BannerDoble">
      {image && (
        <div
          className="ImageContainer"
          style={{ backgroundColor: bgColorImage }}
        >
          <SanityImage {...image} alt={altText} className="ImageWrapper" />
        </div>
      )}
      <div
        className={`Text ${textColor}`}
        style={{ backgroundColor: bgColorText }}
      >
        {_rawContent && (
          <PortableText value={_rawContent} style={{ color: textColor }} className="RichText"/>
        )}
        {subtitleIcon && (
          <div className="Subtitle">
            <SanityImage
              {...subtitleIcon}
              alt="Icon Image"
              loading="eager"
              className="Icon"
            />
            <div className="Content">{subtitle?.description}</div>
          </div>
        )}
        {button?.link &&
          (buttonType === "button" ? (
            <a
              href={button?.link}
              rel="noreferrer"
              className={`Button ${buttonColor}`}
            >
              <small>{button?.nameButton}</small>
            </a>
          ) : (
            <a href={button?.link} rel="noreferrer" className={`Link`}>
              <small className="label-large">{button?.nameButton}</small>
            </a>
          ))}
      </div>
    </div>
  )
}

export default BannerDoble
