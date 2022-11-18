import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import useHome from "../hooks/useHome"

// dynamic zone components
import Banner from "../components/Banner/Banner"
import BannerDoble from "../components/BannerDoble/BannerDoble"
import { Hero } from "../components/Hero/index"
import DualSymmetric from "../components/DualSymmetric/DualSymmetric"
import DualAsymmetric from "../components/DualAsymmetric/DualAsymmetric"
import Carousel from "../components/Carousel/Carousel"

const bodyComponents = {
  banner: data => <Banner data={data} />,
  bannerDoble: data => <BannerDoble data={data} />,
  hero: data => <Hero data={data} />,
  dualSymmetric: data => <DualSymmetric data={data} />,
  dualAsymmetric: data => <DualAsymmetric data={data} />,
}

export default function Home() {
  const dynamicZone = useHome().allSanityHome.nodes[0]?.HomeBuilder

  return (
    <>
      <Page useSplashScreenAnimation>
        {dynamicZone?.map(component => {
          return bodyComponents[component?._type]
            ? bodyComponents[component._type](component)
            : null
        })}
        <Carousel />
      </Page>
    </>
  )
}
