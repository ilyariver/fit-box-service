import {FC} from 'react'
import style from './options-day-btn.module.scss'
import { OptionsBtns } from '../../../types/programTypes'
import { useActions } from '../../../hooks/useAction'

const OptionsDayBtn: FC<OptionsBtns> = ({number, active}) => {
    const { numberOfDaysActive } = useActions()

    return (
        <div className={style['options-day-btn']}>
            <button
                onClick={() => numberOfDaysActive(number)}
                className={`${style['options-day-btn__button']} ${active && style['options-day-btn__button--active']}`}
            >
                {number === 1 ? 'Пробный день' : `${number} дней`}
            </button>
        </div>
    )
}

export default OptionsDayBtn
