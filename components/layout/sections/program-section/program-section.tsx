import React from 'react'
import SeparatorLineComponent from '../../../separator-line-component/separator-line-component'
import ChoiceProgramComponent from '../../../choice-program-component/choice-program-component'
import BannerAdvantages from '../../../shared/banner-advantages/banner-advantages'
import style from './program-section.module.scss'
import { state } from '../../../../mockDate'

const ProgramSection = () => {
	return (
		<div className={style.program_section} id="section-lunch">
			<div className="container">
				<SeparatorLineComponent className={style.separate} title="выберите программу"/>
				<div className={style.choice} style={{ marginBottom: '115px' }}>
					<ChoiceProgramComponent />
				</div>
				<div className={style.tiles}>
					{
						state.bannerAdvantagesInfo.map((item, idx) => {
							return <BannerAdvantages key={item.title} title={item.title} text={item.text} idx={idx}/>
						})
					}
				</div>
			</div>
		</div>
	)
}

export default ProgramSection
