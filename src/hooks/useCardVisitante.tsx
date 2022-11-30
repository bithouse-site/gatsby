import { useStaticQuery, graphql } from "gatsby"

const useCardVisitante = () => {
  return useStaticQuery(graphql`
    {
      allSanityArticle {
        nodes {
          id
          title
          imageHeader {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
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
                crop {
                  _key
                  _type
                  top
                  bottom
                  left
                  right
                }
                hotspot {
                  _key
                  _type
                  x
                  y
                  height
                  width
                }
                asset {
                  _id
                }
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
