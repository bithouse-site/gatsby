import { useStaticQuery, graphql } from "gatsby"

const useFooter = () => {
  return useStaticQuery(graphql`
    {
        allSanityFooter {
            nodes {
              address
              phone
              logo {
                asset {
                  gatsbyImageData
                }
              }
              media {
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