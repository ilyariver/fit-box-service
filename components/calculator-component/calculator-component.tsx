import { FC } from 'react'
import style from './calculator-component.module.scss'
import CountUp from 'react-countup';
import OptionsDayBtn from '../shared/options-day-btn/options-day-btn'
import { MainButton } from '../shared/mainButton/mainButton'
import { ProgramTypes } from '../../types/programTypes'
import { declOfNum } from '../shared/declOfNum/declOfNum'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'

interface OrderTypes {
	program: ProgramTypes
	numberDishes: number
}


const CalculatorComponent: FC<OrderTypes> = ({ program, numberDishes }) => {
	const { optionsBtns, order } = useTypedSelector(buttons => buttons.program)
	const { placeAnOrderActive } = useActions()
	console.log(useActions())
	const NUMBER_LETTERS_IN_TITLE = 6
	const controlTitleFS = program.type.title.length >= NUMBER_LETTERS_IN_TITLE

	return (
		<div className={style['calculator-component']}>
			<div className={style['calculator-component__content']}>
				<div className={style['calculator-component__wrap-info']}>
					<div className={style['calculator-component__left']}>
						<div className={`${style['calculator-component__title']} ${controlTitleFS ? style['little-title'] : ''}`} >{program.type.title}</div>
						<div className={style['calculator-component__cCal']}>{program.type.cCal} ккал</div>
					</div>
					<div className={style['calculator-component__right']}>
						<div className={style['calculator-component__description']}>{program.offer.description.text}</div>
						<div className={style['calculator-component__text']}>
							{numberDishes} { declOfNum(numberDishes, ['блюдо', 'блюда', 'блюд']) } в день за <CountUp duration={0.5} end={program.offer.description.cost}/> ₽
						</div>
						<div className={style['calculator-component__deliveryText']}>{program.offer.description.deliverDescription}</div>
					</div>
				</div>
				<div className={style['calculator-component__buttonsGroup']}>
					{
						optionsBtns.map(btn => <OptionsDayBtn
							key={btn.number}
							number={btn.number}
							active={btn.active}/>)
					}
				</div>
			</div>
			<div className={style['calculator-component__dividing-line']}> </div>
			<div className={style['calculator-component__total-wrap']}>
				<div className={style['calculator-component__total-text-wrap']}>
					<div className={style['calculator-component__total-text']}>
						{order.cost !== 0 ?
							`Итого за ${order.numberOfDays} ${declOfNum(order.numberOfDays, ['день', 'дня', 'дней'])}:` : `Итого:`}
					</div>
					<div className={style['calculator-component__total-sum']}><CountUp duration={0.5} end={order.cost}/> ₽</div>
				</div>
				<MainButton
					className={style.btn}
					onClick={() => placeAnOrderActive()}
					width="100%"
					fontSize="18px">Добавить в корзину</MainButton>
			</div>
		</div>
	)
}

export default CalculatorComponent
