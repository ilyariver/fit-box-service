import {FC} from 'react'
import style from './section-title.module.scss'

interface SectionTitleTypes {
    title: string
    color: string
    bottom: string
}

const SectionTitle: FC<SectionTitleTypes> = ({title, color, bottom}) => {
    return (
        <div className={style['section-title']} style={{marginBottom: bottom}}>
           <h2 className={style['section-title__title']} style={{color}}>{title}</h2>
        </div>
    )
}

export default SectionTitle
