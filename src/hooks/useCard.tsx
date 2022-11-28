import { useStaticQuery, graphql } from "gatsby"

const useArticleCard = () => {
  return useStaticQuery(graphql`
    {
      allSanityCardsVigentes {
        nodes {
          id
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
