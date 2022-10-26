import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Header from '../../components/layout/header/Header'
import Main from '../../components/layout/main/main'
import Footer from '../../components/layout/footer/Footer'
import ModalWindow from '../../components/shared/modal-window/modal-window'
import CartComponent from '../../components/cart-component/cart-component'
import Script from 'next/script'
import lemon from '../../public/images/lemon.svg'
import Plug from '../../components/shared/plug/plug'

const City = () => {
	const [stripe, setStripe] = useState<boolean>(true)
	const router = useRouter()
	useEffect(() => {
		const time = setTimeout(() => setStripe(false), 1000)
		return () => clearTimeout(time)
	}, [])
	const { activeCartModal } = useTypedSelector(modal => modal.cartModal)

	return (
		<>
			<Header />
			<Main />
			<Footer />
			<ModalWindow active={activeCartModal}>
				<CartComponent />
			</ModalWindow>
			{stripe && <Plug />}
		</>
	)
};

export default City;
