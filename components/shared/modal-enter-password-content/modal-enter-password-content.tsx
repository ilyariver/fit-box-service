import React, { FC, useState } from 'react'
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import style from './modal-enter-password-content.module.scss'
import InputText from '../input-text/input-text'
import { MainButton } from '../mainButton/mainButton'
import { useRouter } from 'next/router'


const ModalEnterPasswordContent: FC = () => {
	const router = useRouter()
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
	const [password, setPassword] = useState<string>('')
	const [errorEmailMsg, setErrorEmailMsg] = useState<string>('')
	const [errorPasswordMsg, setErrorPasswordMsg] = useState<string>('')
	const [mailValidate, setMailValidate] = useState<boolean>(true)
	const [mailPass, setPassValidate] = useState<boolean>(true)


	function handleSubmit(event: any = null): void {
		event && event.preventDefault()
		const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const trueMail = validateEmail.test(mail.trim())

		if (trueMail) {
			setMailValidate(true)
		} else {
			setErrorEmailMsg('Пользователь не зарегистрирован')
			setMailValidate(false)
		}

		if (password.trim().length > 3) {
			setPassValidate(true)

			if (mailPass && mailValidate) {
				onNextAction(true)
			} else {
				setErrorPasswordMsg('Не верный логин либо пароль')
			}
		} else {
			setPassValidate(false)
		}
	}

	function onChangeInput(value: React.SetStateAction<string>) {
		setMail(value)
		if (value) {
			setMailValidate(true)
		}
	}

	function onChangePassword(value: React.SetStateAction<string>) {
		setPassword(value)
		if (value) {
			setPassValidate(true)
		}
	}

	function onNextAction(access: boolean): void {
		if (access) {
			router.push('/profile')
		}
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

			<form onSubmit={handleSubmit}>
				<InputText
					type={'email'}
					label={'Почта'}
					className={style.input_text}
					onChange={(e: { target: { value: React.SetStateAction<string> } }) => onChangeInput(e.target.value)}
					value={mail}
					errorMsg={errorEmailMsg}
					validate={mailValidate}
				/>
				<InputText
					type={'password'}
					label={'Пароль'}
					className={style.input_password}
					onChange={(e: { target: { value: React.SetStateAction<string> } }) => onChangePassword(e.target.value)}
					value={password}
					errorMsg={errorPasswordMsg}
					validate={mailValidate}
				/>
				<MainButton
					className={style.main_btn_order}
					onClick={() => handleSubmit()}
				>Войти</MainButton>
			</form>

			<div className={style.password_recovery}>
				забыли пароль?
			</div>
		</div>
	)
}

export default ModalEnterPasswordContent
