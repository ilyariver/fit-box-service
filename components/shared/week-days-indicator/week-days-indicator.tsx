import {FC} from 'react'
import style from './week-days-indicator.module.scss'

interface Weekday {
    title: string
    active: boolean
}

const WeekDaysIndicator: FC<Weekday> = ({title, active}) => {
    return (
        <div className={style['weekday-indicator']}>
            <div
                className={`${style['weekday-indicator__title']} ${active && style['weekday-indicator__title--active']}`}
            >
                {title}
            </div>
            <button
                aria-label="День недели"
                className={`${style['weekday-indicator__btn']} ${active && style['weekday-indicator__btn--active']}`}
            >
            </button>
        </div>
    )
}

export default WeekDaysIndicator
