/* eslint-disable prefer-const */
import { ChangeEvent, useEffect, useState } from 'react';

import { FormDataProps } from './types';

export default function useForm(initial = {} as FormDataProps) {
    const [inputs, setInputs] = useState(initial);
    const initalValues = Object.values(initial).join('');

    useEffect(() => {
        // This function runs when the things we're watching change
        setInputs(initial);
    }, [initalValues]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let { value, name, type, files } = e.target;

        setInputs({
            // copy the existing state
            ...inputs,
            [name]: value,
        });
    }

    function resetForm() {
        setInputs(initial);
    }

    // return the things we want to surface from this custom hook
    return {
        inputs,
        handleChange,
        resetForm,
        //clearForm,
    };
}
