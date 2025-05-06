import React from "react"

type FormInputProps = {
    name: string
    label: string
    type?: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string
    placeholder?: string
    disabled?: boolean
}

export default function FormInput({
    name,
    label,
    type = "text",
    value,
    onChange,
    error,
    placeholder,
    disabled = false
}: FormInputProps) {
    return (
        <div className="mb-5">
            <label htmlFor={name} className="block font-semibold text-gray-200 mb-1">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400 transition-colors duration-150 ${error ? 'border-red-500' : 'border-gray-600'} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}