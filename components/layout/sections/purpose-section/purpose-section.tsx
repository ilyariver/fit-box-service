import React from 'react'
import style from './purpose-section.module.scss'
import SeparatorLineComponent from '../../../separator-line-component/separator-line-component'
import Program from '../../../shared/program/program'
import { MainButton } from '../../../shared/mainButton/mainButton'
import { state } from '../../../../pages/mockDate'

const PurposeSection = () => {
	return (
		<div className={style.purpose_wrap}>
			<div className="container">
				<SeparatorLineComponent title="выберите цель" bottom="70px" />
				<div className={style.purpose}>
					<div className={style.left}>
						<div className={style.title}>Кушай на работе</div>
						<div className={style.text}>Пятиразовое питание на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни</div>
						<MainButton title="Выбрать программу" width="230px" />
					</div>
					<div className={style.buttons}>
						{
							state.programList.map(item =>
								<Program key={item.title} text={item.title} img={item.img} black={item.black} right="30px" />)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PurposeSection
