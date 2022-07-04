import {FC} from 'react'
import style from './order-component.module.scss'
import OptionsDayBtn from '../shared/options-day-btn/options-day-btn'
import { OrderTypes } from './order-types'
import { MainButton } from '../shared/mainButton/mainButton'

const OrderComponent: FC<OrderTypes> = (content) => {
	console.log(content)
	return (
		<div className={style['order-component']}>
			<div className={style['order-component__content']}>
				<div className={style['order-component__wrap-info']}>
					<div className={style['order-component__left']}>
						<div className={style['order-component__title']}>{content.title}</div>
						<div className={style['order-component__cCal']}>{content.cCal} ккал</div>
					</div>
					<div className={style['order-component__right']}>
						<div className={style['order-component__description']}>{content.description}</div>
						<div className={style['order-component__text']}>{content.text}</div>
						<div className={style['order-component__deliveryText']}>{content.deliveryDescription}</div>
					</div>
				</div>
				<div className={style['order-component__buttonsGroup']}>
					{
						content.buttonsGroup.map(btn => <OptionsDayBtn
							key={btn.title}
							title={btn.title}
							active={btn.active}/>)
					}
				</div>
			</div>
			<div className={style['order-component__dividing-line']}></div>
			<div className={style['order-component__total-wrap']}>
				<div className={style['order-component__total-text-wrap']}>
					<div className={style['order-component__total-text']}>Итого за 1 день:</div>
					<div className={style['order-component__total-sum']}>{content.totalSum} ₽</div>
				</div>
				<MainButton title="Оформить заказ" width="100%" fontSize="18px"/>
			</div>
		</div>
	)
}

export default OrderComponent
