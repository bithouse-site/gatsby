import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useFooter from "../../../hooks/useFooter"
import "./Phone.scss"

const Phone = () => {
  const phone = useFooter().allSanityFooter?.nodes[0]?.phone
  return (
    <div className="Info">
      <StaticImage src="../../../images/icon-phone.png" alt="phone-icon" />
      <p>{phone}</p>
    </div>
  )
}

export default Phone

