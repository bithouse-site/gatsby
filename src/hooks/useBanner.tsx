import { useStaticQuery, graphql } from "gatsby"

const useBanner = () => {
  return useStaticQuery(graphql`
    {
      allSanityBanner {
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
        }
      }
    }
  `)
}

export default useBanner
