import React, { useContext } from 'react'
import Image from 'next/image'
import { FormContext } from './Form'
import { Arrow1, ArrowSend } from 'ui/constants'

export default function StepperControl(props){
    const context = useContext(FormContext)
    return(
        <div className='container-fluid stepControl'>
            <div className='row'>
                <div className='col-2 col-md-2 atras'>
                    {context.state.step === 1 ? null : (
                        <a
                            type='button'
                            className='action rotate'
                            onClick={() => context.dispatch({ type: "prev" })}
                            disabled={context.state.step === 1}
                        >
                         <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /> Atras
                        </a>
                    )} 
                </div>
                <div className='col-8 col-md-7'>

                </div>
                <div className='col-2 col-md-3'>
                    {context.state.step === 3 ? (
                        <button className='submit' type="submit">
                            Enviar <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} />
                        </button>
                    ):(
                        <a className='action' type='button' onClick={() => context.dispatch({ type: "next" })}>
                            Siguiente <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /> 
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}