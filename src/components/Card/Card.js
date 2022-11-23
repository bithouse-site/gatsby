import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"

import "./Card.scss"

const Card = ({ data: { title, type, _rawContent, link, image, artists } }) => {
  const icon = artists?.imageIcon

  return (
    <div className={`Card ${type}`}>
      {image && <SanityImage {...image} alt={`${title}`} />}
      {title && <h3>{title}</h3>}
      {_rawContent && <PortableText value={_rawContent} className="Content" />}
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
              <h6>{artists?.label}</h6>
            </a>
          </div>
          <div className="Artists">{artists?.description}</div>
        </div>
      )}
      {link && (
        <a href={link} rel="noopener noreferrer" className="Link">
          Ver más
        </a>
      )}
    </div>
  )
}

export default Card
