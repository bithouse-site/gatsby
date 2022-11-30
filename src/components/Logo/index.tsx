import SanityImage from "gatsby-plugin-sanity-image"
import React from "react"
import useHeader from "../../hooks/useHeader"
import "./style.css"

export function Logo(): React.ReactElement {
  const headerImage = useHeader().allSanityHeader?.nodes[0].logo

  return (
    <div className={"Logo"} aria-roledescription="logo">
      <SanityImage
        {...headerImage}
        alt="Logo bitlogic"
        width={180}
        style={{ objectFit: "scale-down", maxWidth: "180px" }}
      />
    </div>
  )
}
