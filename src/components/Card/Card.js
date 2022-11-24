import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"

import "./Card.scss"

const Card = ({ data: { title, _rawContent, link, image, artists } }) => {
  const icon = artists?.imageIcon

  return (
    <div className="Card">
      {image && <SanityImage {...image} alt={`${title}`} />}
      {title && <h6 className="title-small Title">{title}</h6>}
      {_rawContent && (
          <PortableText className="Content" value={_rawContent} />
      )}
      {artists && (
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
      {link && (
        <a href={link} rel="noopener noreferrer" className="Link">
          <small>Ver más</small>
        </a>
      )}
    </div>
  )
}

export default Card
