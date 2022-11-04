import { useState } from 'react'
import { useTypedSelector } from './useTypedSelector';
import { useActions } from './useAction';
import { AddSSNValueTypes } from '../types/mainCartModalTypes';

export const useSSNFields = () => {
    const { addSSNValuesActive } = useActions()
    const [ssnValues, setValue] = useState<AddSSNValueTypes>({
        ssn1: '',
        ssn2: '',
        ssn3: '',
        ssn4: '',
    })
    console.log(ssnValues);
    // addSSNValuesActive(ssnValues) // проблема с сохранением кода из смс

    return {
        handleChange: (e: any) => {
            const { maxLength, value, name } = e.target
            const [fieldName, fieldIndex] = name.split('-')

            if (value.length >= maxLength) {
                if (parseInt(fieldIndex, 10) < 4) {
                    const nextSibling = document.querySelector(
                        `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
                    ) as HTMLElement | null
                    if (nextSibling !== null) {
                        nextSibling.focus()
                    }
                }
            }

            setValue({
                ...value,
                [`ssn${fieldIndex}`]: value
            })
        }
    }
}
