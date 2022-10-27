import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ParallaxBanner } from 'react-scroll-parallax'
import Layout from '../src/Layout/Layout'
import { BannerConocenos1, AboutUs, ConocenosImg1, ConocenosImg2, ConocenosImg3, Compra, Venta, Detalles, Grados, Planos, Material, Alcance, Asesoria, ArrowSend, ArrowDown, Credito, Arrow1 } from 'ui/constants'
import SanityClient from '../libs/Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(SanityClient)

function Conocenos({conocenos}){
    const [element1, setElement1] = useState(false)
    const [element2, setElement2] = useState(false)
    const [element3, setElement3] = useState(false)
    const changeElement1 = () => {
        const el = document.getElementById('element1')
        if(!el) return
        if(el.getBoundingClientRect().top <= 0){
            setElement1(true)
        } else{
            setElement1(false)
        }
    }
    const changeElement2 = () => {
        const el = document.getElementById('element2')
        if(!el) return
        if(el.getBoundingClientRect().top <= 0){
            setElement2(true)
        } else{
            setElement2(false)
        }
    }
    const changeElement3 = () => {
        const el = document.getElementById('element3')
        if(!el) return
        if(el.getBoundingClientRect().top <= 0){
            setElement3(true)
        } else{
            setElement3(false)
        }
    }
    function urlForce(soruce){
        const img = builder.image(soruce)
        return img
    }
    useEffect(() => {
        changeElement1()
        changeElement2()
        changeElement3()
        window.addEventListener('scroll', changeElement1)
        window.addEventListener('scroll', changeElement2)
        window.addEventListener('scroll', changeElement3)
    }, []);
    return(
        <Layout title={"Conocenos"}>
            <section className='block' id='conocenos-banner'>
                <ParallaxBanner
                    className='parallax-conocenos-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "480px"
                    }}
                    layers={[
                    {
                        image:
                        BannerConocenos1.src,
                        speed: -10,
                        
                    },
                    {
                        children: (
                            <section className='row text-center carousel-caption content-creditos'>
                                <h1>El valor intangible que necesitas está aquí.</h1>
                            </section>
                        )
                    }
                    ]}
                />
            </section>
            <section className='block' id='fundad'>
                <div className='holder mx-auto'>
                    <div className='continer-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-6 image'>
                                <Image src={AboutUs} alt="pin" width="626" height="530" layout={"fixed"} />
                            </div>
                            <div className='col-12 col-md-6 text'>
                                <p>{conocenos?.fundados}</p>
                                <span>{conocenos?.texto_fundados}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='conocenos-title'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <h3>En Lomas Home Inmobiliaria prestamos <span>atención a los detalles</span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='pasos-creditos'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='left'>
                                <div className='stocked'>
                                    <div className="accordion">
                                        <div className="accordion-item ">
                                            <div className="accordion-body">
                                                <h2 className={`accordion-header ${element1 ? 'isElement' : ''}`} >
                                                    {conocenos?.detalles1}
                                                </h2>
                                                <p className={`${element1 ? 'isElement' : ''}`}>{conocenos?.texto_datalle1}</p>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className="accordion-body text-muted">
                                                <h2 className={`accordion-header ${element2 ? 'isElement' : ''}`}>
                                                    {conocenos?.detalles2}
                                                </h2>
                                                <p className={`${element2 ? 'isElement' : ''}`}>{conocenos?.texto_datalle2}</p>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className="accordion-body text-muted">
                                                <h2 className={`accordion-header ${element3 ? 'isElement' : ''}`}>
                                                    {conocenos?.detalles3}
                                                </h2>
                                                <p className={`${element3 ? 'isElement' : ''}`}>{conocenos?.texto_datalle3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right d-none d-sm-none d-md-block'>
                                <div className='right-cpm' id='element1'>
                                    <Image src={urlForce(conocenos?.imagen_detalle1?.asset).url()} alt="pin" width="733" height="820" layout={"fixed"} />
                                </div>
                                <div className='right-cpm' id='element2'>
                                    <Image src={urlForce(conocenos?.imagen_detalle2?.asset).url()} alt="pin" width="733" height="820" layout={"fixed"} />
                                </div>
                                <div className='right-cpm' id='element3'>
                                    <Image src={urlForce(conocenos?.imagen_detalle3?.asset).url()} alt="pin" width="733" height="820" layout={"fixed"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='conocenos-title'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <h3>En Lomas Home ofrecemos <span>soluciones inmobiliarias.</span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='inmobiliarias'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <ParallaxBanner
                                    className='parallax-inmobiliarias-desk'
                                    style={{ 
                                        aspectRatio: '2 / 1',
                                        height: "320px",
                                        width: "638px",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        borderRadius: "13px"
                                    }}
                                    layers={[
                                    {
                                        image:
                                        Compra.src,
                                        speed: -10,
                                        
                                    },
                                    {
                                        children: (
                                            <section className='row text-center carousel-caption content-creditos'>
                                                <h1>Si buscas comprar / rentar una propiedad</h1>
                                                <Image src={ArrowDown} alt="arrow" width="22" height="20" layout={"fixed"} />
                                            </section>
                                        )
                                    }
                                    ]}
                                />
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item d-flex justify-content-between align-items-start my-3">
                                        <Image src={Detalles} alt="pin" width="50" height="50" layout={"fixed"} />
                                        <div className="me-auto list-text">
                                            <div className="fw-bold">Detalles de las propiedades </div>
                                            {conocenos?.detalles}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start my-3">
                                        <Image src={Grados} alt="pin" width="50" height="50" layout={"fixed"} />
                                        <div className="me-auto list-text">
                                            <div className="fw-bold">Experiencia visual</div>
                                            {conocenos?.experiencia}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start my-3">
                                        <Image src={Planos} alt="pin" width="50" height="50" layout={"fixed"} />
                                        <div className="me-auto list-text">
                                            <div className="fw-bold">Planos arquitectónicos</div>
                                            {conocenos?.planos}
                                        </div>
                                    </li>
                                </ol>
                                <div className='row'>
                                    <Link  href="/#propiedades">
                                        <a className='links mx-auto my-5'>Buscar una propiedad <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <ParallaxBanner
                                    className='parallax-inmobiliarias-desk'
                                    style={{ 
                                        aspectRatio: '2 / 1',
                                        height: "320px",
                                        width: "638px",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        borderRadius: "13px"
                                    }}
                                    layers={[
                                    {
                                        image:
                                        Venta.src,
                                        speed: -10,
                                        
                                    },
                                    {
                                        children: (
                                            <section className='row text-center carousel-caption content-creditos'>
                                                <h1>Si buscas vender tu propiedad</h1>
                                                <Image src={ArrowDown} alt="arrow" width="22" height="20" layout={"fixed"} />
                                            </section>
                                        )
                                    }
                                    ]}
                                />
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item d-flex justify-content-between align-items-start my-3">
                                        <Image src={Material} alt="pin" width="50" height="50" layout={"fixed"} />
                                        <div className="me-auto list-text">
                                            <div className="fw-bold">Levantamiento de material </div>
                                            {conocenos?.levantamiento}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start my-3">
                                        <Image src={Alcance} alt="pin" width="50" height="50" layout={"fixed"} />
                                        <div className="me-auto list-text">
                                            <div className="fw-bold">Alcance y publicidad</div>
                                            {conocenos?.alcance}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start my-3">
                                        <Image src={Asesoria} alt="pin" width="50" height="50" layout={"fixed"} />
                                        <div className="me-auto list-text">
                                            <div className="fw-bold">Asesoría integral</div>
                                            {conocenos?.asesoria}
                                        </div>
                                    </li>
                                </ol>
                                <div className='row'>
                                    <Link href="/vende">
                                        <a className='links mx-auto my-5'>Vender una propiedad <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='credito'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className='row my-auto mx-auto content-text'>
                                    <h3>¿Necesitas un crédito? </h3>
                                    <p>Que nada te impida encontrar la casa de tus sueños. Permite que nuestros agentes inmobiliarios te asesoren sobre qué tipo de crédito es el ideal para tí.</p>
                                    <Link href="/creditos">
                                        <a>
                                            <span>Solicita asesoramiento <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 image'>
                                <Image src={Credito} alt="pin" width="733" height="550" layout={"fixed"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id="lugares">
                <div className='holder' data-aos="fade-up">
                    <div className='row mx-auto'>
                        <div className='col-md-2 col-12'>
                            <h4>Casas en Venta Puebla</h4>
                            <ul>
                                <li><a>Casas en Venta en Lomas de Angelópolis</a></li>
                                <li><a>Casas en Venta Recta a Cholula</a></li>
                                <li><a>Casas en Venta en Forjadores</a></li>
                                <li><a>Casas en Venta en San Andrés Cholula</a></li>
                                <li><a>Casas en Venta en Cuautlancingo</a></li>
                                <li><a>Casas en Venta en Momoxpan</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-12'>
                            <h4>Terreno en Venta en Puebla</h4>
                            <ul>
                                <li><a>Terrenos en Venta en Lomas de Angelópolis</a></li>
                                <li><a>Terrenos en Venta en San Andrés Cholula </a></li>
                                <li><a>Terrenos en Venta en San Martín Texmelucan</a></li>
                                <li><a>Terrenos en Venta Bioparque Estrella</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-12'>
                            <h4>Departamentos en Venta en Puebla</h4>
                            <ul>
                                <li><a>Departamentos en Venta en La Vista</a></li>
                                <li><a>Departamentos en Venta junto a Lomas de Angelópolis</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-12'>
                            <h4>Departamentos en Renta en Puebla</h4>
                            <ul>
                                <li><a>Departamentos en Renta en Tlaxclancingo </a></li>
                                <li><a>Departamentos en Renta junto a Lomas de Angelópolis</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-12'>
                            <h4>Oficinas en Renta en Puebla </h4>
                            <ul>
                                <li><a>Oficinas en Renta en Atlixcayotl</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const conocenos = await SanityClient.fetch(
      `
        *[_type == "conocenos" ][0]{
          ...
        }
      `)
    return {
      props: {
        conocenos
      }
    }
}

export default Conocenos