import React from 'react'
import style from './../styles/ui-page.module.scss'
import { MainButton } from '../components/shared/mainButton/mainButton'
import PreviewMenu from '../components/shared/preview-menu/preview-menu'
import Program from '../components/shared/program/program'
import CaloriesChoiceBtn from '../components/shared/calories-choiсe-btn/calories-choiсe-btn'
import OptionsDayBt from '../components/shared/options-day-btn/options-day-btn'
import WeekDaysIndicator from '../components/shared/week-days-indicator/week-days-indicator'
import BannerAdvantages from '../components/shared/banner-advantages/banner-advantages'
import HowToWorks from '../components/shared/how-to-works/how-to-works'
import OrderComponent from '../components/order-component/order-component'
import plat from '../public/images/plate@x1.png'
import { state } from './mockDate'
import OptionsDayBtn from '../components/shared/options-day-btn/options-day-btn'
import ChoiceProgramComponent from '../components/choice-program-component/choice-program-component'
import HintComponent from '../components/hint-component/hint-component'
import FeedbackComponent from '../components/feedback-component/feedback-component'
import AboutServiceComponent from '../components/about-service-component/about-service-component'
import AddressServiceComponent from '../components/address-service-component/address-service-component'
import SeparatorLineComponent from '../components/separator-line-component/separator-line-component'
import Link from 'next/link'
import SectionTitle from '../components/shared/section-title/section-title'

const UiPage = () => {
    const blockStyle: React.CSSProperties = {
        position: 'relative',
        display: 'flex',
        marginBottom: '80px',
        zIndex: 0
    }

    return (
        <>
            <Link href={'/'}>
                <a className={style.back}>НАЗАД</a>
            </Link>
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
                    <SectionTitle title="Заголовок для секций сайта" color="#2C2B2B" bottom="30px" />
                    <div style={blockStyle}>
                        <PreviewMenu text={'Омлет с куриным филе'} img={plat.src}/>
                    </div>
                    <div style={blockStyle}>
                        <HintComponent text="Тому, кто хочет похудеть"/>
                        <HintComponent text="Тому, кому нужно увеличить массу тела"/>
                        <HintComponent text="Тому, кому нужно увеличить массу тела"/>
                    </div>
                    <div style={blockStyle}>
                        <div style={{marginRight: '50px'}}>
                            <AboutServiceComponent title={state.aboutService.title} description={state.aboutService.text} />
                        </div>
                        <AddressServiceComponent {...state.addressService} />
                    </div>
                </div>
            </div>
            <div className={`${style.background} ${style.background_black}`}>
                <div className="container">
                    <div style={blockStyle}>
                        {
                            state.programList.map(item =>
                              <Program key={item.title} text={item.title} img={item.img} black={item.black}/> )
                        }
                    </div>
                    <div style={blockStyle}>
                        {
                            state.cCalBtns.map(btn => <CaloriesChoiceBtn
                              key={btn.title}
                              title={btn.title}
                              cCal={btn.cCal}
                              active={btn.active}/>)
                        }
                    </div>
                    <div style={blockStyle}>
                        {
                            state.optionsBtns.map(btn => <OptionsDayBtn
                              key={btn.title}
                              title={btn.title}
                              active={btn.active}/>)
                        }
                    </div>
                    <div style={blockStyle}>
                        {
                            state.weekDays.map(btn => <WeekDaysIndicator
                              key={btn.title}
                              title={btn.title}
                              active={btn.active}/>)
                        }
                    </div>
                    <div style={{...blockStyle, justifyContent: 'space-between'}}>
                        {
                            state.bannerAdvantagesInfo.map(banner => <BannerAdvantages
                              key={banner.title}
                              title={banner.title}
                              text={banner.text}
                            />)
                        }
                    </div>
                    <div style={{...blockStyle, justifyContent: 'space-between'}}>
                        {
                            state.howToWorkInfo.map(info => <HowToWorks
                              key={info.title}
                              title={info.title}
                              text={info.text}
                              img={info.img}
                            />)
                        }
                    </div>
                    <div style={blockStyle}>
                        <ChoiceProgramComponent />
                    </div>
                    <div style={{...blockStyle, justifyContent: 'space-between'}}>
                        {
                            state.feedbackPeople.map(person => <FeedbackComponent
                                key={person.name}
                                img={person.img}
                                name={person.name}
                                comment={person.comment}
                            />)
                        }
                    </div>
                    <div style={{marginBottom: '30px'}}>
                        <SeparatorLineComponent title="выберите цель" />
                    </div>
                    <SectionTitle title="Кому подойдет питание" color="#fff" bottom="30px" />
                </div>
            </div>
        </>
    )
}

export default UiPage
