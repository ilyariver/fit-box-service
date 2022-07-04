import {FC} from 'react'
import style from './often-questions-btn.module.scss'

interface OptionsBtn {
    title: string
    active: boolean
    right?: string
}

const OftenQuestionsBtn: FC<OptionsBtn> = ({title, active, right}) => {
    return (
        <div className={style['often-questions-btn']} style={{marginRight: right}}>
            <button
                className={`${style['often-questions-btn__button']} ${active && style['often-questions-btn__button--active']}`}>
                {title}
            </button>
        </div>
    )
}

export default OftenQuestionsBtn
