import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { StaticImage } from "gatsby-plugin-image"
import "./HeroBg.scss"

const HeroBg = ({ data }) => {
  const image = data?.heroVisitant?.imageHeroBg

  return (
    <div className="heroBg">
      <div></div>
      <div className="BgImage">
        <StaticImage
          src="../../../content/images/BgHero.svg"
          alt="Background Image"
          className="imageBg"
        />
      </div>
      <div className="contentText">
        {image && (
          <div className="imageText">
            <SanityImage {...image} alt="Image Visitants" />
          </div>
        )}
        <h5 className="headline-small">{data?.heroVisitant?.titleHeroBg}</h5>
        <div></div>
      </div>
    </div>
  )
}

export default HeroBg
