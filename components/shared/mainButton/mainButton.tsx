import React, {FC} from 'react'
import style from './main-button.module.scss'

export interface TextButton {
    title: string
    width?: string
    fontSize?: string
    bottom?: string
    right?: string
}

export const MainButton: FC<TextButton> = ({title , width, fontSize, bottom, right}) => {
    return (
        <button
            style={
                {
                    width,
                    minWidth: width,
                    fontSize,
                    marginBottom: bottom,
                    marginRight: right}
            }
            className={style.button}>{title}</button>
    )
}
