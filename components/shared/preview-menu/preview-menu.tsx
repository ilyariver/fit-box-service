import {FC} from 'react'
import style from './preview-menu.module.scss'

interface PreviewText {
    text: string
    img: string
    right?: string
}

const PreviewMenu: FC<PreviewText> = ({text, img, right}) => {

    return (
        <div className={style.preview_menu} style={{marginRight:right}}>
            <div className={style.preview_menu__image_wrap}>
                <img src={img} alt={text} className={style.preview_menu__image}/>
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
