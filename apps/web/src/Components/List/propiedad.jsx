import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sanityClient from '../../../libs/Client'
import imageUrlBuilder from '@sanity/image-url'
import { M2_Const, Rec, Banios_comp, Arrow1 } from 'ui/constants'
import { separator } from '../../../libs/complementos'

const builder = imageUrlBuilder(sanityClient)

export default function PropiedadList({propiedad}){
    function urlForce(soruce){
        const img = builder.image(soruce)
        return img
    }
    const [propiedades, setPropiedades] = useState(null);
    useEffect(() => {
		sanityClient.fetch(
		    `*[_type == "propiedades" && categoria->.category == $propiedad][0..8]{
                ...,
                categoria->
            }`, {propiedad}
		)
		.then((data) => setPropiedades(data))
		.catch(console.error);
	}, []);
    return(
        <>
            {propiedades?.map((propiedad, index) =>(
                <Link  href={{ pathname: '/propiedad/[slug]', query: { slug: propiedad.slug.current }}} key={index}>
                    <a>
                        <li className='propiedad card'>
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
                                <h4 className="price">${propiedad?.sale ? separator(propiedad.sale) : propiedad?.income ? separator(propiedad?.income) : "No hay precio de Venta/Renta"}</h4>
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
        </>
    )
}