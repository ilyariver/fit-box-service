import { FC, useEffect, useState } from 'react'
import style from './first-section.module.scss'
import Link from 'next/link'
import { MainButton } from '../../../shared/mainButton/mainButton'
import PreviewMenu from '../../../shared/preview-menu/preview-menu'
import girl from '../../../../public/images/girl@x3.png'
import girlEllipse from '../../../../public/images/girl-ellipse.svg'
import { state } from '../../../../mockDate'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useRouter } from 'next/router'
import { Cities } from '../../../../types/selectCityTypes'
import SocialsLinks from '../../../shared/socials-links/socials-links'

const FirstSection: FC = () => {
	const router = useRouter()
	const [setCity, setSetCity] = useState<Cities[]>([])
	const { cities } = useTypedSelector(modal => modal.selectedCity)

	useEffect(() => {
		const hasSelectedCity = cities.filter(city => city.link === router.query.city)

		if (hasSelectedCity.length !== 0) {
			setSetCity(hasSelectedCity)
		}
	}, [router, cities])

	return (
		<section className={style.first_section}>
			<div className={`${style.container} container`}>
				<div className={`${style.girl_wrap}`} data-aos="zoom-out">
					<img src={girl.src} alt="Девушка" width={637} height={786} />
				</div>
				<div className={style.girl_ellipse} data-aos-duration="1500" data-aos="zoom-in" data-aos-delay="1000">
					<img src={girlEllipse} alt="Круг"/>
				</div>
				<h1 className={style.title} data-aos="fade-right" >
					Правильное питание <br />с&nbsp;доставкой <br />
					{
						setCity.map(city => {
							return <span key={city.title}>в&nbsp;{city.where}</span>
						})
					}

				</h1>
				<Link href="#section-menu">
					<a>
						<MainButton width="214px" bottom="35px">Выбрать меню</MainButton>
					</a>
				</Link>
				<div className={style.previews}>
					{
						state.menu.map((item,idx) => {
							return (
								<div className={style.wrap_preview} key={item.id} data-aos="zoom-out" data-aos-delay={idx * 500}>
									<PreviewMenu text={item.title} img={item.img} />
								</div>
							)
						})
					}
				</div>
				<SocialsLinks />
			</div>
		</section>
	)
}

export default FirstSection
