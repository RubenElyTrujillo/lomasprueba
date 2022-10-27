import React, {  useState, useReducer } from 'react'
import { Formik, Form, Field, FormikConfig, FormikValues  } from 'formik'
import Contrato from './Contrato';
import Stepper from './Stepper';
import Contacto from './Contacto';
import Propiedad from './Propiedad';
import * as Yup from 'yup'


export const FormContext = React.createContext();

const initialState = {
    steps: ["Ingresa tus datos", "Hablemos de números", "Domicilio"],
    step: 1
}

const reducer = (state, action) => {
    switch (action.type){
        case "next":
            return { ...state, step: state.step + 1 }
        case "prev":
            return { ...state, step: state.step - 1 }
        default:
            return state;
    }
}

export default function FormSteps(){
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const initialValues = {
        terminos: '',
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        celular: '',
        correo: '',
        cp: '',
        colonia: '',
        tipoPropiedad: '',
        m2: '',
        m2Construccion: '',
        antiguedad: '',
        comentario: ''
    }
    const validation = Yup.object().shape({
        terminos: Yup.bool().oneOf([true]).required(),
        nombre: Yup.string().required(),
        apellidoP: Yup.string().required(),
        apellidoM: Yup.string().required(),
        celular: Yup.string().required(),
        correo: Yup.string().email().required(),
        cp: Yup.string().required(),
        colonia: Yup.string().required(),
        tipoPropiedad: Yup.mixed().required(),
        m2: Yup.string().required(),
        m2Construccion: Yup.string().required(),
        antiguedad: Yup.mixed().required(),
        comentario: Yup.string()
    })
    const submitHandler = (values, onSubmitProp) =>{
        console.log(values  )
        console.log("enviado")
    }
    return(
        <>
            <div className='row'>
                <h4>Quiero vender mi propiedad</h4>
            </div>
            <div className='row'>
                <span>Llena el siguiente formulario con tu información y en breve un agente inmobiliario te contactará.</span>
            </div>
            <div className='row'>
                <FormContext.Provider value={{ state: state, dispatch: dispatch}} >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={async (values, { setSubmitting }) =>{
                            try {
                              const endpoint = `https://www.goplek.com/mailer/send-mail-v1.php`;
                              const res = await fetch(endpoint, {
                                method: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                body: `data=${JSON.stringify({
                                  host: "inquisitive-duckanoo-006759.netlify.app",
                                  data: values,
                                })}`,
                              });
                              const data = await res.text();
                              console.log(data)
                            } catch (error) {
                              console.log(error)
                            }
                        }}
                    >
                        {({isSubmitting, errors, touched}) => {
                            return(
                                <Form autoComplete='off'>
                                    {!isSubmitting ?(
                                        <>
                                            {state.step === 1 ? <Contrato errors={errors} touched={touched} /> : null}
                                            {state.step === 2 ? <Contacto errors={errors} touched={touched} /> : null}
                                            {state.step === 3 ? <Propiedad errors={errors} touched={touched} /> : null}
                                            <Stepper />
                                        </>
                                    ): (
                                        <div className='finish-form'>
                                            <h5>Enviando tus datos…</h5>
                                        </div>
                                    )}
                                </Form>
                            )
                        }}
                    </Formik>
                </FormContext.Provider>
            </div>
        </>
    )
}