import React from "react"
import Location from "./Location/Location"
import Phone from "./Phone/Phone"
import Email from "./Email/Email"
import SocialMedia from "../SocialMedia/SocialMedia"
import "./style.scss"

export function Footer(): React.ReactElement {
  return (
    <div className="Footer">
      <div className="ContentWrapper">
        <div className="Contacto">
          <h2 className="Title">Contactanos</h2>
          <div className="Contactos">
            <Email />
            <Phone />
            <Location />
          </div>
        </div>
        <div className="Redes">
          <SocialMedia logo/>
        </div>
      </div>
    </div>
  )
}
