import React, {FC} from 'react'
import style from './main-button.module.scss'

export interface TextButton {
    title?: string
    width?: string
}

export const MainButton: FC<TextButton> = ({title = 'Кнопка', width}: TextButton) => {
    return (
        <button style={{width}} className={style.button}>{title}</button>
    )
}
