import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useFooter from "../../../hooks/useFooter"
import "./Location.scss"

const Location = () => {
  const address = useFooter().allSanityFooter?.nodes[0]?.address
  return (
    <div className="Info">
      <StaticImage src="../../../images/icon-location.png" alt="location-icon" />
      <p>{address}</p>
    </div>
  )
}

export default Location
