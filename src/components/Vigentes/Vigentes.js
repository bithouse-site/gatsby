import React from "react"
import "./Vigentes.scss"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import Card from "../Card/Card"

const Vigentes = ({
  data: { titleVigentes, background, _rawRichTextVigentes, button, cards },
}) => {
  const cardsComponent = cards?.slice(0, 2)?.map((card, id) => {
    const cardData = {
      title: card?.title,
      image: card?.image,
      _rawContent: card?._rawContent,
      link: card?.link,
    }
    return <Card data={cardData} key={id} wide />
  })
  console.log(background?.asset?.url)
  return (
    <div
      className="Vigentes"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${background?.asset?.url})`,
      }}
    >
      <div className="emptyLeft"></div>
      <div className="VigentesText">
        {titleVigentes && <SanityImage {...titleVigentes} alt="Title Image" />}
        {_rawRichTextVigentes && <PortableText value={_rawRichTextVigentes} />}
        {button.link && (
          <a href={button.link} className="Button">
            {button.nameButton}
          </a>
        )}
      </div>
      <div className="CardsContainer">
        {cards && <div className="Cards">{cardsComponent}</div>}
      </div>
      <div className="emptyRight"></div>
    </div>
  )
}

export default Vigentes
