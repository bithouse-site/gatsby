import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import useResidentes from "../hooks/useResidentes.tsx"
import Banner from "../components/Banner/Banner"
import BannerDoble from "../components/BannerDoble/BannerDoble"
import ModuloResidentes from "../components/ModuloResidentes/ModuloResidentes"
import Products from "../components/Products/Products"
import { Seo } from "../components/seo"

import "./residentes.scss"

export default function Residentes() {
  const data = useResidentes().allSanityResidentes.nodes[1]
  console.log(data, "data")
  return (
    <>
      <Seo
        title="Residentes"
        description="Esta es una pagina donde se muestran los residentes de la bithouse. Son las empresas que trabajan en bithouse"
        keywords="Bithouse, Residente, house, bitlogic" />
      <Page>
        {data.banner !== null && data.banner !== undefined && (
          <Banner data={data.banner} />
        )}
        {data.moduloResidentes !== null &&
          data.moduloResidentes !== undefined && (
            <ModuloResidentes data={data.moduloResidentes} />
          )}
        {data.productos !== null && data.productos !== undefined && (
          <Products data={data.productos} />
        )}
        <div className="containerBanner">
          {data.bannerDoble !== null && data.bannerDoble !== undefined && (
            <BannerDoble data={data.bannerDoble} />
          )}
        </div>
      </Page>
    </>
  )
}
