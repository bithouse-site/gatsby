import { useStaticQuery, graphql } from "gatsby"

const useArticleCard = () => {
  return useStaticQuery(graphql`
    {
      allSanityCardsVigentes {
        nodes {
          title
          _rawContent
          link
          image {
            ...ImageWithPreview
          }
        }
      }
    }
  `)
}

export default useArticleCard
