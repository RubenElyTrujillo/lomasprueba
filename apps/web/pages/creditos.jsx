import React, { useState, useEffect } from 'react'
import Layout from '../src/Layout/Layout'
import Image from 'next/image'
import { ParallaxBanner } from 'react-scroll-parallax'
import { CoverCreditos1, ArrowSend, Img1, Img2, Img3, BannerBanks, Banorte, Bbva, HSBC, Santander, Scotiabank, Agente } from 'ui/constants'
import Forms from '../src/Components/Forms/Form'
import Link from 'next/link'
import Client from '../libs/Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(Client)

function Creditos({creditos}){
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
        <Layout title="Creditos | Lomas Home" description={creditos?.descripcion} keywords={creditos?.keywords}>
            <section className='block' id='banner-creditos'>
                <ParallaxBanner
                    className='parallax-creditos-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "480px"
                    }}
                    layers={[
                    {
                        image:
                        CoverCreditos1.src,
                        speed: -10,
                        
                    },
                    {
                        children: (
                            <section className='row text-center carousel-caption content-creditos'>
                                <h1>Te ayudamos a conseguir el financiamiento que mejor se adapte a ti.</h1>
                                <div className='button'>
                                    <Link href="/creditos#form-multistep">
                                        <a className='btn'>Empezar <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                                    </Link>
                                </div>
                            </section>
                        )
                    }
                    ]}
                />
            </section>
            <section className='block' id='title-creditos' data-aos="fade-up">
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row text-center title'>
                            <h2><span>Te brindamos asesoría</span> en tan solo 3 sencillos pasos:</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='pasos-creditos' data-aos="fade-up">
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='left'>
                                <div className='stocked'>
                                    <div className="accordion">
                                        <div className="accordion-item ">
                                            <div className="accordion-body">
                                                <h2 className={`accordion-header ${element1 ? 'isElement' : ''}`} >
                                                    1. {creditos?.titulo1}
                                                </h2>
                                                <p className={`${element1 ? 'isElement' : ''}`}>{creditos?.texto1}</p>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className="accordion-body text-muted">
                                                <h2 className={`accordion-header ${element2 ? 'isElement' : ''}`}>
                                                    2. {creditos?.titulo2}
                                                </h2>
                                                <p className={`${element2 ? 'isElement' : ''}`}>{creditos?.texto2}</p>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className="accordion-body text-muted">
                                                <h2 className={`accordion-header ${element3 ? 'isElement' : ''}`}>
                                                    3. {creditos?.titulo3}
                                                </h2>
                                                <p className={`${element3 ? 'isElement' : ''}`}>{creditos?.texto3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right d-none d-sm-none d-md-block'>
                                <div className='right-cpm' id='element1'>
                                    <Image src={urlForce(creditos?.imagen1?.asset).url()} alt="pin" width="733" height="820" layout={"fixed"} />
                                </div>
                                <div className='right-cpm' id='element2'>
                                    <Image src={urlForce(creditos?.imagen2?.asset).url()} alt="pin" width="733" height="820" layout={"fixed"} />
                                </div>
                                <div className='right-cpm' id='element3'>
                                    <Image src={urlForce(creditos?.imagen3?.asset).url()} alt="pin" width="733" height="820" layout={"fixed"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='title-banks'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <h2><span>¡Estás a un paso más cerca</span> de adquirir la propiedad de tus sueños!</h2>
                    </div>
                </div>
            </section>
            <section className='block' id='banks'>
                <div className='holder'>
                    <ParallaxBanner
                        className='parallax-banks-desk d-none d-sm-none d-md-block'
                        style={{ 
                            aspectRatio: '2 / 1',
                            height: "480px"
                        }}
                        layers={[
                            {
                                image:
                                BannerBanks.src,
                                speed: -10,
                                
                            },
                            {
                                children: (
                                    <section className='container-fluid'>
                                        <div className='row text-center banks'>
                                            <h1>Trabajamos con los bancos más reconocidos</h1>
                                            <div className='row'>
                                                <span className="col">
                                                    <Image src={Bbva} alt="pin" width="160" height="33" layout={"fixed"} />
                                                </span>
                                                <span className="col">
                                                    <Image src={Banorte} alt="pin" width="160" height="33" layout={"fixed"} />
                                                </span>
                                                <span className="col">
                                                    <Image src={Scotiabank} alt="pin" width="160" height="33" layout={"fixed"} />
                                                </span>
                                                <span className="col">
                                                    <Image src={HSBC} alt="pin" width="160" height="33" layout={"fixed"} />
                                                </span>
                                                <span className="col">
                                                    <Image src={Santander} alt="pin" width="160" height="33" layout={"fixed"} />
                                                </span>
                                            </div>
                                        </div>
                                    </section>
                                )
                            }
                        ]}
                    />
                    <ParallaxBanner
                        className='parallax-banks-mobile d-block d-sm-block d-md-none'
                        style={{ 
                            aspectRatio: '2 / 1',
                            height: "480px"
                        }}
                        layers={[
                            {
                                image:
                                BannerBanks.src,
                                speed: -10,
                                
                            },
                            {
                                children: (
                                    <section className='container-fluid'>
                                        <div className='row text-center banks'>
                                            <h1>Trabajamos con los bancos más reconocidos</h1>
                                            <div className='row bank'>
                                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <span className="col">
                                                                <Image src={Bbva} alt="pin" width="160" height="33" layout={"fixed"} />
                                                            </span>
                                                            <span className="col">
                                                                <Image src={Banorte} alt="pin" width="160" height="33" layout={"fixed"} />
                                                            </span>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <span className="col">
                                                                <Image src={Scotiabank} alt="pin" width="160" height="33" layout={"fixed"} />
                                                            </span>
                                                            <span className="col">
                                                                <Image src={HSBC} alt="pin" width="160" height="33" layout={"fixed"} />
                                                            </span>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <span className="col">
                                                                <Image src={Santander} alt="pin" width="160" height="33" layout={"fixed"} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )
                            }
                        ]}
                    />
                </div>
            </section>
            <section className='block' id='form-multistep'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className='row'>
                                    <h3><span>¡Terminó la espera!,</span> consigue tu financiamiento ahora.</h3>
                                </div>
                                <div className='row'>
                                    <Forms />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 image'>
                                <Image src={Agente} alt="pin" width="527" height="568" />
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
    const creditos = await Client.fetch(
      `
        *[_type == "credits" ][0]{
          ...
        }
      `)
    return {
      props: {
        creditos
      }
    }
}

export default Creditos
