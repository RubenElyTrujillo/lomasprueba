import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerCategory1, BannerCategory2, BannerCategory3, BannerCategory4, BannerCategory5 } from 'ui/constants'

export default function BannerCategoryFooter({category}){
    return(
        <>
            {(category == "casa") ? (
                <ParallaxBanner
                    className='parallax-category-banner-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "362px"
                    }}
                    layers={[
                    {
                        image:
                        BannerCategory1.src,
                        speed: -10,    
                    },
                    {
                        children: (
                        <section className='row text-center carousel-caption content-category'>
                            <h1>Encuentra la casa donde siempre quisiste vivir.</h1>
                            <span>Todo empieza aquí.</span>
                        </section>
                        )
                    }
                    ]}
                />
            ) : category == "departamento" ? (
                <ParallaxBanner
                    className='parallax-category-banner-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "362px"
                    }}
                    layers={[
                    {
                        image:
                        BannerCategory2.src,
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
                    className='parallax-category-banner-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "362px"
                    }}
                    layers={[
                    {
                        image:
                        BannerCategory3.src,
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
                    className='parallax-category-banner-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "362px"
                    }}
                    layers={[
                    {
                        image:
                        BannerCategory4.src,
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
                    className='parallax-category-banner-desk'
                    style={{ 
                        aspectRatio: '2 / 1',
                        height: "362px"
                    }}
                    layers={[
                    {
                        image:
                        BannerCategory5.src,
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