import { useState, ChangeEvent } from 'react';

type FormValues<T> = {
    [K in keyof T]: T[K];
};

interface FormReturn<T> {
    values: FormValues<T>;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    resetForm: () => void;
    setFieldValue: (name: string, value: string | number | File | null) => void;
}

export function useForm<T>(initialValues: T): FormReturn<T> {
    const [values, setValues] = useState<FormValues<T>>(initialValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const setFieldValue = (name: string, value: string | number | File | null) => {
        setValues({
            ...values,
            [name]: value
        });
    }

    const resetForm = () => {
        setValues(initialValues);
    };

    return { values, handleChange, resetForm, setFieldValue };
}