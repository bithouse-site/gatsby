import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import { Link } from "gatsby"

import CarouselImages from "../../components/Carousel/CarouselImages"

const Article = ({
  slug,
  imageHeader,
  title,
  firstSummary,
  secondSummary,
  dualSection,
  text,
}) => {
  return (
    <section className="article__container">
      {imageHeader && (
        <SanityImage
          {...imageHeader}
          alt="Image Art"
          className="imageWrapper"
        />
      )}

      <div className="article__description">
        <h3>{title}</h3>
        <PortableText value={firstSummary} />
        <CarouselImages />
        <PortableText value={secondSummary} />
        <div>{dualSection}</div>
        <div className="article__link">
          <Link to={slug}>
            <small>{text}</small>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Article
