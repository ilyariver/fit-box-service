import React from 'react'
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
							<picture>
								<source srcSet={plateSalad.src} type="image/webp" />
								<img className={`${style.salad} ${style.plate}`} src={plateSalad.src} alt="Тарелка"/>
							</picture>
							<picture>
								<source srcSet={platePasta.src} type="image/webp" />
								<img className={`${style.pasta} ${style.plate}`} src={platePasta.src} alt="Тарелка"/>
							</picture>
							<picture>
								<source srcSet={plateRice.src} type="image/webp" />
								<img className={`${style.rice} ${style.plate}`} src={plateRice.src} alt="Тарелка"/>
							</picture>
						</div>
					</div>
				</div>
				<div className={style.top_bottom}>
					<div className={style.holodos}>
						<img src={holodos.src} alt="Холодильник" className={style.holodos} />
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
