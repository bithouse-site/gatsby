import React from "react"
import { useMediaQuery } from "react-responsive"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import { toPlainText } from "@portabletext/react"
import { Link } from "gatsby"

import "./Card.scss"

const Card = ({ data: { title, slug, _rawContent, image, artists } }) => {
  const icon = artists?.imageIcon
  const titleDisplay = title?.length > 24 ? `${title.slice(0, 24)}...` : title
  const plainContent = _rawContent ? toPlainText(_rawContent) : ""
  const contentIsLong = plainContent.length > 200
  const contentDisplay = contentIsLong
    ? `${plainContent.slice(0, 200)}...`
    : _rawContent
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const showArtists = artists !== undefined && !isMobile

  return (
    <div className="Card">
      {image && (
        <div>
          <SanityImage {...image} alt={`${title}`} className="ImageContainer" />
        </div>
      )}
      {title && <h6 className="title-small Title">{titleDisplay}</h6>}
      {_rawContent && (
        <div className="Content">
          {contentIsLong ? (
            <p>{contentDisplay}</p>
          ) : (
            <PortableText value={contentDisplay} />
          )}
        </div>
      )}
      {showArtists && (
        <div className="ArtistsContainer">
          <div className="Profile">
            <a href={artists?.link} rel="noopener noreferrer">
              <SanityImage
                {...icon}
                alt="Icon Image"
                loading="eager"
                className="Icon"
              />
              <small className="label-small">{artists?.label}</small>
            </a>
          </div>
          <div className="Artists">{artists?.description}</div>
        </div>
      )}
      {slug && (
        <Link to={`../${slug}`} className="Link">
          <small>Ver más</small>
        </Link>
      )}
    </div>
  )
}

export default Card
