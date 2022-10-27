import React from 'react'
import { Field } from 'formik'

export default function Contacto({errors, touched}){
    return(
        <>
            <div className='row title'>
                <h6>Ingresa tus datos de contacto:</h6>
            </div>
            <div className='contacto'>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6'>
                        <Field name="nombre" className={`form-control ${errors.nombre && touched.nombre ? ("isError") : null}`} as="input" placeholder="Nombre(s)*" />
                    </div>
                    <div className='col-12 col-md-3'>
                        <Field name="apellidoP" className={`form-control ${errors.apellidoP && touched.apellidoP ? ("isError") : null}`} as="input" placeholder="Apellido Paterno*" />
                    </div>
                    <div className='col-12 col-md-3'>
                        <Field name="apellidoM" className={`form-control ${errors.apellidoM && touched.apellidoM ? ("isError") : null}`} as="input" placeholder="Apellido Materno*" />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6'>
                        <Field name="celular" className={`form-control ${errors.celular && touched.celular ? ("isError") : null}`} as="input" placeholder="Numero de celular*" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <Field name="correo" className={`form-control ${errors.correo && touched.correo ? ("isError") : null}`} as="input" placeholder="Correo Electronico*" />
                    </div>
                </div>
            </div>
        </>
    )
}