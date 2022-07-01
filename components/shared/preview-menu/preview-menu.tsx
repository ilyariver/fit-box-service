import {FC} from 'react'
import style from './preview-menu.module.scss'
import plat from '../../../public/plate@x1.png'

interface PreviewText {
    text: string
}

const PreviewMenu: FC<PreviewText> = ({text= 'Омлет с куриным филе'}) => {

    return (
        <div className={style.preview_menu}>
            <div className={style.preview_menu__image_wrap}>
                <img src={plat.src} alt={text} className={style.preview_menu__image}/>
            </div>
            <div className={style.preview_menu__text_wrap}>
                <span className={style.preview_menu__text}>
                    {text}
                </span>
            </div>
        </div>
    )
}

export default PreviewMenu
