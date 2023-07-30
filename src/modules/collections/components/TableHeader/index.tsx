import React from 'react'
import HeaderItem from '../HeaderItem'

const TableHeader = ({ headers }: { headers: any[] }) => {
    return (
        <thead>
            <tr className="text-black w-full  bg-[#f8f9fc]  bg-opacity-80 backdrop-blur-[8px] flex justify-between items-start">
                {headers.map((header) => (
                    <HeaderItem
                        key={header.title}
                        title={header.title}
                        sort={header.sort}
                        info={header.info}
                        width={header.width}
                    />
                ))}
            </tr>
            <tr
                className="tex
            t-black w-full  bg-[#f8f9fc]  bg-opacity-80 backdrop-blur-[8px] flex justify-between items-start"
            >
                {headers.map((header) => (
                    <div
                        key={`border-for-${header.title}`}
                        className="border-b border-b-slate-200"
                        style={{ width: header.width }}
                    />
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader
