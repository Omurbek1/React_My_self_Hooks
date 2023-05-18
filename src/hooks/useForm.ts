import { useState, ChangeEvent, FormEvent } from 'react';

type FormValues = {
    [key: string]: string;
};

type FormErrors = {
    [key: string]: string;
};

const useForm = (initialValues: FormValues, validate: (values: FormValues) => FormErrors): [FormValues, FormErrors, () => void, (e: ChangeEvent<HTMLInputElement>) => void, (e: FormEvent<HTMLFormElement>) => void] => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formErrors = validate(values);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            // Perform form submission or further processing
            resetForm();
        }
    };

    return [values, errors, resetForm, handleChange, handleSubmit];
};

export default useForm;
