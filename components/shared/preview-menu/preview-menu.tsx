import {FC} from 'react'
import Image from 'next/image'
import style from './preview-menu.module.scss'
interface PreviewText {
    text: string
    img?: any
}

const PreviewMenu: FC<PreviewText> = ({text, img}) => {

    return (
        <div className={style.preview_menu}>
            <div className={style.preview_menu__image_wrap}>
                <img className={style.preview_menu__image} src={img} alt={text} />
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
