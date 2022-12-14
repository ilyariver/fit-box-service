import Image from 'next/image'
import style from './Footer.module.scss'
import logo from '../../../public/images/logo-footer.svg'
import Link from 'next/link'

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
                                <Image src={logo} alt="Логотип"/>
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
                            <li className={style.item}><Link href="#" className={style.link}>оплата</Link></li>
                        </ul>
                        <div className={style.connection}>
                            <div className={style.form}>
                                <div className={style.input_content}>
                                    <label htmlFor="email" className={style.label}>связаться с нами</label>
                                    <input id="email" type="text" className={style.input} placeholder="email"/>
                                </div>
                                <button className={style.button}>Отправить</button>
                            </div>
                            <div className={style.socials}>
                                <a href="#" target="_blank" className={style.socials_item} aria-label="Телеграм">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM19.6 35L20.0083 28.8823L20.008 28.882L31.1369 18.839C31.6253 18.4055 31.0303 18.1941 30.3819 18.5873L16.6473 27.2523L10.7147 25.4007C9.4335 25.0084 9.4243 24.128 11.0023 23.4951L34.1203 14.5809C35.1762 14.1015 36.1953 14.8345 35.7922 16.4505L31.8552 35.0031C31.5803 36.3215 30.7837 36.6368 29.68 36.0278L23.6827 31.5969L20.8 34.4C20.7909 34.4088 20.7819 34.4176 20.7729 34.4264C20.4505 34.7403 20.1837 35 19.6 35Z" fill="white"/>
                                    </svg>
                                </a>
                                <a href="#" target="_blank" className={style.socials_item} aria-label="Ютуб">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM34.0016 15.7493C35.1031 16.0516 35.9706 16.9422 36.265 18.0732C36.8 20.123 36.8 24.4 36.8 24.4C36.8 24.4 36.8 28.6768 36.265 30.7268C35.9706 31.8578 35.1031 32.7484 34.0016 33.0508C32.0054 33.6 24 33.6 24 33.6C24 33.6 15.9946 33.6 13.9983 33.0508C12.8967 32.7484 12.0292 31.8578 11.7348 30.7268C11.2 28.6768 11.2 24.4 11.2 24.4C11.2 24.4 11.2 20.123 11.7348 18.0732C12.0292 16.9422 12.8967 16.0516 13.9983 15.7493C15.9946 15.2 24 15.2 24 15.2C24 15.2 32.0054 15.2 34.0016 15.7493Z" fill="white"/>
                                        <path d="M21.6001 28.8V20.8L28.0001 24.8002L21.6001 28.8Z" fill="white"/>
                                    </svg>
                                </a>
                                <a href="#" target="_blank" className={style.socials_item} aria-label="Ватсап">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM39.0621 23.0815C39.059 30.9483 32.6595 37.3493 24.7911 37.3525H24.7852C22.3967 37.3517 20.0498 36.7524 17.9653 35.6155L10.4 37.6L12.4246 30.2048C11.1757 28.0405 10.5186 25.5855 10.5196 23.0702C10.5228 15.2017 16.9248 8.8 24.7909 8.8C28.6086 8.80165 32.1918 10.2879 34.8862 12.9854C37.5806 15.6828 39.0637 19.2683 39.0621 23.0815Z" fill="white"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.8265 34.2096L18.3159 33.0319L18.749 33.289C20.5702 34.3697 22.6578 34.9415 24.7863 34.9424H24.7911C31.3289 34.9424 36.6499 29.6212 36.6526 23.0807C36.6538 19.9112 35.4212 16.9311 33.1817 14.689C30.9422 12.4469 27.964 11.2115 24.7958 11.2104C18.2529 11.2104 12.9318 16.5311 12.9292 23.0711C12.9283 25.3124 13.5554 27.4951 14.7428 29.3836L15.0248 29.8324L13.8265 34.2096ZM31.4924 26.1541C31.7411 26.2743 31.9091 26.3554 31.9808 26.4751C32.0699 26.6238 32.0699 27.3378 31.7729 28.1709C31.4756 29.0038 30.0511 29.764 29.3659 29.8663C28.7516 29.9582 27.9742 29.9965 27.12 29.725C26.602 29.5607 25.9379 29.3413 25.0871 28.9739C21.7442 27.5304 19.4851 24.2904 19.0581 23.678C19.0282 23.6351 19.0072 23.6051 18.9956 23.5896L18.9927 23.5857C18.804 23.3339 17.5395 21.6468 17.5395 19.9008C17.5395 18.2583 18.3464 17.3973 18.7178 17.001C18.7432 16.9739 18.7666 16.9489 18.7876 16.926C19.1144 16.569 19.5008 16.4798 19.7385 16.4798C19.9762 16.4798 20.2141 16.482 20.4219 16.4924C20.4475 16.4937 20.4742 16.4935 20.5018 16.4934C20.7096 16.4921 20.9686 16.4906 21.2242 17.1045C21.3225 17.3408 21.4664 17.691 21.6181 18.0603C21.9249 18.8074 22.264 19.6328 22.3236 19.7522C22.4128 19.9307 22.4722 20.1389 22.3534 20.377C22.3355 20.4127 22.319 20.4464 22.3032 20.4785C22.214 20.6608 22.1483 20.7949 21.9968 20.9718C21.9372 21.0414 21.8756 21.1164 21.814 21.1913C21.6914 21.3407 21.5687 21.4901 21.4619 21.5965C21.2834 21.7743 21.0975 21.9673 21.3055 22.3243C21.5135 22.6813 22.2292 23.8489 23.2893 24.7945C24.4288 25.8109 25.4192 26.2405 25.9212 26.4583C26.0192 26.5008 26.0986 26.5352 26.1569 26.5644C26.5133 26.7429 26.7214 26.7131 26.9294 26.4751C27.1374 26.2372 27.8208 25.4339 28.0585 25.0769C28.2961 24.7201 28.534 24.7795 28.8608 24.8985C29.1877 25.0176 30.9408 25.8801 31.2974 26.0586C31.367 26.0935 31.4321 26.1249 31.4924 26.1541Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className={style.public_offer}>Публичная оферта</a>
                </div>
            </div>
       </footer>
   )
}

export default Footer
