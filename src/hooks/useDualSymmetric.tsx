import { useStaticQuery, graphql } from "gatsby"

const useDualSymmetric = () => {
  return useStaticQuery(graphql`
    {
        allSanityDualSymmetric {
            nodes {
              titleDualS
              _rawRichTextDualS
              firstText
              shortText
              youtubeVideo {
                url
              }
              backgroundColor {
                title
                value
              }
              button {
                link
                nameButton
              }
              iconObject {
                label
                link
                description
                imageIcon {
                  asset {
                    gatsbyImageData
                  }
                }
              }
              imageDualS {
                asset {
                  gatsbyImageData
                }
              }
            }
        }
    }
    
  `)
}

export default useDualSymmetric
