import React from 'react'
import { Field  } from 'formik'

export default function Contrato({ errors, touched}){
    return(
        <>
            <div className='row title'>
                <h6>Antes de comenzar, lee detenidamente el siguiente contrato y acepta los términos y condiciones para poder empezar a vender tu propiedad.</h6>
            </div>
            <div className='row lectura'>
                <div className='contrato'>
                    <p>Por este medio Lomas Home declara al usuario los siguientes puntos a considerar antes de continuar con el formulario:</p>

                    <p>· La ubicación geográfica de las propiedades que comercializa Lomas Home se encuentran en las siguientes zonas delimitadas: Puebla, San Andrés y San Pedro Cholula, Cuautlancingo, Atlixco y Santa Clara de Ocoyucan</p>

                    <p>· Al permitir a Lomas Home comercializar una propiedad no se exige ningún tipo de contrato de exclusividad, el socio vendedor puede utilizar otros medios y empresas para realizar su venta</p>

                    <p>· Lomas Home hace levantamiento de material (fotos, videos y recorridos virtuales) para publicitar la propiedad otorgada, cualquier mal uso de este material por parte del socio vendedor será penalizado</p>

                    <p>· El seguimiento de los compradores interesados es puntual, se le hará llegar al socio vendedor una actualización por correo de todos los movimientos relacionados a su propiedad como: citas agendadas, minutas de visitas realizadas, lista actualizada de prospectos y valuación de la propiedad actualizada para tener noción del valor de la propiedad en el mercado.</p>

                    <p>Se reconocerá como propio prospecto Lomas Home al propio prospecto, su esposo o esposa, su concubino o concubina, sus hijos, su familia ascendente o descendientes y/o representante legal del mismo</p>

                    <p>· EL total del adeudo pagadero a Lomas Home al momento de firmar el contrato oficial de Compraventa dera de la cantidad equivalente al 5% (cinco por ciento) más el valor al impuesto agregado (IVA) sobre el precio por la venta del inmueble.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-12 checkbox'>
                    <Field type="checkbox" name="terminos" value="acepto" className={`${errors.terminos && touched.terminos ? ("isError") : null}`}/>
                    <label>
                        He leído y acepto los términos y condiciones<br /> del contrato anteriormente presentado.
                    </label>
                </div>
            </div>
        </>
    )
}