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

const bodyComponents = {
  banner: data => <Banner data={data} key={data?.id} />,
  bannerDoble: data => <BannerDoble data={data} key={data?.id} />,
  hero: data => <Hero data={data} key={data?.id} />,
  dualSymmetric: data => <DualSymmetric data={data} key={data?.id} />,
  dualAsymmetric: data => <DualAsymmetric data={data} key={data?.id} />,
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
      </Page>
    </>
  )
}
