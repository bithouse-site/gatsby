import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Page } from "../components/Page/index"
import HubspotForm from "react-hubspot-form"
import { Seo } from "../components/seo"

export default function Contact() {
    return (
        <>
            <Seo
                title="Contacto"
                description="Esta es una pagina con un formulario de consulta para obtener informacion sobre la bithouse"
                keywords="Bithouse, Contacto, Formulario, Consulta" />
            <Page>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Contactanos</h2>
                        </div>
                    </div>
                    <div className="col-12 row justify-content-center py-2 m-auto">
                        <div className="hubspot-form-wrapper">
                            <HubspotForm portalId="20579939" formId="8ebe8cc3-de77-4c65-85a1-8506ddda09ca" loading={<div>Loading...</div>}/>
                        </div>
                    </div>
                </div>
            </Page>
        </>
    )
}
