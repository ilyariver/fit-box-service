import { FC } from 'react'
import style from './delivery-text-section.module.scss'
import { state } from '../../../../../mockDate'
import { MainButton } from '../../../../shared/mainButton/mainButton'
import Link from 'next/link'
import SocialsLinks from '../../../../shared/socials-links/socials-links'
import dish from '../../../../../public/images/dish.png'

const DeliveryTextSection: FC = () => {

	return (
		<section className={style.delivery_text_section}>
			<div className="container">
				<div className={style.delivery_text_section__img}>
					<img src={state.header.logo.logoWhite} alt={state.header.logo.alt} />
				</div>
				<h1 className={style.delivery_text_section__title}>
					Доставка разнообразного и вкусного питания в удобное для вас время
				</h1>
				<MainButton className={style.delivery_text_section__btn}>
					<Link href="/">Начать питаться правильно</Link>
				</MainButton>
				<SocialsLinks />
				<div className={style.delivery_text_section__images}>
					<div className={style.delivery_text_section__image_top} data-aos="fade-left" data-aos-delay="500">
						<img alt="Картинка" src={dish.src} />
					</div>
					<div className={style.delivery_text_section__image_bottom} data-aos="fade-left" data-aos-delay="1000">
						<img alt="Картинка" src={dish.src} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default DeliveryTextSection
