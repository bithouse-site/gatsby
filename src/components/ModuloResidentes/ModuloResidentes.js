import React from "react"
import { PortableText } from "@portabletext/react"
import LogosResidentes from "../LogosSections/LogosSections"

export default function ModuloResidentes({ data }) {
  console.log(data)
  return (
    <>
      <PortableText value={data._rawContent} />
      <LogosResidentes data={data.logos} />
    </>
  )
}
