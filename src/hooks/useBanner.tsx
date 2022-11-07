import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
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

export default useFooter
