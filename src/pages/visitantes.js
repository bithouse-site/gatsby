import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import HeroBg from "../components/HeroBackground/HeroBg"
import useVisitant from "../hooks/useVisitant.tsx"
import { CustomSection } from "../components"
import { Seo } from "../components/seo"

export default function Visitantes() {
  const data = useVisitant().allSanityVisitant.nodes[0]
  return (
    <>
      <Seo
        title="Visitantes"
        description="Esta es una pagina donde se muestran los artistas que presentaron sus obras en la bithouse"
        keywords="Bithouse, Muestra, Arte, Visitantes" />
      <Page>
        <HeroBg data={data} />
        <CustomSection sections={data?.VisitantBuilder} />
      </Page>
    </>
  )
}
