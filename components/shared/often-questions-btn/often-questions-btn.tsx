import {FC} from 'react'
import style from './often-questions-btn.module.scss'
import { FaqState } from '../../../types/faqTypes'
import { useActions } from '../../../hooks/useAction'

interface OptionsBtn {
    context: FaqState
}

const OftenQuestionsBtn: FC<OptionsBtn> = ({context}) => {
    const { faqActive } = useActions()

    return (
        <div className={style['often-questions-btn']}>
            <button
                onClick={() => faqActive(context.id)}
                className={`${style['often-questions-btn__button']} ${context.active ? style['often-questions-btn__button--active'] : ''}`}>
                {context.type}
            </button>
        </div>
    )
}

export default OftenQuestionsBtn
