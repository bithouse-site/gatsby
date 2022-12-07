import React from "react"
import "./Vigentes.scss"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import { useMediaQuery } from "react-responsive"
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
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" })

  const content = (
    <>
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
    </>
  )

  return (
    <div
      className="Vigentes"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${background?.asset?.url})`,
      }}
    >
      <div className="emptyLeft"></div>
      {/* if we are in tablet we need to have only 3 columns */}
      {isTablet ? <div>{content}</div> : content}
      <div className="emptyRight"></div>
    </div>
  )
}

export default Vigentes
