import React from 'react'
import SeparatorLineComponent from '../../../separator-line-component/separator-line-component'
import ChoiceProgramComponent from '../../../choice-program-component/choice-program-component'
import BannerAdvantages from '../../../shared/banner-advantages/banner-advantages'

const ProgramSection = () => {
	return (
		<div>
			<div className="container">
				<SeparatorLineComponent title="выберите программу" bottom="56px" />
				<div style={{ marginBottom: '115px' }}>
					<ChoiceProgramComponent />
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<BannerAdvantages title="до 15 часов" text="Экономия времени в неделю на походах в магазин и приготовлении еды" />
					<BannerAdvantages title="14 дней" text="Разнообразное и вкусное меню без повторений " />
					<BannerAdvantages title="Баланс" text="Сбалансированный по БЖУ и калориям рацион" />
				</div>
			</div>
		</div>
	)
}

export default ProgramSection
