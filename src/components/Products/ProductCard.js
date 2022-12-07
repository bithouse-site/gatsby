import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import { PortableText } from "@portabletext/react"
import "./Products.scss"

const ProductCard = (data) => {
    console.log(data, "productos")
  
    return (
      <div className="ProductCard">
        {
            data.data.icon && (
                <div className="iconContainer">
                <SanityImage {...data.data.icon} alt={`${data.data.title}`} className="IconContainer" />
              </div>
            )
        }
        {data.data.title && <h6 className="title-small">{data.data.title}</h6>}
        {data.data._rawContent && (
        <div>
          <PortableText value={data.data._rawContent} />
        </div>
      )}
      </div>
    )
  }
  
  export default ProductCard