import React from "react"
import { Page } from "../components/Page/index"
import useHome from "../hooks/useHome"

// dynamic zone components
import Banner from "../components/Banner/Banner"
import BannerDoble from "../components/BannerDoble/BannerDoble"
import { Hero } from "../components/Hero/index"
import DualAsimetric from "../components/DualAsimetric/DualAsimetric"

const bodyComponents = {
  banner: data => <Banner data={data} />,
  bannerDoble: data => <BannerDoble data={data} />,
  hero: data => <Hero data={data} />,
  dualAsimetric: data => <DualAsimetric data={data} />,
}

export default function Home() {
  const dynamicZone = useHome().allSanityHome.nodes[0].HomeBuilder

  return (
    <>
      <Page useSplashScreenAnimation>
        {dynamicZone.map(component => {
          return bodyComponents[component._type]
            ? bodyComponents[component._type](component)
            : null
        })}
      </Page>
    </>
  )
}
