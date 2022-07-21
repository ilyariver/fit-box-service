import {FC} from 'react'
import style from './week-days-indicator-cart.module.scss'
import { useActions } from '../../../hooks/useAction'

interface Weekday {
    title: string
    active: boolean
}

const WeekDaysIndicatorCart: FC<Weekday> = ({title, active}) => {
    const { weekdayActive } = useActions()

    const choiceWeekDay = () => weekdayActive(title)

    return (
        <div className={style['week-days-indicator-cart']}>
            <button
                onClick={choiceWeekDay}
                aria-label={title}
                className={`${style['week-days-indicator-cart__btn']} ${active && style['week-days-indicator-cart__btn--active']}`}
            >
                <div
                    className={`${style['week-days-indicator-cart__title']} ${active && style['week-days-indicator-cart__title--active']}`}
                >
                    {title}
                </div>
            </button>
        </div>
    )
}

export default WeekDaysIndicatorCart
