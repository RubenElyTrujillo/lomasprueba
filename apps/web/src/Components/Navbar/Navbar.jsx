import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo, Dropdown, LomasMobile } from 'ui/constants'

export default function Navbar(){
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
        <div className={`navigation ${isActive ? "isActive" : ""} ${isClick ? "isClick" : ""} ${route.pathname == "/propiedad/[slug]" ? "isPropiedad" : ""} ${route.pathname.slice(1)}`}>
            <div className={`holder ${isClick ? "isClick" : ""}`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link href="/">
                            <a className={`navbar-brand d-none d-sm-none d-md-block ${isActive ? "Active" : ""}`} href="#">
                                <Image src={Logo} alt="Logo Lomas Home" width="114" height="70" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className={`navbar-brand d-block d-sm-block d-md-none ${isActive ? "Active" : ""}`} href="#">
                                <div className={`${isActive ? "Hidden" : "Show"}`}>
                                    <Image className={`${isActive ? "Hidden" : "Show"}`} src={Logo} alt="Logo Lomas Home" width="114" height="70" />
                                </div>
                                <div className={`${isActive ? "Show" : "Hidden"}`}>
                                    <Image  src={LomasMobile} alt="Logo Lomas Home" width="114" height="13.65" />
                                </div>
                            </a>
                        </Link>
                        <button onClick={() => setIsClick(!isClick)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="bi bi-list"></i>
                        </button>
                        <div className={`collapse navbar-collapse ${isActive ? "Active" : ""}`} id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Comprar
                                        <Image src={Dropdown} alt="pin" width="15" height="10" layout={"fixed"} />
                                    </a>
                                    <ul className="dropdown-menu text-center">
                                        <li>
                                            <Link href={{ pathname: '/[category]', query: { category: 'casa'}}}>
                                                <a className="dropdown-item">Casas</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={{ pathname: '/[category]', query: { category: 'departamento'}}}>
                                                <a className="dropdown-item">Departamentos</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={{ pathname: '/[category]', query: { category: 'terreno'}}}>
                                                <a className="dropdown-item">Terrenos</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={{ pathname: '/[category]', query: { category: 'local'}}}>
                                                <a className="dropdown-item">Locales comerciales</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={{ pathname: '/[category]', query: { category: 'oficina'}}}>
                                                <a className="dropdown-item">Oficinas</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <Link href="/vende">
                                    <a className="nav-link">Vende tu propiedad</a>
                                </Link>
                                <Link href="/creditos">
                                    <a className="nav-link">Créditos</a>
                                </Link>
                                <Link href="/conocenos">
                                    <a className="nav-link">Conócenos</a>
                                </Link>
                                <Link href='/#contacto'>
                                    <a className="nav-link">Contacto</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}