import React from "react"
import Pagination from "../Pagination/Pagination"
import Card from "../Card/Card"
import "./CardsVisitants.scss"

const CardsVisitantes = ({ data }) => {
  const cardsComponent = data?.map(article => {
    const articleData = {
      title: article?.articleReference?.title,
      slug: `visitantes/${article?.articleReference?.slug?.current}`,
      _rawContent: article?.articleReference?.articleCard?._rawContent,
      image: article?.articleReference?.imageHeader,
      artists: article?.articleReference?.articleCard?.artists,
    }
    return <Card data={articleData} key={article?.id} />
  })

  return (
    <div className="cardsVisitants">
      <div className="contentCardsText">
        <div className="empty-left"></div>
        <h6 className="title-small">
          <span className="borderB">Visitantes</span>
        </h6>
        <div className="empty-right"></div>
      </div>
      <div className="paginationVisitant">
        <Pagination posts={cardsComponent} postPerPage={3} />
      </div>
    </div>
  )
}

export default CardsVisitantes
