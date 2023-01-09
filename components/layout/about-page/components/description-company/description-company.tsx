import React, { FC } from 'react'
import style from './description-company.module.scss'
import { state } from '../../../../../mockDate'
import SocialsLinks from '../../../../shared/socials-links/socials-links'
import plateSalad from '../../../../../public/images/plate-salad.png'
import platePasta from '../../../../../public/images/plate-pasta.png'
import plateRice from '../../../../../public/images/plate-riсe.png'

const DescriptionCompany: FC = () => {
	return (
		<section className={style.description_company_section}>
			<div className="container">
				<div className={style.description_company_section__wrap}>
					<div className={style.description_company_section__left}>
						<div className={style.description_company_section__img}>
							<img src={state.header.logo.logoBig} alt={state.header.logo.alt} />
						</div>
						<h2 className={style.description_company_section__title}>
							Здоровая еда<br />с доставкой на дом
						</h2>
						<SocialsLinks/>
					</div>
					<div className={style.plates}>
						<div className={`${style.salad} ${style.plate}`} data-aos="fade-left">
							<img src={plateSalad.src} alt="Тарелка" />
						</div>
						<div className={`${style.pasta} ${style.plate}`} data-aos="fade-left" data-aos-delay="500">
							<img src={platePasta.src} alt="Тарелка" />
						</div>
						<div className={`${style.rice} ${style.plate}`} data-aos="fade-left" data-aos-delay="1000">
							<img src={plateRice.src} alt="Тарелка" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DescriptionCompany
