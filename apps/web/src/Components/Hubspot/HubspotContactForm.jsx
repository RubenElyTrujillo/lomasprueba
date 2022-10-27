import React, { useEffect } from 'react'

export default function HubspotContactForm({ region, portalId, formId }){
    useEffect(() =>{
        const script = document.createElement('script');
        script.src='//js.hsforms.net/forms/embed/v2.js';
        document.body.appendChild(script);
        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    region: {region},
                    portalId: {portalId},
                    formId: {formId},
                    target: '#hubspotForm'
                })
            }
        });
    })
    return(
            <div id='hubspotForm'></div>
    )
}