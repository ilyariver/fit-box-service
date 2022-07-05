import React from 'react'
import AboutServiceComponent from '../../../about-service-component/about-service-component'
import style from './service-section.module.scss'
import { state } from '../../../../pages/mockDate'
import plateSalad from '../../../../public/images/plate-salad.png'
import platePasta from '../../../../public/images/plate-pasta.png'
import plateRice from '../../../../public/images/plate-riсe.png'
import holodos from '../../../../public/images/holodos.png'

const ServiceSection = () => {
	return (
		<div>
			<div className="container">
				<div className={style.top_content}>
					<div className={style.service}>
						<AboutServiceComponent title={state.aboutService.title} description={state.aboutService.text} />
						<div className={style.plates}>
							<img className={`${style.salad} ${style.plate}`} src={plateSalad.src} alt="Таредлка"/>
							<img className={`${style.pasta} ${style.plate}`} src={platePasta.src} alt="Таредлка"/>
							<img className={`${style.rice} ${style.plate}`} src={plateRice.src} alt="Таредлка"/>
						</div>
					</div>
				</div>
				<div className={style.top_bottom}>
					<div className={style.holodos}>
						<img src={holodos.src} alt="Холодильник" className={style.holodos}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceSection
