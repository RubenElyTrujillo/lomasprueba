import React, { useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik';
import { useRouter } from 'next/router'
import sanityClient from '../../../libs/Client'

export default function SearchCategoryDesk(){
    const [ ubicaciones, setUbicaciones ] = useState(null)
    const router = useRouter()
    useEffect(() => {
		sanityClient.fetch(
		    `*[_type == "ubicaciones"]{
                ...
            }`
		)
		.then((data) => setUbicaciones(data))
		.catch(console.error);
	}, []);
    return(
        <div className='menu shadow p-3 bg-body rounded d-block d-sm-block d-md-none'>
            <Formik
                initialValues={{
                    ubicacion: '',
                    tipo: '',
                    habitaciones: '',
                    min: '0',
                    max: '10000000'
                }}
                onSubmit={ async (values) => {
                    console.log(values)
                    router.push({
                        pathname: `/${router.query.category}`,
                        query: {
                            ubicacion: values.ubicacion,
                            tipo: values.tipo,
                            habitaciones: values.habitaciones,
                            min: values.min,
                            max: values.max
                        },
                    })
                }}
            >
                {props =>(
                    <Form>
                        <div className='row'>
                            <div className='col-6'>
                                <Field name="ubicacion" as="select" className="form-select" aria-label="Default select example">
                                    <option defaultValue>Ubicación</option>
                                    {ubicaciones?.map((ubicacion, index) =>(
                                        <option value={ubicacion.slug.current} key={index}>{ubicacion.nombre}</option>
                                    ))}
                                </Field>
                            </div>
                            <div className='col-6'>
                                <Field name="tipo" as="select" className="form-select" aria-label="Default select example">
                                    <option defaultValue>¿Venta o Renta?</option>
                                    <option value="Venta">Venta</option>
                                    <option value="Renta">Renta</option>
                                </Field>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-4'>
                                <Field name="habitaciones" as="select" className="form-select" aria-label="Default select example">
                                    <option defaultValue>No. de hab.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Field>
                            </div>
                            <div className='col-8'>
                                <div className='inputs-range'>
                                    <div className='range'>
                                        <input type="range" name="min" className="" min="0" max="20000000" step="100000" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.min} />
                                        <input type="range" name="max" className="" min="0" max="20000000" step="100000" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.max} />    
                                    </div>
                                    <div className='row d-flex '>
                                        <div className='col-6 d-flex justify-content-start'>
                                            <span>${props.values.min}</span>
                                        </div>
                                        <div className='col-6 d-flex justify-content-end'>
                                            <span>${props.values.max}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3 text-center'>
                            <div className='col-12'>
                                <button type="submit" className="btn w-50">Buscar</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}