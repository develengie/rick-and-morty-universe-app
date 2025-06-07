import { useState, type ChangeEvent, type FormEvent } from "react";
import { TextInput } from "../../shared/ui";
import { Button } from "../../shared/ui";
import { validator } from "../../shared/lib";
import type { User } from "../../shared/config";
import "./Signin.scss";

interface SigninProps {
    onSubmit: (user: User) => void;
}

const Signin = ({ onSubmit }: SigninProps) => {
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
    });

    const isValidEmail = validator.isEmail(user.email);
    const isValidPassword = validator.min(user.password);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isValidEmail && isValidPassword) {
            onSubmit(user);
            setUser({
                email: "",
                password: "",
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
                value={user.email}
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
                value={user.password}
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
