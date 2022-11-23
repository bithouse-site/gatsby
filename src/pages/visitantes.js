import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import useArticle from "../hooks/useArticle"
import ArticlePage from "../templates/ArticlePage"

export default function Visitantes() {
  const dataArticles = useArticle().allSanityArticle?.nodes
  return (
    <>
      <Page useSplashScreenAnimation>
        {/*  {dataArticles.map((item, idx) => (
          <Article
            key={idx}
            slug={"/visitantes/" + item.slug.current}
            imageHeader={item?.imageHeader}
            title={item?.title}
            firstSummary={item?._rawContentAfterCarousel}
            text="Ver más"
          />
        ))} */}
      </Page>
    </>
  )
}
