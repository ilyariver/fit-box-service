import React from 'react'
import SectionTitle from '../../../shared/section-title/section-title'
import { state } from '../../../../pages/mockDate'
import HowToWorks from '../../../shared/how-to-works/how-to-works'

const AnswersSection = () => {
	return (
		<div>
			<SectionTitle title="Как мы работаем?" color="#2C2B2B" bottom="56px" />
			<div className="container" style={{marginBottom: '120px'}}>
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					{
						state.howToWorkInfo.map(banner =>
							<HowToWorks key={banner.title} title={banner.title} text={banner.text} img={banner.img} />)
					}
				</div>
			</div>
		</div>
	)
}

export default AnswersSection
