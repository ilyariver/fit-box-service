import {FC} from 'react'
import style from './week-days-indicator-cart.module.scss'

interface Weekday {
    title: string
    active: boolean
    classList?: string
    onClick: () => void
}

const WeekDaysIndicatorCart: FC<Weekday> = ({title, active, classList, onClick}) => {

    return (
        <div className={`${style['week-days-indicator-cart']} ${classList}`}>
            <button
                onClick={onClick}
                aria-label={title}
                className={`${style['week-days-indicator-cart__btn']} ${active && style['week-days-indicator-cart__btn--active']} `}
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
