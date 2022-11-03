import { useStaticQuery, graphql } from "gatsby"

const useHeader = () => {
  return useStaticQuery(graphql`
    {
      allSanityHeader {
        nodes {
          menu {
            nameMenu
            link
            submenu {
              Namesubmenu
              link
            }
          }
          logo {
            asset {
              gatsbyImageData
            }
          }
          ctaButton {
            link
            nameButton
          }
        }
      }
    }
    
  `)
}

export default useHeader
