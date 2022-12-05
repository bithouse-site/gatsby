import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import HeroBg from "../components/HeroBackground/HeroBg"
import useVisitant from "../hooks/useVisitant.tsx"
import { CustomSection } from "../components"

export default function Visitantes() {
  const data = useVisitant().allSanityVisitant.nodes[0]
  return (
    <>
      <Page useSplashScreenAnimation>
        <HeroBg data={data} />
        <CustomSection sections={data?.VisitantBuilder} />
      </Page>
    </>
  )
}
