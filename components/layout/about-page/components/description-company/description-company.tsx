import React, { FC } from 'react'
import style from './description-company.module.scss'
import Image from 'next/image'
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
							<Image src={state.header.logo.logoBig} alt={state.header.logo.alt} />
						</div>
						<h2 className={style.description_company_section__title}>
							Здоровая еда<br />с доставкой на дом
						</h2>
						<SocialsLinks/>
					</div>
					<div className={style.plates}>
						<div className={`${style.salad} ${style.plate}`} data-aos="fade-left">
							<Image src={plateSalad} alt="Тарелка" placeholder="blur" />
						</div>
						<div className={`${style.pasta} ${style.plate}`} data-aos="fade-left" data-aos-delay="500">
							<Image src={platePasta} alt="Тарелка" placeholder="blur" />
						</div>
						<div className={`${style.rice} ${style.plate}`} data-aos="fade-left" data-aos-delay="1000">
							<Image src={plateRice} alt="Тарелка" placeholder="blur" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DescriptionCompany
