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
							<div className={`${style.salad} ${style.plate}`}>
								<Image src={plateSalad} alt="Тарелка" placeholder="blur"/>
							</div>
							<div className={`${style.pasta} ${style.plate}`}>
								<Image src={platePasta} alt="Тарелка" placeholder="blur"/>
							</div>
							<div className={`${style.rice} ${style.plate}`}>
								<Image src={plateRice} alt="Тарелка" placeholder="blur"/>
							</div>
						</div>
					</div>
				</div>
				<div className={style.top_bottom}>
					<div className={style.holodos}>
						<Image src={holodos} alt="Холодильник" className={style.holodos} placeholder="blur" />
					</div>
					<div className={style.text_content}>
						<SeparatorLineComponent title="Микромаркет здоровой еды в вашем офисе или тц" color="#312929"/>
						<p className={style.text}>
							Бесплатно  установим мини-магазин со свежей едой прямо у вас в офисе
						</p>
						<div className={style.prod_text}>Без продавцов: нужны только розетка и один квадратный метр</div>
						<MainButton title="Хочу холодильник с едой в офис" fontSize="18px" width="380px" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceSection
