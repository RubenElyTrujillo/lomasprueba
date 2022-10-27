import React from 'react'
import { Field } from 'formik'

export default function DomicilioData({errors, touched}){
    return(
        <div className='form'>
            <div className='row'>
                <h5>Hablemos de números</h5>
            </div>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <Field name="cp" className={`form-control ${errors.cp && touched.cp ? ("isError") : null}`} as="input" placeholder="Código postal*" />
                </div>
                <div className='col-12 col-md-3'>
                    <Field name="colonia" className={`form-control ${errors.colonia && touched.colonia ? ("isError") : null}`} as="input" placeholder="Colonia*" />
                </div>
                <div className='col-12 col-md-6'>
                    <Field name="municipio" className={`form-control ${errors.municipio && touched.municipio ? ("isError") : null}`} as="input" placeholder="Delegación / municipio*" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-5'>
                    <Field name="ciudad" className={`form-control ${errors.ciudad && touched.ciudad ? ("isError") : null}`} as="input" placeholder="Ciudad*" />
                </div>
                <div className='col-12 col-md-7'>
                    <Field name="estado" className={`form-control ${errors.estado && touched.estado ? ("isError") : null}`} as="input" placeholder="Estado*" />
                </div>
            </div>
            <div className='row relleno'>

            </div>
        </div>
    )
}