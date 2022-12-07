import React from "react"
import { DualSymmetric, TextBlock, Carousel, BannerDoble } from "../"
import CardsVisitantes from "../CardsVisitantes/CardsVisitantes"

const CustomSection = ({ sections }) => {
  let checkImagePrint = false

  const sectionsImages = sections.filter(item => {
    return item._type === "imageComponent"
  })

  const sectionsCards = sections.filter(item => {
    return item._type === "articleReference"
  })

  const sectionResult = sections.map((section, index) => {
    return (
      <>
        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textBlock" ? (
          <TextBlock
            key={index}
            subTitle={section.subTitle}
            richText={section._rawRichText}
          />
        ) : null}

        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "dualSectionArray" ? (
          <DualSymmetric key={index} data={section?.dualSymmetric} />
        ) : null}

        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "imageComponent" &&
        checkImagePrint === false ? (
          <div className="my-3">
            <Carousel key={index} images={sectionsImages} />
            {(checkImagePrint = true)}
          </div>
        ) : null}

        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "sectionBanner" ? (
          <>
            <BannerDoble key={index} data={section?.banner} />
          </>
        ) : null}

        {section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "articleReference" &&
        checkImagePrint === false ? (
          <>
            <CardsVisitantes key={index} data={sectionsCards} />
            {(checkImagePrint = true)}
          </>
        ) : null}
      </>
    )
  })

  return <>{sectionResult}</>
}

export default CustomSection
