import React from "react"
import Location from "./Location/Location"
import Phone from "./Phone/Phone"
import Email from "./Email/Email"
import SocialMedia from "../SocialMedia/SocialMedia"
import "./style.scss"

export function Footer(): React.ReactElement {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <div className="emptyLeft"></div>
        <div className="Contacto">
          <h5 className="Title">Contactanos</h5>
          <div className="Contactos">
            <Email />
            <Phone />
            <Location />
          </div>
        </div>
        <div className="Redes">
          <SocialMedia logo/>
        </div>
        <div className="emptyRight"></div>
      </div>
    </div>
  )
}
