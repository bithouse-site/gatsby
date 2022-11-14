import { useStaticQuery, graphql } from "gatsby"

const useBannerDoble = () => {
  return useStaticQuery(graphql`
    {
      allSanityBannerDoble {
        nodes {
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
      }
    }
  `)
}

export default useBannerDoble
