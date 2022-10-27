import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Formik, Field, Form } from 'formik';
import sanityClient from '../../../libs/Client'

export default function SearchDesk(){
    const [categories, setCategories] = useState(null);
    const router = useRouter()
    useEffect(() => {
		sanityClient.fetch(
		    `*[_type == "category"]{
                ...
            }`
		)
		.then((data) => setCategories(data))
		.catch(console.error);
	}, []);
    return(
        <div className='menu'>
            <Formik
                initialValues={{
                    propiedad: '',
                    tipo: "",
                    min: "0",
                    max: "10000000"
                }}
                onSubmit={ async (values) => {
                    console.log(values)
                    router.push({
                        pathname: "/search",
                        query: {
                            propiedad: values.propiedad,
                            tipo: values.tipo,
                            min: values.min,
                            max: values.max
                        },
                    })
                }}
            >
                {props =>(
                    <Form>
                        <div className='row'>
                            <div className='col'>
                                <Field name="propiedad" as="select" className="form-select propiedad" aria-label="Default select example">
                                    <option defaultValue>Tipo de propiedad</option>
                                    {categories?.map((category, index) =>(
                                        <option value={category.category} key={index}>{category.category}</option>
                                    ))}
                                </Field>
                            </div>
                            <div className='col'>
                                <Field name="tipo" as="select" className="form-select tipo" aria-label="Default select example">
                                    <option defaultValue>¿Venta o Renta?</option>
                                    <option value="Venta">Venta</option>
                                    <option value="Renta">Renta</option>
                                </Field>
                            </div>
                            <div className='col'>
                                <div className='inputs-range min-max'>
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
                            <div className='col'>
                                <button type="submit" className="btn w-100">Buscar</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}