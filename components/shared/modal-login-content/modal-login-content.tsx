import React, { FC, FormEvent, useState } from 'react';
import style from './modal-login-content.module.scss'
import InputText from '../input-text/input-text'
import { MainButton } from '../mainButton/mainButton'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Input from 'react-phone-number-input/input';
import InputPhone from '../input-phone/input-phone'
import { onChange } from 'input-format'

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
		getEmailActive,
		enterSMSContentActive
	} = useActions()
	const ruCode: string = '+7'
	const [phoneValidate, setPhoneValidate] = useState<boolean>(false)
	const [phone, setPhone] = useState<string>(ruCode)
	const [mail, setMail] = useState<string>('')
	const [errorMsg, setErrorMsg] = useState<string>('')
	const [mailValidate, setMailValidate] = useState<boolean>(true)


	function handleSubmit(event: any = null): void {
		event && event.preventDefault()
		const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const trueMail = validateEmail.test(mail.trim())

		if (trueMail) {
			onNextAction(mail.trim())
			setMailValidate(true)
		} else {
			setErrorMsg('Некорректная почта')
			setMailValidate(false)
		}
	}

	function onChangeInput(value: React.SetStateAction<string>) {
		setMail(value)
		if (value) {
			setMailValidate(true)
		}
	}

	function onNextAction(mail: string): void {
		getEmailActive(mail)
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
			<h2 className={style.modal_title}>вход в личный кабинет</h2>
			<div className={style.modal_text}>Введите свой E-mail, чтобы получить <br/>код на почту для входа</div>

			<form onSubmit={handleSubmit}>
				<InputText
					type={'email'}
					label={'Почта'}
					className={style.input_text}
					onChange={(e: { target: { value: React.SetStateAction<string> } }) => onChangeInput(e.target.value)}
					value={mail}
					errorMsg={errorMsg}
					validate={mailValidate}
				/>
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
