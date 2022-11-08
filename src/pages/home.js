import React from "react"
import { Page } from "../components/Page/index"
import { Hero } from "../components/Hero/index"

export default function Home() {
  return (
    <>
      <Page useSplashScreenAnimation>
        <Hero sectionId="hero" heading="Hero" />
      </Page>
    </>
  )
}
