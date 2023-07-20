import React from 'react'
import HeaderItem from '../HeaderItem'

const TableHeader = () => {
    return (
        <thead>
            <tr className="text-black w-full  bg-[#f8f9fc]  bg-opacity-80 backdrop-blur-[8px] flex justify-between items-start">
                <HeaderItem
                    title="COLLECTION NAME"
                    sort
                    width="20%"
                    shrink={3}
                />
                <HeaderItem
                    title="INSCRIPTION(#)"
                    sort
                    width="12%"
                    shrink={1}
                />
                <HeaderItem
                    title="TOP LOAN OFFER"
                    sort
                    width="15%"
                    shrink={1}
                />
                <HeaderItem title="FLOOR PRICE" sort width="8%" shrink={0} />
                <HeaderItem
                    title="7D LOAN VOLUME"
                    sort
                    width="12%"
                    shrink={1}
                />
                <HeaderItem
                    title="7D SALES VOLUME"
                    sort
                    width="12%"
                    shrink={1}
                />
                <HeaderItem title="BUY ON" info width="10%" shrink={0} />
            </tr>
            <tr className="text-black w-full  bg-[#f8f9fc]  bg-opacity-80 backdrop-blur-[8px] flex justify-between items-start">
                <div
                    className="border-b border-b-slate-200"
                    style={{ width: '20%' }}
                />
                <div
                    className="border-b border-b-slate-200"
                    style={{ width: '12%' }}
                />
                <div
                    className="border-b border-b-slate-200"
                    style={{ width: '15%' }}
                />
                <div
                    className="border-b border-b-slate-200"
                    style={{ width: '8%' }}
                />
                <div
                    className="border-b border-b-slate-200"
                    style={{ width: '12%' }}
                />
                <div
                    className="border-b border-b-slate-200"
                    style={{ width: '12%' }}
                />
                <div
                    className="border-b border-b-slate-200"
                    style={{ width: '10%' }}
                />
            </tr>
        </thead>
    )
}

export default TableHeader
