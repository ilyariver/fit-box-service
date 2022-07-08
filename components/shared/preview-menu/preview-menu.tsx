import {FC} from 'react'
import Image from 'next/image'
import style from './preview-menu.module.scss'
interface PreviewText {
    text: string
    img?: any
    right?: string
}

const PreviewMenu: FC<PreviewText> = ({text, img, right}) => {
    console.log(img)
    return (
        <div className={style.preview_menu} style={{marginRight:right}}>
            <div className={style.preview_menu__image_wrap}>
                <Image className={style.preview_menu__image} src={img} alt={text} width={208} height={171} placeholder="blur" />
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
