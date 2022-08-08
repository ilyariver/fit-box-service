import React from 'react'
import Image from 'next/image'
import AboutServiceComponent from '../../../about-service-component/about-service-component'
import style from './service-section.module.scss'
import { state } from '../../../../mockDate'
import plateSalad from '../../../../public/images/plate-salad.png'
import platePasta from '../../../../public/images/plate-pasta.png'
import plateRice from '../../../../public/images/plate-riсe.png'
import holodos from '../../../../public/images/holodos.png'
import SeparatorLineComponent from '../../../separator-line-component/separator-line-component'
import { MainButton } from '../../../shared/mainButton/mainButton'

const ServiceSection = () => {

	return (
		<div>
			<div className="container">
				<div className={style.top_content}>
					<div className={style.service}>
						<AboutServiceComponent title={state.aboutService.title} description={state.aboutService.text} />
						<div className={style.plates}>
							<div className={`${style.salad} ${style.plate}`} data-aos="fade-left" data-aos-delay="1000">
								<Image src={plateSalad} alt="Тарелка" placeholder="blur" />
							</div>
							<div className={`${style.pasta} ${style.plate}`} data-aos="fade-left" data-aos-delay="1800">
								<Image src={platePasta} alt="Тарелка" placeholder="blur" />
							</div>
							<div className={`${style.rice} ${style.plate}`} data-aos="fade-left" data-aos-delay="1500">
								<Image src={plateRice} alt="Тарелка" placeholder="blur" />
							</div>
						</div>
					</div>
				</div>
				<div className={style.top_bottom} id="section-cost">
					<div className={style.holodos}
						 data-aos="fade-right"
						 data-aos-delay="1000">
						<Image src={holodos} alt="Холодильник" placeholder="blur"/>
					</div>
					<div className={style.red_ellipse} data-aos-duration="1500" data-aos="zoom-in" data-aos-delay="1500">
						<svg viewBox="0 0 710 722" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M658.5 360.874C658.5 532.537 521.825 670.249 355 670.249C188.175 670.249 51.5 532.537 51.5 360.874C51.5 189.212 188.175 51.5 355 51.5C521.825 51.5 658.5 189.212 658.5 360.874Z" stroke="url(#paint0_radial_790_956)" strokeWidth="103"/>
							<defs>
								<radialGradient id="paint0_radial_790_956" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(355 343.525) rotate(90) scale(361.137 355.259)">
									<stop offset="0.728039" stopColor="#D74253"/>
									<stop offset="0.867651" stopColor="#FF576A"/>
									<stop offset="1" stopColor="#D74253"/>
								</radialGradient>
							</defs>
						</svg>

					</div>
					<div className={style.text_content} data-aos="fade-left">
						<SeparatorLineComponent className={style.separate} title="Микромаркет здоровой еды в вашем офисе или тц" color="#312929"/>
						<p className={style.text}>
							Бесплатно  установим мини-магазин со свежей едой прямо у вас в офисе
						</p>
						<div className={style.prod_text}>Без продавцов: нужны только розетка и один квадратный метр</div>
						<MainButton className={style.button}>Хочу холодильник с едой в офис</MainButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceSection
