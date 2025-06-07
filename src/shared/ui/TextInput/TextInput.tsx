import type { ChangeEvent } from 'react';
import './TextInput.scss';

type Variant = 'default' | 'filled' | 'unstyled';
type ControlPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Type = 'text' | 'email' | 'radio' | 'password';

interface Option {
    name: string;
    value: string;
}

interface TextInputProps {
    placeholder: string;
    label?: string;
    description?: string;
    error?: string;
    variant: Variant;
    radius: ControlPoints;
    size: ControlPoints;
    isDisabled: boolean;
    isAsterisk: boolean;
    type: Type;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    options?: Option[];
    icon?: string;
}

const TextInput = (props: TextInputProps) => {
    const {
        placeholder,
        label,
        description,
        error,
        variant,
        radius,
        size,
        isDisabled,
        isAsterisk,
        type,
        name,
        value,
        onChange,
        options,
        icon,
    } = props;

    const getTextInputClasses = () => {
        return (
            `text-input ${variant} radius-${radius}` +
            (error ? ' error' : '') +
            (type === 'radio' ? ' radio' : '') +
            (icon ? ' icon' : '')
        );
    };

    const getTextInputIconClasses = () => {
        return (
            `text-input-icon ${variant} radius-${radius} size-${size}` +
            (error ? ' error' : '') +
            (icon ? ' icon' : '')
        );
    };

    if (options) {
        return (
            <div className={`form__group size-${size}`}>
                {label && (
                    <label className="label">
                        {label}
                        {label && isAsterisk && (
                            <span className="asterisk">*</span>
                        )}
                    </label>
                )}
                {description && <p className="description">{description}</p>}
                <div className="margin-top">
                    {options.map(option => (
                        <div className="option" key={option.name}>
                            <input
                                className={getTextInputClasses()}
                                type={type}
                                id={option.name}
                                name={name}
                                disabled={isDisabled}
                                value={option.value}
                                onChange={onChange}
                                checked={option.value === value}
                            />
                            <label
                                className={'label__check' + ` size-${size}`}
                                htmlFor={option.name}
                            >
                                {option.name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`form__group size-${size}`}>
            {label && (
                <label className="label" htmlFor={name}>
                    {label}
                    {label && isAsterisk && <span className="asterisk">*</span>}
                </label>
            )}
            {description && <p className="description">{description}</p>}
            {icon ? (
                <div className={getTextInputIconClasses()}>
                    <img className="icon" src={icon} alt="" />
                    <input
                        className="text-input"
                        type={type}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        disabled={isDisabled}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            ) : (
                <input
                    className={getTextInputClasses()}
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    value={value}
                    onChange={onChange}
                />
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default TextInput;
