import React from "react"
import { Link } from "gatsby"
import { Logo } from "../Logo"
import "./style.scss"
import { StaticImage } from "gatsby-plugin-image"

export function Footer(): React.ReactElement {
  return (
    <div className="Footer">
      <div className="ContentWrapper">
        <div className="Contacto">
          <h2 className="Title">Contactanos</h2>
          <div className="Links">
            <p>Mail</p>
            <p>Address</p>
            <p>Phone</p>
          </div>
        </div>
        <div className="Redes">
          <StaticImage
            className="Title"
            src="../../../public/icons/Logo-White.png"
            alt="Logo Bitlogic"
            width={250}
          />
          <div className="Links">
            <Link
              to="https://www.instagram.com/bithouse.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../../../public/icons/Social-IG.png"
                alt="Logo Bitlogic"
                width={40}
              />
            </Link>
            <Link
              to="https://www.facebook.com/Bithouse-Cordoba-113742567060909/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../../../public/icons/Social-FB.png"
                alt="Logo Bitlogic"
                width={40}
              />
            </Link>
            <Link to="/">
              <StaticImage
                src="../../../public/icons/Social-YT.png"
                alt="Logo Bitlogic"
                width={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
