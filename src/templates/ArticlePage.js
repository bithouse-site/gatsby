import React from "react"
import { Page } from "../components/Page/index"
import { graphql } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import "./Article.scss"
import { Link } from "gatsby"

import CarouselImages from "../components/Carousel/CarouselImages"

const ArticlePage = ({ data }) => {
  const {
    title,
    _rawContentAfterCarousel,
    _rawContentBeforeCarousel,
    imageHeader,
    dualSection,
    carousel,
  } = data?.allSanityArticle?.nodes[0]
  console.log(dualSection)
  return (
    <>
      <Page>
        <section className="article">
          <div>
            <SanityImage {...imageHeader} alt="Image Art" />
            <h3 className="title">{title}</h3>
          </div>
          <div className="container">
            <PortableText value={_rawContentBeforeCarousel} />
            <CarouselImages />
            <PortableText value={_rawContentAfterCarousel} />
          </div>
        </section>
      </Page>
    </>
  )
}

export default ArticlePage

export const query = graphql`
  query($slug: String!) {
    allSanityArticle(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        title
        _rawContentAfterCarousel
        _rawContentBeforeCarousel
        slug {
          current
          _type
        }
        imageHeader {
          asset {
            _id
          }
          crop {
            _key
            _type
            bottom
            left
            right
            top
          }
          hotspot {
            _key
            _type
            height
            width
            x
            y
          }
        }
        dualSection {
          titleDualS
          shortText
          _rawRichTextDualS
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
            description
            label
            link
            imageIcon {
              asset {
                _id
              }
              hotspot {
                _key
                _type
                height
                width
                y
                x
              }
              crop {
                _key
                _type
                bottom
                left
                right
                top
              }
            }
          }
          imageDualS {
            asset {
              _id
            }
            crop {
              _key
              _type
              bottom
              left
              top
              right
            }
            hotspot {
              _key
              _type
              height
              width
              x
              y
            }
          }
          imageSide
        }
        carousel {
          asset {
            _id
          }
          crop {
            _key
            _type
            bottom
            left
            right
            top
          }
          hotspot {
            _key
            _type
            height
            width
            x
            y
          }
        }
        articleReferences {
          articleReference {
            imageHeader {
              asset {
                _id
              }
              crop {
                _key
                _type
                bottom
                right
                left
                top
              }
              hotspot {
                _key
                _type
                width
                height
                x
                y
              }
            }
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`
