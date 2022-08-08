import React, { FC, useEffect } from 'react'
import style from './section-title.module.scss'
import Aos from 'aos'

interface SectionTitleTypes {
    title: string
    color: string
    className?: string
}

const SectionTitle: FC<SectionTitleTypes> = ({title, color, className}) => {
    useEffect(() => {
        Aos.init({
            disable: false,
        })
    }, [])

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
