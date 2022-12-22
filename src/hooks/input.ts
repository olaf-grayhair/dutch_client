
import { useEffect, useState } from "react"

export const useValidation = (validation: string, value: string) => {
    const [wordError, setWordError] = useState<boolean>(false)
    const [minLength, setMinLength] = useState<boolean>(false)

    // console.log(value, 'input', validation);
    
    useEffect(() => {
        switch (validation) {
            
            case 'letters':
                const re = /^[a-zA-Z]+$/;
    
                setWordError(re.test(String(value).toLowerCase()))

                value.length > 2 
                ? setMinLength(false) 
                : setMinLength(true)

                break
            case 'minLength':
                value.length > 2 
                ? setMinLength(false) 
                : setMinLength(true)
                break

        }

        
    },[value])

    // console.log(wordError, 'wordError', minLength);
    
    return {
        wordError,
        minLength
    }
}

export const useInput = (initialValue: string, validation: string) => {
    const [value, setValue] = useState<string>(initialValue)

    const valid = useValidation(validation, value)

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange,
        ...valid
    }
}
