import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../src/Layout/Layout'
import BannerCategory from '../src/Components/BannerCategory/BannerCategory'
import BannerCategoryFooter from '../src/Components/BannerCategoryFooter/BannerCategoryFooter'
import SearchCategoryDesk from '../src/Components/SearchCategory/SearchCategoryDesk'
import SearchCategoryMobile from '../src/Components/SearchCategory/SearchCategoryMobile'
import sanityClient from '../libs/Client'
import { M2_Const, Rec, Banios_comp, Arrow1 } from 'ui/constants'
const builder = imageUrlBuilder(sanityClient)


function Category(){
    const [search, setSearch] = useState(null)
    const [update, setUpdate] = useState(null)
    const route = useRouter()
    const ubi = String(route.query.ubicacion)
    const tipo = String(route.query.tipo)
    const habi = route.query.habitaciones
    const min = Math.floor(route.query.min)
    const max = Math.floor(route.query.max)
    const category = route.query.category
    function urlForce(soruce){
        const img = builder.image(soruce)
        return img
    }
    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
    function fetchPropieadesWithOutFilter(){
        if(update == search){
            sanityClient.fetch(
                `*[_type == "propiedades" && categoria->.slug.current == $category] | order(_id) [0..11]{
                    ...,
                    categoria->
                }`, {category}
            )
            .then((data) =>{
                setSearch(data)
                setUpdate(data)
            })
            .catch(console.error);
        }
    }
    function fetchPropieadesWithFilter(){
        if(update == search){
            sanityClient.fetch(
                `*[_type == "propiedades" && categoria->.slug.current == $category && ubicacion->.slug.current == $ubi && availability == $tipo && bathroom == $habi && sale > $min && sale < $max]| order(_id) [0..11]{
                    ...,
                    categoria->,
                    ubicacion->
                }`, {category, ubi, tipo, habi, min, max}
            )
            .then((data) =>{
                setSearch(data)
                setUpdate(data)
            })
            .catch(console.error);
        }
    }
    useEffect(() => {
        if(ubi == null || tipo == null || habi == null || min == null || max == null){
            fetchPropieadesWithOutFilter()
        } else {
            fetchPropieadesWithFilter()
        }
	}, [update, search, category, ubi, tipo, habi, min, max]);
    return(
        <Layout title={`${category} | Lomas Home`}>
            <section className='block' id='category-banner'>
                <BannerCategory category={route.query.category} />
                <div className='holder'>
                    <div className='container-fluid'>

                    </div>
                </div>
            </section>
            <section className='block' id='form' data-aos="fade-up">
                <div className='holder'>
                    <div className='container-fluid'>
                        <SearchCategoryDesk />
                        <SearchCategoryMobile />
                    </div>
                </div>
            </section>
            <section className='block' id='category-propiedades' data-aos="fade-up">
                <div className='holder'>
                    <div className='container-fluid'>
                        <ul className='propiedades'>
                            {search?.map((propiedad, index) =>(
                                <Link  href={{ pathname: '/propiedad/[slug]', query: { slug: propiedad.slug.current }}}>
                                    <a>
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
                                                <h4 className="price">${separator(propiedad?.sale)}</h4>
                                                <div className='row comp'>
                                                    <div className='col'><Image src={M2_Const} alt="pin" width="16" height="16" layout={"fixed"} />{propiedad?.construction > 0 ? <>{propiedad?.construction}</> : <>0</>}<span>m2</span></div>
                                                    <div className='col'><Image src={Rec} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.bedrooms > 0 ? <>{propiedad?.bedrooms}</> : <>0</> } <span>Rec.</span></div>
                                                    <div className='col'><Image src={Banios_comp} alt="pin" width="16" height="16" layout={"fixed"} />{propiedad?.bathroom > 0 ? <>{propiedad?.bathroom}</> : <>0</>}<span>Baños comp.</span></div>
                                                </div>
                                                <div className='row my-2 btn-propi'>
                                                        <a>Ver propiedad <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                                                </div>
                                            </div>
                                        </li>
                                    </a>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className='block' id='empieza' data-aos="fade-up">
                <div className='holder'>
                <BannerCategoryFooter category={route.query.category} />
                    <div className='container-fluid'>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Category