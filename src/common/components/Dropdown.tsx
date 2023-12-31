import { ChevronDownSmall } from 'akar-icons'
import { useClickAway } from '@uidotdev/usehooks'
import React, { useState } from 'react'
import If from './If'

type IOption = {
    label: string
    value: any
}

type Props = {
    options: IOption[]
    input: any
    setInput: (any) => void
}

const Dropdown = ({ options, input, setInput }: Props) => {
    const [expand, setExpand] = useState(false)
    const ref = useClickAway(() => {
        setExpand(false)
    })
    const handleExpand = (e) => {
        e.preventDefault()
        setExpand(!expand)
    }

    const handleOptionSelect = (value) => {
        setInput(value)
        setExpand(false)
    }

    return (
        <div className="relative overflow-visible">
            <button
                className="text-gray-500 focus:outline-none focus:ring-blue-300 font-medium text-xs px-1 text-center flex items-center"
                onClick={handleExpand}
            >
                {
                    options[
                        options.findIndex((option) => option.value === input)
                    ].label
                }
                <div className="text-gray-400 ml-0.5">
                    <ChevronDownSmall size={10} strokeWidth={4} />
                </div>
            </button>
            <If
                condition={expand}
                then={
                    <div
                        id="dropdown"
                        ref={ref}
                        className="text-black z-10 absolute top-9.5 left-0 w-full border border-gray-50  cursor-pointer shadow"
                    >
                        <ul className="text-xs text-gray-500">
                            {options?.map((option) => (
                                <li
                                    key={option.label}
                                    onClick={() =>
                                        handleOptionSelect(option.value)
                                    }
                                >
                                    <a
                                        href="#"
                                        className="block text-center py-2 hover:bg-gray-100 "
                                    >
                                        {option.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            />
        </div>
    )
}

export default Dropdown
