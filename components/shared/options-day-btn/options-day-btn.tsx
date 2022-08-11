import {FC} from 'react'
import style from './options-day-btn.module.scss'
import { OptionsBtns } from '../../../types/programTypes'

interface OptionsBtnsInterface {
    types: OptionsBtns
    className?: string
    onClick?: () => any
}

const OptionsDayBtn: FC<OptionsBtnsInterface> = ({types, className, onClick}) => {

    return (
        <div className={`${style['options-day-btn']} ${className}`}>
            <button
                onClick={onClick}
                className={`${style['options-day-btn__button']} ${types.active && style['options-day-btn__button--active']}`}
            >
                {types.number === 1 ? 'Пробный день' : `${types.number} дней`}
            </button>
        </div>
    )
}

export default OptionsDayBtn
