import {FC} from 'react'
import style from './banner-advantages.module.scss'

interface Advantages {
    title: string
    text: string
    idx: number
}

const BannerAdvantages: FC<Advantages> = ({title, text}) => {
    return (
        <div className={style['banner-advantages']}>
            <div className={style['banner-advantages__wrap']}>
                <h3 className={style['banner-advantages__title']}>{title}</h3>
                <p className={style['banner-advantages__text']}>{text}</p>
            </div>
        </div>
    )
}

export default BannerAdvantages
