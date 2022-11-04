import React, { FC, FormEvent, useState } from 'react';
import style from './modal-login-content.module.scss'
import InputText from '../input-text/input-text'
import { MainButton } from '../mainButton/mainButton'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Input from 'react-phone-number-input/input';

const ModalLoginContent: FC = () => {
	const {
		activeLoginContent,
		activeDialogModal,
		getNumberPhone,
		activeEnterSMSContent
	} = useTypedSelector(modal => modal.dialogModals)
	const {
		loginContentActive,
		dialogModalsActive,
		getPhoneNumberActive,
		enterSMSContentActive
	} = useActions()
	const ruCode: string = '+7'
	const [phoneValidate, setPhoneValidate] = useState<boolean>(false)
	const [phone, setPhone] = useState<string>(ruCode)

	function handleSubmit(event: any = null): void {
		event && event.preventDefault()

		const data = {
			phone,
		}

		if (data.phone.length <= 12 && 12 < data.phone.length) {
			setPhoneValidate(true)
		} else {
			setPhoneValidate(false)
			setPhone(ruCode)
			getPhoneNumberActive(data.phone)
			onNextAction(data.phone)
		}
	}

	function onNextAction(phoneNumber: string) {
		if (!phoneNumber) return
		loginContentActive(!activeLoginContent)
		enterSMSContentActive(!activeEnterSMSContent)
	}

	return (
		<div>
			<button
				className={style.close_modal}
				onClick={() => {
					loginContentActive(!activeLoginContent);
					dialogModalsActive(!activeDialogModal);
				}}
			/>
			<h2 className={style.modal_title}>вход в личный кабинет </h2>
			<div className={style.modal_text}>Введите номер, чтобы получить SMS<br/>с кодом для входа</div>

			<form onSubmit={handleSubmit}>
				<div className={style['input-text__area']}>
					<label
						htmlFor="Телефон"
						className={`${style['input-text__label']} ${phone ? style['active'] : ''}`}
					>
						Телефон
					</label>
					<Input
						id="Телефон"
						className={`${style['input-text__input']} ${phoneValidate ? style['error_input'] : ''}`}
						minLength="16"
						maxLength="16"
						required
						country="RU"
						international
						withCountryCallingCode
						value={phone}
						onChange={(value: string) => {
							setPhone(value ? value : '+7')
							setPhoneValidate(false)
						}}
					/>
					{phoneValidate && <div className={style.error}>Введён некорректный номер</div>}
				</div>
				<MainButton
					className={style.main_btn_order}
					onClick={() => handleSubmit()}
				>Продолжить</MainButton>
			</form>

			<div className={style.offer}>
				<Link href={'/'}>
					<a download>Нажимая кнопку «Продолжить», вы соглашаетесь<br/>с условиями оферты и
						политикой<br/>конфиденциальности.</a>
				</Link>
			</div>
		</div>
	);
}

export default ModalLoginContent
