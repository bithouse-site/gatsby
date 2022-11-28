import { useStaticQuery, graphql } from "gatsby"

/* const useArticle = () => {
  return useStaticQuery(graphql`
    {
        allSanityArticle(filter: {slug: {current: {}}}) {
            nodes {
                title
                subtitleArt
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
  `)
} 

export default useArticle */