import {FC} from 'react'
import style from './options-day-btn.module.scss'
import { OptionsBtn } from './options-btn'

const OptionsDayBtn: FC<OptionsBtn> = ({title, active}) => {
    return (
        <div className={style['options-day-btn']}>
            <button
                className={`${style['options-day-btn__button']} ${active && style['options-day-btn__button--active']}`}>
                {title}
            </button>
        </div>
    )
}

export default OptionsDayBtn