import Link from 'next/link'
import logo from '../../../public/images/logo.svg'
import location from '../../../public/images/icons/icon-location.svg'
import call from '../../../public/images/icons/icon-call.svg'
import style from './Header.module.scss'

const Header = () => {

    return (
       <header className={style.header}>
           <div className="container">
              <div className={style.header_content}>
                  <div className={style.header_right}>
                      <div className={style.logo}>
                          <Link href="/">
                              <a><img src={logo.src} alt="Логотип" className={style.logo_img}/></a>
                          </Link>
                      </div>
                      <div className={style.phone_number}>
                          <a className={style.phone_link} href={`tel:+79009999999`}>
                              <img src={call.src} alt="Трубка" className={style.phone_icon}/>
                              <div className={style.phone_number}>8 900 999 99 99</div>
                          </a>
                      </div>
                      <button className={style.geo}>
                          <img src={location.src} alt="Локация" className={style.geo_icon}/>
                          <div className={style.city}>Ульяновск</div>
                      </button>
                      <button className={style.callback_btn}>Заказать звонок</button>
                  </div>
                  <nav className={style.navigator}>
                      <ul className={style.navigator_list}>
                          <li className={style.navigator_item}>
                              <a href="#" className={style.navigator_link}>Рационы меню</a>
                          </li>
                          <li className={style.navigator_item}>
                              <a href="#" className={style.navigator_link}>Рационы меню</a>
                          </li>
                          <li className={style.navigator_item}>
                              <a href="#" className={style.navigator_link}>Рационы меню</a>
                          </li>
                      </ul>
                  </nav>
                  <button className={style.cart_btn}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#FF576A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#FF576A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#FF576A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </button>
              </div>
           </div>
       </header>
   )
}

export default Header
