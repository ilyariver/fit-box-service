import React, { FC, FormEvent, useState } from 'react';
import style from './modal-order-call-content.module.scss'
import InputText from '../input-text/input-text'
import { MainButton } from '../mainButton/mainButton'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Input from 'react-phone-number-input/input';
import InputPhone from '../input-phone/input-phone'
import { onChange } from 'input-format'

const ModalOrderCallContent: FC = () => {
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
	const [text, setText] = useState<string>('')


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
			<h2 className={style.modal_title}>перезвоните мне</h2>

			<form onSubmit={handleSubmit}>
				<InputText
					value={text}
					label="Введите имя"
					validate={true}
					className={style.modal_text}
					onChange={(e: any) => setText(e.target.value)}
				/>
				<InputPhone className={style.modal_input_phone}/>
				<MainButton
					className={style.main_btn_order}
					onClick={() => handleSubmit()}
				>Отправить</MainButton>
			</form>
		</div>
	);
}

export default ModalOrderCallContent
