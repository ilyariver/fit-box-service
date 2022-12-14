import { FC } from 'react'
import FaqSection from '../sections/faq-section/faq-section'
import style from './delivery-page.module.scss'

const DeliveryPage: FC = () => {
	return (
		<main className={style.main}>
			<div className={style.main__wrap}>
				<FaqSection title="Доставка и оплата"/>
			</div>
		</main>
	)
}

export default DeliveryPage
