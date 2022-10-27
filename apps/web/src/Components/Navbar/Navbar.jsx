import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo, Dropdown, LomasMobile } from 'ui/constants'

export default function Navbar(){
    const [checked, setChecked] = useState(false)
    const route = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const chageBackground = () =>{
        if(window.scrollY >= 80){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    useEffect(() => {
        chageBackground()
        window.addEventListener('scroll', chageBackground)
    })
    return(
        <section className={`navigation ${checked ? 'isChecked' : ''} ${isActive ? 'isScroll' : ''}`}>
            <div className='holder'>
                <nav className='navbar-custom'>
                    <input id="nav-toggle" type="checkbox" onClick={() => setChecked(!checked)} />
                    <Link href="/">
                        <a className={`logo d-none d-sm-none d-md-block ${isActive ? 'isScroll' : ''}`}><Image src={Logo} /></a>
                    </Link>
                    <Link href="/">
                        <a className={`logo d-block d-sm-block d-md-none ${isActive ? 'isScroll' : ''}`}>
                            <div className={`${isActive ? 'isHidden' : 'isShow'}`}>
                                <Image src={Logo} alt="Logo Lomas Home" />
                            </div>
                            <div className={`${isActive ? 'isShow' : 'isHidden'}`}> 
                                <Image   src={LomasMobile} alt="Logo Lomas Home" />
                            </div>
                        </a>
                    </Link>
                    <ul className={`links ${isActive ? 'isScroll' : ''}`}>
                        <li>
                            <label htmlFor="drop-1" className='toggle'>Comprar</label>
                            <a className='dropdown-btn'>Comprar</a>
                            <input type="checkbox" id="drop-1"/>
                            <ul className="dropdown">
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'casa'}}}>
                                        <a>Casas</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'departamento'}}}>
                                        <a>Departamentos</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'terreno'}}}>
                                        <a>Terrenos</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'local'}}}>
                                        <a>Locales comerciales</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={{ pathname: '/[category]', query: { category: 'oficina'}}}>
                                        <a>Oficinas</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/vende"><a>Vende tu propiedad</a></Link></li>
                        <li><Link href="/creditos"><a>Créditos</a></Link></li>
                        <li><Link href="/conocenos"><a>Conócenos</a></Link></li>
                        <li><Link href='/#contacto'><a>Contacto</a></Link></li>
                    </ul>
                    <label htmlFor="nav-toggle" className="icon-burger">
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </label>
                </nav>
            </div>
        </section>
    )
}