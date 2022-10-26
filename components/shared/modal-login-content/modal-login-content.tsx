import React, { FC, FormEvent } from 'react'
import style from './modal-login-content.module.scss'
import InputText from '../../calculator-component/input-text/input-text'
import { MainButton } from '../mainButton/mainButton'
import Link from 'next/link'

const ModalLoginContent: FC = () => {
	return (
		<form onSubmit={handleSubmit}>
			<h2 className={style.modal_title}>вход в личный кабинет </h2>
			<div className={style.modal_text}>Введите номер, чтобы получить SMS<br />с кодом для входа</div>
			<InputText className={style.modal_input} label={'Телефон'} typePhone={true} />
			<MainButton  className={style.main_btn_order} fontSize="18px" >Продолжить</MainButton>
			<div className={style.offer}>
				<Link href={'/'}>
					<a download>Нажимая кнопку «Продолжить», вы соглашаетесь<br />с условиями оферты и
						политикой<br />конфиденциальности.</a>
				</Link>
			</div>
		</form>
	)
}

export default ModalLoginContent
