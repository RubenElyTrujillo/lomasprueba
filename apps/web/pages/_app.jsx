import React, { useEffect } from 'react'
import Script from 'next/script'
import AOS from 'aos'
import 'swiper/scss'
import 'swiper/css/effect-fade'
import '../src/css/normalize.css'
import '../src/css/global.scss'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import '../src/css/layout.css'
import '../src/css/list.css'
import '../src/css/creditos.css'
import '../src/css/propiedad.css'
import '../src/css/search.css'
import '../src/css/category.css'
import '../src/css/conocenos.css'
import '../src/css/vende.css'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
        AOS.init({
          duration: 2000
        })
    }, [])
    return (
      <>
        <Script id='analytics-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=UA-123850556-88`} />
        <Script id='script-analytics' strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
                    
            gtag('config', 'UA-246056744-1');
          `}
        </Script>
        <Component {...pageProps} />
      </>
    )
}

export default MyApp