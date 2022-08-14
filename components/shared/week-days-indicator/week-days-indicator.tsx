import {FC} from 'react'
import style from './week-days-indicator.module.scss'
import { useActions } from '../../../hooks/useAction'

interface Weekday {
    title: string
    active: boolean
    idx: number
    onClick: () => void
}

const WeekDaysIndicator: FC<Weekday> = ({title, active, idx= 0, onClick}) => {
    const { weekdayActive } = useActions()

    return (
        <div className={style['weekday-indicator']} data-aos="fade-up" data-aos-delay={idx * 100}>
            <button
                onClick={onClick}
                aria-label={title}
                className={`${style['weekday-indicator__btn']} ${active && style['weekday-indicator__btn--active']}`}
            >
                <div
                    className={`${style['weekday-indicator__title']} ${active && style['weekday-indicator__title--active']}`}
                >
                    {title}
                </div>
            </button>
        </div>
    )
}

export default WeekDaysIndicator
