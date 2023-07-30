import {
    ChevronDownSmall,
    ChevronLeftSmall,
    ChevronRightSmall,
} from 'akar-icons'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import If from '../If'
import Dropdown from '../Dropdown'
import { IPaginationInfo } from '@/common/hooks/usePaginate'

export type PaginationProps = {
    currentPage: number
    maxPages: number
    next: () => void
    prev: () => void
    jump: (number) => void
    getTiles?: () => number[]
    info?: IPaginationInfo
    itemsPerPage: number
    setItemsPerPage: (number) => void
}

const Pagination = ({
    currentPage,
    maxPages,
    next,
    prev,
    jump,
    info,
    itemsPerPage,
    setItemsPerPage,
}: PaginationProps) => {
    const [tiles, setTiles] = useState<number[]>([])
    const handlePrev = (e) => {
        e.preventDefault()
        prev()
    }

    const handleNext = (e) => {
        e.preventDefault()
        next()
    }

    // useEffect(() => {
    //     const tiles = getTiles()
    //     console.log({ currentPage, itemsPerPage, maxPages, tiles })

    //     setTiles(tiles)
    // }, [currentPage, itemsPerPage, maxPages])

    return (
        // <div className="pb-[180px]">
        //     <div className="flex justify-between items-center overflow-visible">
        //         <div className="flex items-center">
        //             <button
        //                 disabled={currentPage === 1}
        //                 className="p-2 rounded-sm border w-9 h-9 mr-4 flex justify-center items-center border-gray-100 bg-gray-50 text-gray-700 disabled:border-gray-50 disabled:bg-gray-0 disabled:text-gray-400"
        //                 onClick={handlePrev}
        //             >
        //                 <ChevronLeftSmall size={10} strokeWidth={4} />
        //             </button>
        //             <div className="flex items-center">
        //                 {tiles.map((tile) => {
        //                     if (tile === -1)
        //                         return (
        //                             <div
        //                                 key={`pag-num-${tile}`}
        //                                 className={`h-6 w-6 mr-4 rounded-full flex justify-center items-center text-sm  `}
        //                             >
        //                                 ...
        //                             </div>
        //                         )
        //                     return (
        //                         <div
        //                             key={`pag-num-${tile + 1}`}
        //                             className={`h-6 w-6 mr-4 rounded-full cursor-pointer flex justify-center items-center text-sm  ${
        //                                 currentPage === tile + 1
        //                                     ? 'bg-brand-500 text-gray-0'
        //                                     : ''
        //                             }`}
        //                             onClick={() => jump(tile + 1)}
        //                         >
        //                             {tile + 1}
        //                         </div>
        //                     )
        //                 })}
        //             </div>
        //             <button
        //                 disabled={currentPage === maxPages}
        //                 className="p-2 rounded-sm border w-9 h-9 flex justify-center items-center border-gray-100 bg-gray-50 text-gray-700 disabled:border-gray-50 disabled:bg-gray-0 disabled:text-gray-400"
        //                 onClick={handleNext}
        //             >
        //                 <ChevronRightSmall size={10} strokeWidth={4} />
        //             </button>
        //         </div>
        //         <div className="flex items-center ">
        //             <p className="mr-2">Show:</p>
        //             <Dropdown
        //                 options={[
        //                     { label: '5 rows', value: 5 },
        //                     { label: '10 rows', value: 10 },
        //                     { label: '15 rows', value: 15 },
        //                     { label: '20 rows', value: 20 },
        //                 ]}
        //                 input={itemsPerPage}
        //                 setInput={setItemsPerPage}
        //             />
        //         </div>
        //     </div>
        // </div>

        <div className="w-full py-3 flex items-center justify-between">
            <div className="text-gray-500 text-xs font-medium">
                {`${info.range.min}-${info.range.max} of ${info.total}`}
            </div>
            <div className="flex items-center">
                <p className="text-xs font-medium text-gray-500">
                    Rows per page:
                </p>
                <Dropdown
                    options={[
                        { label: '5', value: 5 },
                        { label: '10', value: 10 },
                        { label: '15', value: 15 },
                        { label: '20', value: 20 },
                    ]}
                    input={itemsPerPage}
                    setInput={setItemsPerPage}
                />
                <div className="ml-5 flex items-center">
                    <button
                        disabled={currentPage === 1}
                        className="px-1 py-0.5 rounded-md text-gray-700 disabled:text-[#a1a9b8] bg-white disabled:bg-gray-0 border disabled:border-[rgba(70, 79, 96, 0.20)]"
                        onClick={handlePrev}
                    >
                        <ChevronLeftSmall size={10} />
                    </button>
                    <div className="mx-2.5 text-xs ">{`${info.currentPage}/${info.totalPages}`}</div>
                    <button
                        disabled={currentPage === info.totalPages}
                        className="px-1 py-0.5 rounded-md text-gray-700 disabled:text-[#a1a9b8] bg-white disabled:bg-gray-0 border disabled:border-[rgba(70, 79, 96, 0.20)]"
                        onClick={handleNext}
                    >
                        <ChevronRightSmall size={10} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination
