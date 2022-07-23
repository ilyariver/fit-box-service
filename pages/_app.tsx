import 'normalize.css'
import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
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
