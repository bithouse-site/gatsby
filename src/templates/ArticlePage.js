import React from "react"
import { Page } from "../components/Page/index"
import { graphql } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"
import { CustomSection, Card } from "../components/index"
import "./ArticlePage.scss"

const ArticlePage = ({ data }) => {
  const {
    title,
    imageHeader,
    otherTitle,
    articleReferences,
  } = data?.allSanityArticle?.nodes[0]

  const pageInfo = data?.allSanityArticle?.nodes[0]

  const cardsComponent = articleReferences?.map(article => {
    const articleData = {
      title: article?.articleReference?.title,
      image: article?.articleReference?.imageHeader,
      link: article?.articleReference?.slug.current,
    }
    return <Card data={articleData} key={article?.id} />
  })

  return (
    <>
      <Page>
        <section className="article">
          <div>
            <SanityImage
              {...imageHeader}
              alt="Image Art"
              className="imageHeader"
            />
            <h5 className="title">{title}</h5>
          </div>
          <CustomSection sections={pageInfo?.ArticleBuilder} />
          <div className="cardsArticle my-4">
            {otherTitle && <h4 className="my-5 pt-4">{otherTitle}</h4>}
            <div className="cards">{cardsComponent}</div>
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
        ArticleBuilder {
          ... on SanityDualSectionArray {
            _key
            _type
            dualSymmetric {
              _rawRichTextDualS
              titleDualS
              shortText
              imageSide
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
                    _id
                  }
                  crop {
                    _key
                    _type
                    bottom
                    left
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
              }
              imageDualS {
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
                  height
                  width
                  x
                  y
                }
              }
              youtubeVideo {
                url
              }
            }
          }
          ... on SanityImageComponent {
            _key
            _type
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
          ... on SanityTextBlock {
            _key
            _type
            _rawRichText
            subTitle
          }
        }
        title
        otherTitle
        slug {
          current
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
        articleReferences {
          articleReference {
            title
            slug {
              current
            }
            imageHeader {
              asset {
                _id
              }
              hotspot {
                _key
                _type
                height
                width
                x
                y
              }
              crop {
                _key
                bottom
                _type
                left
                right
                top
              }
            }
          }
        }
      }
    }
  }
`