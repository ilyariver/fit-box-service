import React from 'react'
import SectionTitle from '../../../shared/section-title/section-title'
import { state } from '../../../../mockDate'
import HowToWorks from '../../../shared/how-to-works/how-to-works'
import style from './answers-section.module.scss'

const AnswersSection = () => {
	return (
		<div className={style.answer_section}>
			<div className={style.section_title}>
				<SectionTitle className={style.title} title="Как мы работаем?" color="#2C2B2B"/>
			</div>
			<div className="container">
				<div className={style.content}>
					<div className={style.wrap}>
						{
							state.howToWorkInfo.map(banner =>
								<HowToWorks key={banner.title} title={banner.title} text={banner.text} img={banner.img} />)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AnswersSection
