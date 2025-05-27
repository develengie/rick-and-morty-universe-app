import './Button.scss';

type Type = 'button' | 'submit' | 'reset';

interface ButtonProps {
    type: Type;
    isDisabled: boolean;
    children: string;
}

const Button = (props: ButtonProps) => {
    const { type, isDisabled, children } = props;

    return (
        <button className="button" type={type} disabled={isDisabled}>
            {children}
        </button>
    );
};

export default Button;
