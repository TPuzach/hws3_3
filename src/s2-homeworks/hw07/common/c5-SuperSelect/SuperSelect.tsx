import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'



type OptionType = {
    id: number;
    value: string;
};

type SuperSelectPropsType = SelectHTMLAttributes<HTMLSelectElement> & {
    options?: OptionType[];
    onChangeOption?: (option: OptionType) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedOptionId = Number(e.target.value);
        const selectedOption = options?.find((o) => o.id === selectedOptionId);
        onChangeOption && selectedOption && onChangeOption(selectedOption);
    };

    const finalSelectClassName = s.select + (className ? ' ' + className : '');

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    );
};

export default SuperSelect;
