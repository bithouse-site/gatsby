import { useStaticQuery, graphql } from "gatsby"

const useArticleCard = () => {
  return useStaticQuery(graphql`
    {
      allSanityCards {
        nodes {
          title
          type
          _rawContent
          link
          artists {
            label
            description
            link
            imageIcon{
              ...ImageWithPreview
            }
          }
          image {
            ...ImageWithPreview
          }
        }
      }
    }
  `)
}

export default useArticleCard
