import React from 'react'
import { Field } from 'formik'

export default function NumbersData({errors, touched}){
    return(
        <div className='form'>
            <div className='row'>
                <h5>Hablemos de números</h5>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <Field name="valorInmueble" as="input" className={`form-select ${errors.valorInmueble && touched.valorInmueble ? ("isError") : null}`} placeholder="Valor del inmueble que buscas*" />
                </div>
                <div className='col-12 col-md-3'>
                    <Field name="enganche" className={`form-control ${errors.enganche && touched.enganche ? ("isError") : null}`} as="input" placeholder="% enganche" />
                </div>
                <div className='col-12 col-md-3'>
                    <Field name="ahorroMinimo" className={`form-control ${errors.ahorroMinimo && touched.ahorroMinimo ? ("isError") : null}`} as="input" placeholder="Ahorro minimo" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <Field name="tipoCredito" as="input" className={`form-select ${errors.tipoCredito && touched.tipoCredito ? ("isError") : null}`} placeholder="Tipo de crédito*" />
                </div>
                <div className='col-12 col-md-4'>
                    <Field name="plazo" as="input" className={`form-select ${errors.plazo && touched.plazo ? ("isError") : null}`} placeholder="Plazo*" />
                </div>
                <div className='col-12 col-md-4'>
                    <Field name="ingresos" as="input" className={`form-select ${errors.ingresos && touched.ingresos ? ("isError") : null}`} placeholder="Ingresos*" />
                </div>
            </div>
            <div className='row relleno'>

            </div>
        </div>
    )
}