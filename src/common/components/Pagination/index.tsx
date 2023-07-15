import { ChevronLeftSmall, ChevronRightSmall } from 'akar-icons'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import If from '../If'
import Dropdown from '../Dropdown'

export type PaginationProps = {
    currentPage: number
    maxPages: number
    next: () => void
    prev: () => void
    jump: (number) => void
    getTiles: () => number[]
    itemsPerPage: number
    setItemsPerPage: (number) => void
}

const Pagination = ({
    currentPage,
    maxPages,
    next,
    prev,
    jump,
    getTiles,
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

    useEffect(() => {
        const tiles = getTiles()
        console.log({ currentPage, itemsPerPage, maxPages, tiles })

        setTiles(tiles)
    }, [currentPage, itemsPerPage, maxPages])

    useEffect(() => {
        jump(1)
    }, [itemsPerPage])

    return (
        <div className="pb-[180px]">
            <div className="flex justify-between items-center overflow-visible">
                <div className="flex items-center">
                    <button
                        disabled={currentPage === 1}
                        className="p-2 rounded-sm border w-9 h-9 mr-4 flex justify-center items-center border-gray-100 bg-gray-50 text-gray-700 disabled:border-gray-50 disabled:bg-gray-0 disabled:text-gray-400"
                        onClick={handlePrev}
                    >
                        <ChevronLeftSmall size={10} strokeWidth={4} />
                    </button>
                    <div className="flex items-center">
                        {tiles.map((tile) => {
                            if (tile === -1)
                                return (
                                    <div
                                        key={`pag-num-${tile}`}
                                        className={`h-6 w-6 mr-4 rounded-full flex justify-center items-center text-sm  `}
                                    >
                                        ...
                                    </div>
                                )
                            return (
                                <div
                                    key={`pag-num-${tile + 1}`}
                                    className={`h-6 w-6 mr-4 rounded-full cursor-pointer flex justify-center items-center text-sm  ${
                                        currentPage === tile + 1
                                            ? 'bg-brand-500 text-gray-0'
                                            : ''
                                    }`}
                                    onClick={() => jump(tile + 1)}
                                >
                                    {tile + 1}
                                </div>
                            )
                        })}
                    </div>
                    <button
                        disabled={currentPage === maxPages}
                        className="p-2 rounded-sm border w-9 h-9 flex justify-center items-center border-gray-100 bg-gray-50 text-gray-700 disabled:border-gray-50 disabled:bg-gray-0 disabled:text-gray-400"
                        onClick={handleNext}
                    >
                        <ChevronRightSmall size={10} strokeWidth={4} />
                    </button>
                </div>
                <div className="flex items-center ">
                    <p className="mr-2">Show:</p>
                    <Dropdown
                        options={[
                            { label: '5 rows', value: 5 },
                            { label: '10 rows', value: 10 },
                            { label: '15 rows', value: 15 },
                            { label: '20 rows', value: 20 },
                        ]}
                        input={itemsPerPage}
                        setInput={setItemsPerPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pagination
