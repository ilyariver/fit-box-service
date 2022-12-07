import 'normalize.css'
import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { wrapper } from '../store/store'
import lemon from '../public/images/lemon.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Script from 'next/script'
import Plug from '../components/shared/plug/plug'
import { DevSupport } from '@react-buddy/ide-toolbox'
import { ComponentPreviews, useInitial } from '../dev'

function MyApp({ Component, pageProps }: AppProps) {
	const [stripe, setStripe] = useState<boolean>(true)

	useEffect(() => {
		Aos.init({
			disable: 'mobile', once: true, duration: 800,
		})
	}, [])

	return (<>
			<Head>
				<title>Правильное питание с доставкой</title>
			</Head>
			{stripe && <Plug/>}
			<DevSupport ComponentPreviews={ComponentPreviews}
						useInitialHook={useInitial}
			>
				<Component {...pageProps} />
			</DevSupport>
			<Script
				id="stripe-js"
				src="https://js.stripe.com/v3/"
				onLoad={() => {
					setStripe(false)
				}}
			/>
		</>)
}

export default wrapper.withRedux(MyApp)
