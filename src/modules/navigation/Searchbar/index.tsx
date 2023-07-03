import { Search } from 'akar-icons'
import React from 'react'

const SearchBar = () => {
    return (
        <div className="h-8 w-[300px] px-3 py-[6px] rounded-md bg-slate-50 shadow flex items-center">
            <div className="text-gray-400 mr-2">
                <Search size={16} />
            </div>
            <input
                placeholder="Search"
                className="text-black placeholder:text-gray-300 text-sm border-none bg-inherit outline-none flex-1"
            />
            <div className="w-4 h-4 rounded bg-slate-200 text-gray-400 border text-[12px] flex items-center justify-center">
                /
            </div>
        </div>
    )
}

export default SearchBar
