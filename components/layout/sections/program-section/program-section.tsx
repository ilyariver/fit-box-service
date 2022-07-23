import React from 'react'
import SeparatorLineComponent from '../../../separator-line-component/separator-line-component'
import ChoiceProgramComponent from '../../../choice-program-component/choice-program-component'
import BannerAdvantages from '../../../shared/banner-advantages/banner-advantages'
import style from './program-section.module.scss'

const ProgramSection = () => {
	return (
		<div className={style.program_section}>
			<div className="container">
				<SeparatorLineComponent className={style.separate} title="выберите программу"/>
				<div className={style.choice} style={{ marginBottom: '115px' }}>
					<ChoiceProgramComponent />
				</div>
				<div className={style.tiles}>
					<BannerAdvantages title="до 15 часов" text="Экономия времени в неделю на походах в магазин и приготовлении еды" />
					<BannerAdvantages title="14 дней" text="Разнообразное и вкусное меню без повторений " />
					<BannerAdvantages title="Баланс" text="Сбалансированный по БЖУ и калориям рацион" />
				</div>
			</div>
		</div>
	)
}

export default ProgramSection
