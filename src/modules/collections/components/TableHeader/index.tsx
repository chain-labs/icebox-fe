import React from 'react'
import HeaderItem from '../HeaderItem'

const TableHeader = () => {
    return (
        <div className="text-black w-full h-8.5 bg-[#f8f9fc] bg-opacity-80 backdrop-blur-[8px] flex justify-between items-start">
            <HeaderItem title="COLLECTION NAME" sort width="25%" />
            <HeaderItem title="INSCRIPTION #" sort width="12%" />
            <HeaderItem title="TOP LOAN OFFER" sort width="10%" />
            <HeaderItem title="FLOOR PRICE" sort width="10%" />
            <HeaderItem title="7D LOAN VOLUME" sort width="12%" />
            <HeaderItem title="7D SALES VOLUME" sort width="12%" />
            <HeaderItem title="BUY ON" info width="6%" />
        </div>
    )
}

export default TableHeader
