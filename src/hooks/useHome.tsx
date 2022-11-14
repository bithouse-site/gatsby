import { useStaticQuery, graphql } from "gatsby"

const useHome = () => {
  return useStaticQuery(graphql`
    {
      allSanityHome {
        nodes {
          HomeBuilder {
            ... on SanityBanner {
              id
              _type
              title
              description
              color {
                title
                value
              }
              image {
                asset {
                  gatsbyImageData
                }
              }
            }
            ... on SanityBannerDoble {
              id
              _type
              title
              description
              color {
                title
                value
              }
              image {
                asset {
                  gatsbyImageData
                }
              }
              button {
                nameButton
                link
              }
            }
            ... on SanityHero {
              id
              _type
              titleHero
              socialNetworks
              _rawRichTextHero
              imageHero {
                asset {
                  gatsbyImageData
                }
              }
            }
            ... on SanityDualAsymmetric {
              id
              _type
              title
              content
              description
              imageSide
              image {
                asset {
                  gatsbyImageData
                }
              }
              button {
                nameButton
                link
              }
              colorLeft {
                title
                value
              }
              colorRight {
                title
                value
              }
            }
          }
        }
      }
    }
  `)
}

export default useHome
