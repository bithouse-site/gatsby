import { useStaticQuery, graphql } from "gatsby"

const useCardVisitante = () => {
  return useStaticQuery(graphql`
    {
      allSanityArticle {
        nodes {
          id
          title
          imageHeader {
            ...ImageWithPreview
          }
          slug {
            current
          }
          articleCard {
            link
            _rawContent
            artists {
              label
              link
              imageIcon {
                ...ImageWithPreview
              }
              description
            }
          }
        }
      }
    }
  `)
}

export default useCardVisitante
