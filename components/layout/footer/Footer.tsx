import style from './Footer.module.scss'
import logo from '../../../public/images/logo-footer.svg'
import Link from 'next/link'
import SocialsLinks from '../../shared/socials-links/socials-links'

const Footer = () => {
    const currentYear = new Date()
        .toLocaleDateString('ru-RU', {year: 'numeric'})
    return (
       <footer className={style.footer}>
            <div className="container">
                <div className={style.min_container}>
                    <div className={style.logo}>
                        <div className={style.logo_left}>
                            <div className={style.logo_wrap}>
                                <img src={logo.src} alt="Логотип"/>
                            </div>
                            <small className={style.copyrights}>2016-{currentYear} © Все права защищены</small>
                        </div>
                        <Link href={'tel:+78005501295'}>
                            <a className={style.tel_link}>8 (800) 550-12-95</a>
                        </Link>
                    </div>
                    <div className={style.navigation_wrap}>
                        <ul className={style.list}>
                            <li className={style.item}><Link href="/about" className={style.link}>о нас</Link></li>
                            <li className={style.item}><Link href="/contacts" className={style.link}>контакты</Link></li>
                            <li className={style.item}><Link href="/delivery" className={style.link}>доставка</Link></li>
                            <li className={style.item}><Link href="/payment" className={style.link}>оплата</Link></li>
                        </ul>
                        <div className={style.connection}>
                            <SocialsLinks />
                        </div>
                    </div>
                    <div className={style.small_text}>
                        <div className={style.small_text__left}>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://fitbox.su/politics/terms-of-use"
                                className={style.public_offer}>Публичная оферта</a>
                        </div>
                        <div className={style.small_text__right}>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="mailto:fitbox.uln@gmail.com"
                                className={`${style.public_offer} ${style.public_offer___right_top}`}>По любым вопросам пишите - fitbox.uln@gmail.com</a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://fitbox.su/politics/terms-of-use"
                                className={style.public_offer}>Наш WhatsApp/Telegram/Viber +7 937 007-77-12</a>
                        </div>
                    </div>
                </div>
            </div>
       </footer>
   )
}

export default Footer
