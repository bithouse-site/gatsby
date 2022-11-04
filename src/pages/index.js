import React from "react"
import { Seo } from "gatsby-theme-portfolio-minimal";
import { PageBit } from "../components/PageBit/index"

export default function IndexPage() {
  return (
    <>
      <Seo title='Gatsby Starter for Portfolio Minimal' />

      <PageBit useSplashScreenAnimation />
    </>
  )
}
