import {FC} from 'react'
import style from './week-days-indicator.module.scss'
import { useActions } from '../../../hooks/useAction'

interface Weekday {
    title: string
    active: boolean
}

const WeekDaysIndicator: FC<Weekday> = ({title, active}) => {
    const { weekdayActive } = useActions()

    const choiceWeekDay = () => weekdayActive(title)

    return (
        <div className={style['weekday-indicator']}>
            <button
                onClick={choiceWeekDay}
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
