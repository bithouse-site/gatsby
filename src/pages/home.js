import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import { Hero } from "../components/Hero/index"
import DualSymetric from "../components/DualSymmetric/DualSymmetric"

export default function Home() {
  return (
    <>
      <Page useSplashScreenAnimation>
        <Hero sectionId="hero" heading="Hero" />
        <DualSymetric />
      </Page>
    </>
  )
}
