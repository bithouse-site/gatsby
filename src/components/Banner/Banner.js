import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useBanner from "../../hooks/useBanner"
import "./Banner.scss"

const Banner = () => {
  const banner = useBanner().allSanityBanner?.nodes[0]
  const textColor = banner?.color === "#FCFCFC" ? "black" : "#FCFCFC"
  return (
    <div className="Banner" style={{ backgroundColor: banner?.color.value }}>
      {banner?.image && (
          <GatsbyImage
            image={banner?.image.asset.gatsbyImageData}
            alt={banner?.description}
          />
      )}
      {banner?.title && (
        <p className="Title" style={{color: textColor}}>
          {banner?.title}
        </p>
      )}
    </div>
  )
}

export default Banner
