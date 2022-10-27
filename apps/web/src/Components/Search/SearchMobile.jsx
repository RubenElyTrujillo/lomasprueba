import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Formik, Field, Form } from 'formik';
import sanityClient from '../../../libs/Client'

export default function SearchMobile(){
    const [categories, setCategories] = useState(null)
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
    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
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
                            <div className='col-6'>
                                <Field name="propiedad" as="select" className="form-select" aria-label="Default select example">
                                    <option defaultValue>Tipo de propiedad</option>
                                    {categories?.map((category, index) =>(
                                        <option value={category.category} key={index}>{category.category}</option>
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
                        <div className='row mt-2'>
                            <div className='col-10'>
                                <div className='inputs-range'>
                                    <div className='range'>
                                        <input type="range" name="min" className="" min="0" max="50000000" step="100000" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.min} />
                                        <input type="range" name="max" className="" min="0" max="50000000" step="100000" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.max} />    
                                    </div>
                                    <div className='row d-flex '>
                                        <div className='col-6 d-flex justify-content-start'>
                                            <span>${separator(props.values.min)}</span>
                                        </div>
                                        <div className='col-6 d-flex justify-content-end'>
                                            <span>${separator(props.values.max)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2'>
                                <button type="submit" className="btn"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}