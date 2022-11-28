import React from "react"
import Pagination from "../Pagination/Pagination"
import useCardVisitante from "../../hooks/useCardVisitante"
import Card from "../Card/Card"

const CardsVisitantes = () => {
  const articles = useCardVisitante().allSanityArticle

  const cardsComponent = articles?.nodes.map(article => {
    const articleData = {
      title: article?.title,
      _rawContent: article?.articleCard?._rawContent,
      image: article?.imageHeader,
      artists: article?.articleCard?.artists,
      link: article?.articleCard?.link,
    }
    return <Card data={articleData} key={article?.id} />
  })

  return <Pagination posts={cardsComponent} postPerPage={3} />
}

export default CardsVisitantes
