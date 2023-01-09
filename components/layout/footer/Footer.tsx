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
                            <div className={style.form}>
                                <div className={style.input_content}>
                                    <label htmlFor="email" className={style.label}>связаться с нами</label>
                                    <input id="email" type="text" className={style.input} placeholder="email"/>
                                </div>
                                <button className={style.button}>Отправить</button>
                            </div>
                            <SocialsLinks />
                        </div>
                    </div>
                    <a target="_blank" rel="noreferrer" href="https://fitbox.su/politics/terms-of-use" className={style.public_offer}>Публичная оферта</a>
                </div>
            </div>
       </footer>
   )
}

export default Footer
