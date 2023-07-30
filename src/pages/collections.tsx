import If from '@/common/components/If'
import Pagination from '@/common/components/Pagination'
import usePaginate from '@/common/hooks/usePaginate'
import Table from '@/modules/collections/Table'
import { TableItemProps } from '@/modules/collections/components/TableItem'
import { TABLE_HEADERS } from '@/modules/collections/mocks/headers'
import { ArrowCycle } from 'akar-icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CollectionsPage = () => {
    const [items, setItems] = useState<TableItemProps[]>([])
    const [currentItems, setCurrentItems] = useState<TableItemProps[]>([])
    const [itemsPerPage, setItemsPerPage] = useState<number>(10)

    useEffect(() => {
        axios.get(`${window.location.origin}/api/collections`).then((res) => {
            setItems(res.data)
        })
    }, [])

    const {
        currentPage,
        currentData,
        maxPages,
        prev,
        next,
        jump,
        getPaginationInfo,
    } = usePaginate(items, itemsPerPage)

    useEffect

    // useEffect(() => {
    //     if (currentPage && items.length) {
    //         setCurrentItems(currentData())
    //     }
    // }, [currentPage, items, itemsPerPage])

    if (items.length === 0) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <div className="animate-spin">
                    <ArrowCycle strokeWidth={2} size={36} color="black" />
                </div>
                <div className="text-xl font-semibold ml-4">Fetching...</div>
            </div>
        )
    }

    return (
        <div className="pt-[42px] px-[60px] h-screen">
            <div className="mb-4 flex items-center">
                <h3 className="text-xl font-bold ">All Collections</h3>
                <div className=" ml-2 px-2 py-1 bg-gray-50 text-gray-400 rounded-full text-xs font-medium">
                    {items.length.toLocaleString()}
                </div>
            </div>
            <If
                condition={!!items.length}
                then={
                    <div>
                        <Table data={currentData()} headers={TABLE_HEADERS} />
                        <div className="h-4 w-full" />
                        <Pagination
                            currentPage={currentPage}
                            maxPages={maxPages}
                            prev={prev}
                            next={next}
                            jump={jump}
                            // getTiles={getPaginationTiles}
                            info={getPaginationInfo()}
                            itemsPerPage={itemsPerPage}
                            setItemsPerPage={setItemsPerPage}
                        />
                    </div>
                }
            />
        </div>
    )
}

export default CollectionsPage
