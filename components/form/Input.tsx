import React from 'react'

interface IInput {
    placeholder?: string;
    value?: string;
    onChange?: Function;
    type?: InputType;
    name?: string;
}

export enum InputType {
    PASSWORD = "password",
    TEXT = "text"
}
export const Input: React.FC<IInput> = ({ placeholder, onChange, value, name, type = InputType.TEXT }) => {
    return (
        <div className="relative mb-6">
            <input
                type={type}
                className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder={placeholder}
                name={name}
                onChange={(e:any)=> {
                    console.log(e.target.value);
                    onChange && onChange(e.target.value);
                }}
                value={value}
            />
            <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                {placeholder}
            </label>
        </div>
    )
}
