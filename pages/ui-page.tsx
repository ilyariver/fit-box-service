import style from './../styles/ui-page.module.scss'
import { MainButton } from '../components/shared/mainButton/mainButton'
import PreviewMenu from '../components/shared/preview-menu/preview-menu'
import Program from '../components/shared/program/program'
import runImgIcon from '../public/images/icons/icon-runner.png'
import personImgIcon from '../public/images/icons/icon-person.png'
import workerImgIcon from '../public/images/icons/icon-worker.png'
import sportImgIcon from '../public/images/icons/icon-sport.png'
import gymImgIcon from '../public/images/icons/icon-gym.png'

const UiPage = () => {
    const programList = [
        {title: 'Кушай на работе больше', img: workerImgIcon.src, black: false},
        {title: 'Похудей актвино', img: sportImgIcon.src, black: true},
        {title: 'Не готовь весь день', img: personImgIcon.src, black: true},
        {title: 'Будь в форме', img: runImgIcon.src, black: true},
        {title: 'Набери форму', img: gymImgIcon.src, black: true},
    ]

    return (
        <div className="container">
            <div className={style.header}>
                <h1 className={style.header__title}>UI компоненты</h1>
            </div>
            <div className={style.wrap}>
                <MainButton title={'Выбрать меню'}/>
            </div>
            <div className={`${style.background} ${style.background_yellow}`}>
                <PreviewMenu text={'Омлет с куриным филе'}/>
            </div>
            <div style={{display: 'flex'}} className={`${style.background} ${style.background_black}`}>
                {
                    programList.map(item =>
                        <Program key={item.title} text={item.title} img={item.img} black={item.black}/> )
                }
            </div>
        </div>
    )
}

export default UiPage
