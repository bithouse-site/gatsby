import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      allSanityFooter {
        nodes {
          address
          phone
          email
          logo {
            asset {
              gatsbyImageData
            }
          }
          media {
            _key
            link
            icon {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
}

export default useFooter
