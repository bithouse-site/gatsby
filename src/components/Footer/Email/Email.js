import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useFooter from "../../../hooks/useFooter"
import "./Email.scss"

const Email = () => {
  const email = useFooter().allSanityFooter?.nodes[0]?.email
  return (
    <div className="Info">
      <StaticImage src="../../../images/icon-mail.png" alt="email-icon" />
      <p>{email}</p>
    </div>
  )
}

export default Email
