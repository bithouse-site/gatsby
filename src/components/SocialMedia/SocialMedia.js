import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useFooter from "../../hooks/useFooter"
import "./SocialMedia.scss"

const SocialMedia = ({ logo }) => {
  const footer = useFooter().allSanityFooter?.nodes[0]
  const mediaData = footer?.media
  const logoData = footer?.logo

  const socialMedia = mediaData.map(media => {
    return (
      <a
        href={media?.link}
        target="_blank"
        rel="noopener noreferrer"
        key={media._key}
      >
        <GatsbyImage
          image={media?.icon.asset.gatsbyImageData}
          alt={media.link}
        />
      </a>
    )
  })
  return (
    <>
      {logo ? (
        <>
          <GatsbyImage
            className="Logo"
            image={logoData.asset.gatsbyImageData}
            alt="logo"
          />

          <div className="Medias">{socialMedia}</div>
        </>
      ) : (
        <div className="MediasHero">{socialMedia}</div>
      )}
    </>
  )
}

export default SocialMedia
