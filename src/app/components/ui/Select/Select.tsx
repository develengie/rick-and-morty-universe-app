import type { ChangeEvent } from 'react';
import './Select.scss';

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    defaultOption: string;
    options: Option[];
}

const Select = ({
    name,
    value,
    onChange,
    defaultOption,
    options,
}: SelectProps) => {
    return (
        <select
            className="select"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
        >
            <option disabled value="">
                {defaultOption}
            </option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
