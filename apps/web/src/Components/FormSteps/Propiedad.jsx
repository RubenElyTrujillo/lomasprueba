import React from 'react'
import { Field } from 'formik'

export default function Propiedad({ errors, touched }){
    return(
        <>
            <div className='row title'>
                <h6>Compártenos los siguientes datos para conocer más acerca de tu propiedad:</h6>
            </div>
            <div className='propiedad'>
                <div className='row mb-3'>
                    <div className='col-12 col-md-3'>
                        <Field name="cp" className={`form-control ${errors.cp && touched.cp ? ("isError") : null}`} as="input" placeholder="Código postal*" />
                    </div>
                    <div className='col-12 col-md-3'>
                        <Field name="colonia" className={`form-control ${errors.colonia && touched.colonia ? ("isError") : null}`} as="input" placeholder="Colonia*" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <Field name="tipoPropiedad" as="input" className={`form-control ${errors.tipoPropiedad && touched.tipoPropiedad ? ("isError") : null}`} placeholder="Tipo de propiedad*" />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-3'>
                        <Field name="m2" className={`form-control ${errors.m2 && touched.m2 ? ("isError") : null}`} as="input" placeholder="M2 de terreno*" />
                    </div>
                    <div className='col-12 col-md-3'>
                        <Field name="m2Construccion" className={`form-control ${errors.m2Construccion && touched.m2Construccion ? ("isError") : null}`} as="input" placeholder="M2 de construcción*" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <Field name="antiguedad" as="input" className={`form-control ${errors.antiguedad && touched.antiguedad ? ("isError") : null}`} placeholder="Antigüedad de la propiedad*" />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <Field name="comentario" className={`form-control ${errors.comentario && touched.comentario ? ("isError") : null}`} as="input" placeholder="¿Tienes algún comentario que quieras agregar?" />
                    </div>
                </div>
            </div>
        </>
    )
}