import Link from 'next/link'
import logo from '../../public/images/logo.svg'
import style from './Header.module.scss'
import {MainButton} from "../shared/mainButton/mainButton";

export const Header = () => {

    return (
       <header>
           <Link href="/">
               <a><img src={logo.src} alt="" className={style.logo_img}/></a>
           </Link>
           <MainButton title="Выбрать меню"/>
       </header>
   )
}
