import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../src/Layout/Layout'
import SearchList from '../src/Components/SearchList/SearchList'
import SearchDesk from '../src/Components/Search/SearchDesk'
import SearchMobile from '../src/Components/Search/SearchMobile'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Cover1, 
    Cover2, 
    Cover3, 
    CoverMobile1, 
    CoverMobile2, 
    CoverMobile3, 
      } from "ui/constants"
import { M2_Const, Rec, Banios_comp, Arrow1 } from 'ui/constants'
import imageUrlBuilder from '@sanity/image-url'
import Client from '../libs/Client'
const builder = imageUrlBuilder(Client)

export default function Search(){
    const [propiedades, setPropiedades] = useState(null);
    const [update, setUpdate] = useState(null);
    const router = useRouter()
    const propiedad = router.query.propiedad
    const tipo = router.query.tipo
    const min = router.query.min
    const max = router.query.max
    var cat = String(propiedad)
    var disp = String(tipo)
    let numberMin = Math.floor(min)
    let numberMax = Math.floor(max)
    function urlForce(soruce){
        const img = builder.image(soruce)
        return img
    }
    useEffect(() => {
        if(update == propiedades){
            Client.fetch(
                `*[_type == "propiedades" && categoria->.category == $cat && availability == $disp && sale > $numberMin && sale < $numberMax ][0..11]{
                    ...,
                    categoria->
                }`, {cat, disp, numberMin, numberMax}
            )
            .then((data) =>{
                setPropiedades(data)
                setUpdate(data)
            })
            .catch(console.error);
        }
	}, [update, propiedades, cat, disp, numberMin, numberMax]);
    
    return(
        <Layout title="Buscar | Lomas Home">
            <section className="block" id="portada">
                <div className="portada-carousel">
                    <div id="carouselDesktop" className="carousel slide carousel-fade d-none d-sm-none d-md-block" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <ParallaxBanner
                                    className='portada-parallax-desk'
                                    style={{ 
                                        aspectRatio: '2 / 1',
                                    }}
                                    layers={[
                                        {
                                        image:
                                            Cover1.src,
                                        speed: -10,
                                        },
                                    ]}
                                />
                            </div>
                            <div className="carousel-item">
                                <ParallaxBanner
                                    className='portada-parallax-desk'
                                    style={{ 
                                        aspectRatio: '2 / 1',
                                    }}
                                    layers={[
                                        {
                                        image:
                                            Cover2.src,
                                        speed: -10,
                                        },
                                    ]}
                                />
                            </div>
                            <div className="carousel-item">
                                <ParallaxBanner
                                    className='portada-parallax-desk'
                                    style={{ 
                                        aspectRatio: '2 / 1',
                                    }}
                                    layers={[
                                        {
                                        image:
                                            Cover3.src,
                                        speed: -10,
                                        },
                                    ]}
                                />
                            </div>
                            <div className="carousel-caption">
                                <h3>¿Qué tipo de propiedad estás buscando?</h3>
                                <SearchDesk />
                            </div>
                        </div>
                    </div>
                    <div id="carouselMobile" className="carousel slide carousel-fade d-block d-sm-block d-md-none" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <ParallaxBanner
                                    className='portada-parallax-mobile'
                                    style={{ 
                                        aspectRatio: '2 / 1',
                                    }}
                                    layers={[
                                        {
                                        image:
                                            CoverMobile1.src,
                                        speed: -10,
                                        },
                                    ]}
                                />
                            </div>
                            <div className="carousel-item">
                                <ParallaxBanner
                                    className='portada-parallax-mobile'
                                    style={{ 
                                        aspectRatio: '2 / 1',
                                    }}
                                    layers={[
                                        {
                                        image:
                                            CoverMobile2.src,
                                        speed: -10,
                                        },
                                    ]}
                                />
                            </div>
                            <div className="carousel-item">
                                <ParallaxBanner
                                    className='portada-parallax-mobile'
                                    style={{ 
                                        aspectRatio: '2 / 1',
                                    }}
                                    layers={[
                                        {
                                        image:
                                        CoverMobile3.src,
                                        speed: -10,
                                        },
                                    ]}
                                />
                            </div>
                            <div className="carousel-caption">
                                <h3>¿Qué tipo de propiedad estás buscando?</h3>
                                <SearchMobile />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='search-list'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <ul className='propiedades'>
                            {propiedades?.map((propiedad, index) =>(
                                <li className='propiedad card' key={index}>
                                    {propiedad.imagesGallery?.map((img, index) => (
                                        index <= 0 ?
                                            <Image src={urlForce(img.asset).url()} width={416} height={289} layout={"responsive"} className="card-img-top" alt={propiedad?.name} key={index} />
                                        : null
                                    ))}
                                    <div className="card-body">
                                        <div className='row d-inline-block'>
                                            <span className='text-uppercase'>{propiedad?.categoria?.category}</span>
                                            <span className='text-uppercase'>{propiedad?.availability}</span>
                                        </div>
                                        <h5 className="card-title">{propiedad?.name}</h5>
                                        <p className="card-text">{propiedad?.address}</p>
                                        <h4 className="price">${propiedad?.sale}</h4>
                                        <div className='row comp'>
                                            <div className='col'><Image src={M2_Const} alt="pin" width="16" height="16" layout={"fixed"} />{propiedad?.construction > 0 ? <>{propiedad?.construction}</> : <>0</>}<span>m2</span></div>
                                            <div className='col'><Image src={Rec} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.bedrooms > 0 ? <>{propiedad?.bedrooms}</> : <>0</> } <span>Rec.</span></div>
                                            <div className='col'><Image src={Banios_comp} alt="pin" width="16" height="16" layout={"fixed"} />{propiedad?.bathroom > 0 ? <>{propiedad?.bathroom}</> : <>0</>}<span>Baños comp.</span></div>
                                        </div>
                                        <div className='row my-2 btn-propi'>
                                            <Link  href={{ pathname: '/propiedad/[slug]', query: { slug: propiedad.slug.current }}}>
                                                <a>Ver propiedad <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
