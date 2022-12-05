import React from "react"
import Pagination from "../Pagination/Pagination"
import useCardVisitante from "../../hooks/useCardVisitante"
import Card from "../Card/Card"

const CardsVisitantes = ({ data }) => {
  //const articles = useCardVisitante().allSanityArticle
  console.log(data)
  const cardsComponent = data.map(article => {
    console.log(article)
    const articleData = {
      title: article?.title,
      slug: `visitantes/${article?.slug?.current}`,
      _rawContent: article?.articleCard?._rawContent,
      image: article?.imageHeader,
      artists: article?.articleCard?.artists,
    }
    return <Card data={articleData} key={article?.id} />
  })

  return <Pagination posts={cardsComponent} postPerPage={3} />
}

export default CardsVisitantes
