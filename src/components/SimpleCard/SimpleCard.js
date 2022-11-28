import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { Link } from "gatsby"

const SimpleCard = ({ data, title }) => {
  const articlesRef = data?.map((article, idx) => (
    <div key={idx}>
      <SanityImage
        {...article?.articleReference?.imageHeader}
        alt="Image Art"
      />
      <h6 className="title-small">{article?.articleReference?.title}</h6>
      <Link
        key={idx}
        to={`/visitantes/${article?.articleReference?.slug?.current}`}
      >
        Ver más
      </Link>
    </div>
  ))
  return (
    <div>
      {title && <h4>{title}</h4>}
      {articlesRef && <div className="cardArticle">{articlesRef}</div>}
    </div>
  )
}

export default SimpleCard
