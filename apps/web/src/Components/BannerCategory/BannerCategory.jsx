import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Categoria1, Categoria2, Categoria3, Categoria4, Categoria5 } from 'ui/constants'

export default function BannerCategory({category}){
    return(
        <>
            {(category == "casa") ? (
                <ParallaxBanner
                    className='parallax-category-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "480px"
                    }}
                    layers={[
                    {
                        image:
                        Categoria1.src,
                        speed: -10,    
                    },
                    {
                        children: (
                        <section className='row text-center carousel-caption content-category'>
                            <h1>Casas en venta / renta en Puebla.</h1>
                            <span>Encuentra la casa que realemente quieres tener.</span>
                        </section>
                        )
                    }
                    ]}
                />
            ) : category == "departamento" ? (
                <ParallaxBanner
                    className='parallax-category-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "480px"
                    }}
                    layers={[
                    {
                        image:
                        Categoria2.src,
                        speed: -10,    
                    },
                    {
                        children: (
                        <section className='row text-center carousel-caption content-category'>
                            <h1>Departamentos en venta / renta en Puebla.</h1>
                            <span>La oferta más exclusiva de departamentos en Puebla.</span>
                        </section>
                        )
                    }
                    ]}
                />
            ) : category == "terreno" ? (
                <ParallaxBanner
                    className='parallax-category-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "480px"
                    }}
                    layers={[
                    {
                        image:
                        Categoria3.src,
                        speed: -10,    
                    },
                    {
                        children: (
                        <section className='row text-center carousel-caption content-category'>
                            <h1>Terrenos en venta en Puebla.</h1>
                            <span>Invierte en los terrenos con mayor plusvalía en Puebla.</span>
                        </section>
                        )
                    }
                    ]}
                />
            ) : category == "local" ? (
                <ParallaxBanner
                    className='parallax-category-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "480px"
                    }}
                    layers={[
                    {
                        image:
                        Categoria4.src,
                        speed: -10,    
                    },
                    {
                        children: (
                        <section className='row text-center carousel-caption content-category'>
                            <h1>Locales comerciales en venta / renta en Puebla</h1>
                            <span>Tu negocio en los mejores locales de Puebla</span>
                        </section>
                        )
                    }
                    ]}
                />
            ) : category == "oficina" ? (
                <ParallaxBanner
                    className='parallax-category-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "480px"
                    }}
                    layers={[
                    {
                        image:
                        Categoria5.src,
                        speed: -10,    
                    },
                    {
                        children: (
                        <section className='row text-center carousel-caption content-category'>
                            <h1>Oficinas en venta / renta en Puebla</h1>
                            <span>Tu oficina en los mejores centros de negocios.</span>
                        </section>
                        )
                    }
                    ]}
                />
            ) : <></>}
        </>
    )
}