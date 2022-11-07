import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useFooter from "../../../hooks/useFooter"
import "./SocialMedia.scss"
import { Link } from "gatsby"

const SocialMedia = () => {
  const footer = useFooter().allSanityFooter?.nodes[0]
  const mediaData = footer?.media
  const logo = footer?.logo

  const socialMedia = mediaData.map(media => {
    return (
      <Link
        to={media?.link}
        target="_blank"
        rel="noopener noreferrer"
        key={media._key}
      >
        <GatsbyImage
          image={media?.icon.asset.gatsbyImageData}
          alt={media.link}
        />
      </Link>
    )
  })
  return (
    <>
      <GatsbyImage
        className="Logo"
        image={logo.asset.gatsbyImageData}
        alt="logo"
      />
      <div className="Medias">{socialMedia}</div>
    </>
  )
}

export default SocialMedia
