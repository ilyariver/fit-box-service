import React, {FC} from 'react'
import style from './main-button.module.scss'

export interface TextButton {
    onClick?: () => void,
    children: React.ReactNode
    width?: string
    fontSize?: string
    bottom?: string
    right?: string
    pink?: boolean
    className?: string
}

export const MainButton: FC<TextButton> = (
    {
        onClick,
        children ,
        width,
        fontSize,
        bottom,
        right,
        pink = true,
        className
    }
    ) => {
    return (
        <button
            onClick={onClick}
            style={
                {
                    width,
                    fontSize,
                    marginBottom: bottom,
                    marginRight: right
                }
            }

            className={`${style.button} ${pink ? style.pink : ''} ${className}`}
        >
            { children }
        </button>
    )
}
