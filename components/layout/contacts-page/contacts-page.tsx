import React, { FC } from 'react'
import style from './contacts-page.module.scss'
import SocialsLinks from '../../shared/socials-links/socials-links'
import Link from 'next/link'
import AddressServiceComponent from '../../address-service-component/address-service-component'
import { state } from '../../../mockDate'

const ContactsPage: FC = () => {
	return (
		<main className={style.main}>
			<div className="container">
				<div className={style.main__content}>
					<h1 className={style.main__title}>Контакты</h1>
					<ul className={style.main__connection}>
						<li className={style.main__item}>
							<h2 className={style.main__subtitle}>Социальные сети</h2>
							<SocialsLinks color="black" />
						</li>
						<li className={style.main__item}>
							<h2 className={style.main__subtitle}>Телефон</h2>
							<Link href={'tel:+78005501295'}>
								<a className={style.main__link}>+ 7 (800) 550 - 12 - 95</a>
							</Link>
						</li>
						<li className={style.main__item}>
							<h2 className={style.main__subtitle}>Почта</h2>
							<Link href={'mailto:fitbox.uln@gmail.com'}>
								<a className={style.main__link}>fitbox.uln@gmail.com</a>
							</Link>
						</li>
						<li className={style.main__item}>
							<h2 className={style.main__subtitle}>Режим работы</h2>
							<div className={style.main__link}>
								Пн-Вс: 9:00-23:00
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className={style.main__map} style={{position:'relative',overflow:'hidden',fontSize: "0"}}>
				<a href="https://yandex.ru/maps/192/vladimir/?utm_medium=mapframe&utm_source=maps"
				   style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0'}}>Владимир</a>
				<a href="https://yandex.ru/maps/192/vladimir/?ll=40.406635%2C56.129057&utm_medium=mapframe&utm_source=maps&z=13"
				   style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Яндекс Карты — транспорт, навигация, поиск мест</a>
				<iframe src="https://yandex.ru/map-widget/v1/-/CBR15MxKOD" width="100%" height="490" frameBorder="1"
						allowFullScreen={true} style={{ position: 'relative', border: 'none', filter: 'brightness(0.8)' }}></iframe>
			</div>
		</main>
	)
}

export default ContactsPage
