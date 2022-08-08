import 'normalize.css'
import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { wrapper } from '../store/store'
import Aos from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        Aos.init({
            disable: 'mobile',
            once: true,
            duration: 800,

        })
    }, [])
  return (
      <>
        <Head>
          <title>Правильное питание с доставкой</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default wrapper.withRedux(MyApp)
