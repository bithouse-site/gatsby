import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useBanner from "../../hooks/useBanner"
import "./Banner.scss"

const Banner = () => {
  const banner = useBanner().allSanityBanner?.nodes[0]
  const textColor = banner?.color.value === "#FCFCFC" ? "#1B1C1E" : "#FCFCFC"
  const showText = banner?.image === null ? true : undefined

  return (
    <div className="Banner" style={{ backgroundColor: banner?.color.value }}>
      {banner?.image && (
        <GatsbyImage
          image={banner?.image.asset.gatsbyImageData}
          alt={banner?.description}
        />
      )}
      {showText && (
        <p className="Title" style={{ color: textColor }}>
          {banner?.title}
        </p>
      )}
    </div>
  )
}

export default Banner
