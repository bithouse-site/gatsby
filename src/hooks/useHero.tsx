 import { useStaticQuery, graphql } from "gatsby"

const useHero = () => {
  return useStaticQuery(graphql`
    {
      allSanityHero {
        nodes {
          titleHero
          socialNetworks
          _rawRichTextHero
          imageHero {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
    
  `)
}

export default useHero
 