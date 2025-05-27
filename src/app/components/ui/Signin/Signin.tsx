import { useState, type ChangeEvent, type FormEvent } from 'react';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import { validator } from '../../../utils/validator';
import type { SigninData } from '../../../models/models';
import './Signin.scss';

interface SigninProps {
    onSubmit: (data: SigninData) => void;
}

const Signin = ({ onSubmit }: SigninProps) => {
    const [data, setData] = useState<SigninData>({
        email: '',
        password: '',
    });

    const isValidEmail = validator.isEmail(data.email);
    const isValidPassword = validator.min(data.password);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isValidEmail && isValidPassword) {
            onSubmit(data);
            setData({
                email: '',
                password: '',
            });
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <TextInput
                placeholder="Email placeholder"
                label="Email label"
                variant="default"
                radius="xs"
                size="xs"
                isDisabled={false}
                isAsterisk={true}
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <TextInput
                placeholder="Password placeholder"
                label="Password label"
                variant="default"
                radius="xs"
                size="xs"
                isDisabled={false}
                isAsterisk={true}
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <Button
                type="submit"
                isDisabled={!isValidEmail || !isValidPassword}
            >
                Войти
            </Button>
        </form>
    );
};

export default Signin;
