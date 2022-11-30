import { useStaticQuery, graphql } from "gatsby"

const useBannerDoble = () => {
  return useStaticQuery(graphql`
    {
      allSanityBannerDoble {
        nodes {
          title
          description
          _rawContent
          colorLeft {
            title
            value
          }
          colorRight {
            title
            value
          }
          image {
            ...ImageWithPreview
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
