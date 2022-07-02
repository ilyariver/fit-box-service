import style from './../styles/ui-page.module.scss'
import { MainButton } from '../components/shared/mainButton/mainButton'
import PreviewMenu from '../components/shared/preview-menu/preview-menu'
import Program from '../components/shared/program/program'
import CaloriesChoiceBtn from '../components/shared/calories-choiсe-btn/calories-choiсe-btn'
import OptionsDayBtn from '../components/shared/options-day-btn/options-day-btn'
import WeekDaysIndicator from '../components/shared/week-days-indicator/week-days-indicator'
import runImgIcon from '../public/images/icons/icon-runner.png'
import personImgIcon from '../public/images/icons/icon-person.png'
import workerImgIcon from '../public/images/icons/icon-worker.png'
import sportImgIcon from '../public/images/icons/icon-sport.png'
import gymImgIcon from '../public/images/icons/icon-gym.png'
import BannerAdvantages from '../components/shared/banner-advantages/banner-advantages'

const UiPage = () => {
    const programList = [
        {title: 'Кушай на работе больше', img: workerImgIcon.src, black: false},
        {title: 'Похудей активно', img: sportImgIcon.src, black: true},
        {title: 'Не готовь весь день', img: personImgIcon.src, black: true},
        {title: 'Будь в форме', img: runImgIcon.src, black: true},
        {title: 'Набери форму', img: gymImgIcon.src, black: true},
    ]
    const cCalBtns: {title: string, cCal: number, active: boolean}[] = [
        {title: 'Офис', cCal: 250, active: true},
        {title: 'Офис+', cCal: 250, active: false},
        {title: 'Фитнес', cCal: 250, active: false},
        {title: 'Классик мини', cCal: 250, active: false},
        {title: 'Классик', cCal: 250, active: false},
        {title: 'Классик+', cCal: 250, active: false},
    ]
    const optionsBtns: {title: string, active: boolean}[] = [
        {title: 'Пробный день', active: true},
        {title: '5 дней', active: false},
        {title: '6 дней', active: false},
        {title: '7 дней', active: false},
        {title: '14 дней', active: false},
        {title: '28 дней', active: false},
    ]
    const weekDays: {title: string, active: boolean}[] = [
        {title: 'ПН', active: true},
        {title: 'ВТ', active: false},
        {title: 'СР', active: false},
        {title: 'ЧТ', active: false},
        {title: 'ПТ', active: false},
        {title: 'СБ', active: false},
        {title: 'ВС', active: false},
    ]
    const bannerAdvantagesInfo: {title: string, text: string}[] = [
        {title: 'До 15 часов', text: 'Экономия времени в неделю на походах в магазин и приготовлении еды'},
        {title: '14 дней', text: 'Разнообразное и вкусное меню без повторений '},
        {title: 'Баланс', text: 'Сбалансированный по БЖУ и калориям рацион'},
    ]

    return (
        <>
            <div className="container">
                <div className={style.header}>
                    <h1 className={style.header__title}>UI компоненты</h1>
                </div>
            </div>
            <div className={style.wrap}>
                <div className="container">
                    <MainButton title={'Выбрать меню'}/>
                </div>
            </div>
            <div className={`${style.background} ${style.background_yellow}`}>
                <div className="container">
                    <PreviewMenu text={'Омлет с куриным филе'}/>
                </div>
            </div>
            <div className={`${style.background} ${style.background_black}`}>
                <div className="container" style={{display: 'flex'}}>
                    {
                        programList.map(item =>
                            <Program key={item.title} text={item.title} img={item.img} black={item.black}/> )
                    }
                </div>
            </div>
            <div className={`${style.background} ${style.background_black}`}>
                <div className="container" style={{display: 'flex'}}>
                    {
                        cCalBtns.map(btn => <CaloriesChoiceBtn
                            key={btn.title}
                            title={btn.title}
                            cCal={btn.cCal}
                            active={btn.active}/>)
                    }
                </div>
            </div>
            <div className={`${style.background} ${style.background_black}`}>
                <div className="container" style={{display: 'flex'}}>
                    {
                        optionsBtns.map(btn => <OptionsDayBtn
                            key={btn.title}
                            title={btn.title}
                            active={btn.active}/>)
                    }
                </div>
            </div>
            <div className={`${style.background} ${style.background_black}`}>
                <div className="container" style={{display: 'flex'}}>
                    {
                        weekDays.map(btn => <WeekDaysIndicator
                            key={btn.title}
                            title={btn.title}
                            active={btn.active}/>)
                    }
                </div>
            </div>
            <div className={`${style.background} ${style.background_black}`}>
                <div
                    className="container"
                    style={{display: 'flex', justifyContent: 'space-between'}}
                >
                    {
                        bannerAdvantagesInfo.map(banner => <BannerAdvantages
                            key={banner.title}
                            title={banner.title}
                            text={banner.text}
                        />)
                    }
                </div>
            </div>
            <div className={`${style.background} ${style.background_yellow}`}>
                <div className="container">
                    <PreviewMenu text={'Омлет с куриным филе'}/>
                </div>
            </div>
        </>
    )
}

export default UiPage
