import React, { FC, FormEvent, useEffect, useState } from 'react';
import style from './modal-enter-sms-content.module.scss'
import InputText from '../input-text/input-text'
import { MainButton } from '../mainButton/mainButton'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Input from 'react-phone-number-input/input';
import { useSSNFields } from '../../../hooks/useSSNFields';
import { formatPhoneNumber } from '../../../common/helper';


const ModalEnterSmsContent: FC = () => {
	useEffect(() => {
		sendCodeRepeatActive(false)
	}, [])
	const {
		activeEnterSMSContent,
		activeDialogModal,
		activeLoginContent,
		getNumberPhone,
		sendCodeRepeat,
	} = useTypedSelector(modal => modal.dialogModals)
	const {
		enterSMSContentActive,
		dialogModalsActive,
		loginContentActive,
		sendCodeRepeatActive,
	} = useActions()
	const { handleChange } = useSSNFields()

	return (
		<div>
			<button
				className={style.close_modal}
				onClick={() => {
					enterSMSContentActive(!activeEnterSMSContent);
					dialogModalsActive(!activeDialogModal);
				}}
			/>
			<div className={style.content}>
				<h2 className={style.modal_title}>Код из sms</h2>
				<div className={style.modal_text}>
					Мы {sendCodeRepeat ?
					<span style={{color: '#FF576A'}}>снова</span>
					: ''} отправили его на номер {formatPhoneNumber(getNumberPhone)}
				</div>
				<button
					onClick={() => {
						loginContentActive(!activeLoginContent)
						enterSMSContentActive(!activeEnterSMSContent)
					}}
					className={style.edit_number}>Исправить номер</button>
				<div className={style.code_inputs_group}>
					<input
						name="ssn-1"
						type="text"
						className={style.code_input}
						maxLength={1}
						onChange={handleChange}
					/>
					<input
						name="ssn-2"
						type="text"
						className={style.code_input}
						maxLength={1}
						onChange={handleChange}
					/>
					<input
						name="ssn-3"
						type="text"
						className={style.code_input}
						maxLength={1}
						onChange={handleChange}
					/>
					<input
						name="ssn-4"
						type="text"
						className={style.code_input}
						maxLength={1}
						onChange={handleChange}
					/>
				</div>
				<button
					onClick={() => {
						sendCodeRepeatActive(true)
					}}
					className={style.repeat_send}>Выслать код повторно</button>
			</div>
		</div>
	);
}

export default ModalEnterSmsContent
