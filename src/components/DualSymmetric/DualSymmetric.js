import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Animation } from "../Animation"
import { PortableText } from "@portabletext/react"
import useDualSymetric from "../../hooks/useDualSymmetric"
import "./style.scss"

const DualSymmetric = () => {
  const data = useDualSymetric().allSanityDualSymmetric?.nodes[0]
  const dataImage = data?.imageDualS?.asset?.gatsbyImageData
  const videoUrl = data?.youtubeVideo?.url
  const dataIcon = data?.iconObject
  const firstText = data?.firstText
  const textColor =
    data?.backgroundColor?.value === "#FCFCFC" ? "#1B1C1E" : "#FCFCFC"

  const url = videoUrl?.replace("watch?v=", "embed/")
  let code = url?.substring(url.lastIndexOf("/") + 1, url.length)
  const codeIndex = code?.indexOf("?")

  if (codeIndex !== -1 && code !== undefined) {
    code = code.substring(0, code.indexOf("?"))
  }

  console.log(firstText)
  const sectionStyle = firstText === true ? "text" : "bodyImage"

  return (
    <Animation
      type="fadeLeft"
      className="bodyDual"
      style={{ backgroundColor: data?.backgroundColor.value, color: textColor }}
    >
      <section className={`${sectionStyle}`}>
        {dataImage && !videoUrl && (
          <GatsbyImage
            className="imageWrapper"
            imgClassName="dualImage"
            image={dataImage}
            alt="Image Art"
          />
        )}

        {videoUrl !== null && videoUrl !== undefined && (
          <div className="quote-body">
            {url !== undefined && code !== undefined && (
              <iframe
                loading="lazy"
                type="text/html"
                srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;
              width:100%;height:100%;object-fit: cover;top:0;bottom:0;max-height: 500px}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;margin:auto;text-shadow:0 0 0.5em black}</style>
              <a href=${url + "?rel=0"}>
              <img src=https://img.youtube.com/vi/${code}/hqdefault.jpg alt='Video'>
              <span>▶</span></a>`}
                src={url + "?rel=0"}
                frameBorder="0"
                allowFullScreen
                title="youtube_video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            )}
          </div>
        )}

        <div className="details">
          <h1 style={{ color: textColor }}>{data?.titleDualS}</h1>
          <PortableText value={data?._rawRichTextDualS} />
          <div className="profile d-flex align-items-center mt-4">
            <div className="me-3">
              <GatsbyImage
                image={dataIcon?.imageIcon?.asset?.gatsbyImageData}
                alt="Icon Image"
                loading="eager"
              />
              <h6 style={{ color: textColor }}>{dataIcon?.label}</h6>
            </div>
            <div>
              <p>{dataIcon?.description}</p>
            </div>
          </div>
          <div className="mt-2">
            <p>{data?.shortText}</p>
          </div>
          <a
            href={data?.button?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="CtaButton"
          >
            {data?.button?.nameButton}
          </a>
        </div>
      </section>
    </Animation>
  )
}

export default DualSymmetric
