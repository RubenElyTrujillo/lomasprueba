import React, { useContext } from 'react'
import Image from 'next/image'
import { FormContext } from './FormSteps'
import { Arrow1, ArrowSend } from 'ui/constants'

export default function Stepper(){
    const context = useContext(FormContext)
    return(
        <div className='container-fluid'>
            <div className='row align-items-center'>
                <div className='col-6 text-start atras'>
                    {context.state.step === 1 ? null : (
                        <a
                            type='button'
                            className='action'
                            onClick={() => context.dispatch({ type: "prev" })}
                            disabled={context.state.step === 1}
                        >
                            <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /> Atras
                        </a>
                    )} 
                </div>
                <div className='col-6 text-end siguiente'>
                    {context.state.step === 3 ? (
                        <button className='submit btn' type="submit">
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