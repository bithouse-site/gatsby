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
            ... on SanityDualSymmetric {
              id
              _type
              imageSide
              shortText
              titleDualS
              _rawRichTextDualS
              backgroundColor {
                title
                value
              }
              button {
                link
                nameButton
              }
              iconObject {
                description
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
              }
              youtubeVideo {
                url
              }
              imageDualS {
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
            }
          }
        }
      }
    }
  `)
}

export default useHome
