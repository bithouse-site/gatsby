import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useBannerDoble from "../../hooks/useBannerDoble"
import "./BannerDoble.scss"

const BannerDoble = () => {
  const banner = useBannerDoble().allSanityBannerDoble?.nodes[0]
  const textColor = banner?.color.value === "#FCFCFC" ? "#1B1C1E" : "#FCFCFC"
  return (
    <div className="Banner" style={{ backgroundColor: banner?.color.value }}>
      {banner?.image && (
        <GatsbyImage
          image={banner?.image.asset.gatsbyImageData}
          alt={banner?.description}
        />
      )}
      {banner?.title && (
        <p className="Title" style={{ color: textColor }}>
          {banner?.title}
        </p>
      )}
    </div>
  )
}

export default BannerDoble