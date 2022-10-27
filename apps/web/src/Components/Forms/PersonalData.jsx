import React, { useRef } from 'react'
import { Field } from 'formik'

export default function PersonalData({errors, touched}){
    const ref = useRef();
    return(
        <div className='form'>
            <div className='row'>
                <h5>Ingresa tus datos</h5>
            </div>
            <div className='row'>
                <div className='col-12 col-md-5'>
                    <Field name="nombre" className={`form-control ${errors.nombre && touched.nombre ? ("isError") : null}`} as="input" placeholder="Nombre(s)*" />
                </div>
                <div className='col-12 col-md-7'>
                    <Field name="apellidos" className={`form-control ${errors.apellidos && touched.apellidos ? ("isError") : null}`} as="input" placeholder="Apellidos*" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-5'>
                    <Field type="date" name="nacimiento" className={`form-control ${errors.nacimiento && touched.nacimiento ? ("isError") : null} fecha-nacimiento`} placeholder="Fecha de nacimiento*" required  />
                </div>
                <div className='col-12 col-md-7'>
                    <Field name="celular" className={`form-control ${errors.celular && touched.celular ? ("isError") : null}`} as="input" placeholder="Numero celular*" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Field type="email" name="correo" className={`form-control ${errors.email && touched.email ? ("isError") : null}`} as="input" placeholder="Correo electronico*" />
                </div>
            </div>
        </div>
    )
}