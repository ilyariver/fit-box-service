import React, { FC } from 'react'
import style from './section-title.module.scss'

interface SectionTitleTypes {
    title: string
    color: string
    className?: string
}

const SectionTitle: FC<SectionTitleTypes> = ({title, color, className}) => {

    return (
        <div data-aos="fade-left"
            data-aos-duration="500">
            <div className="container">
                <div className={style['section-title']}>
                    <h2 className={`${style['section-title__title']} ${className}`} style={{color}}>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle
