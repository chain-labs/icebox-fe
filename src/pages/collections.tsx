import If from '@/common/components/If'
import Pagination from '@/common/components/Pagination'
import usePaginate from '@/common/hooks/usePaginate'
import Table from '@/modules/collections/Table'
import { TableItemProps } from '@/modules/collections/components/TableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CollectionsPage = () => {
    const [items, setItems] = useState<TableItemProps[]>([])
    const [currentItems, setCurrentItems] = useState<TableItemProps[]>([])
    const [itemsPerPage, setItemsPerPage] = useState<number>(10)

    useEffect(() => {
        axios.get('http://localhost:3000/api/collections').then((res) => {
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
        getPaginationTiles,
    } = usePaginate(items, itemsPerPage)

    useEffect(() => {
        if (currentPage && items.length) {
            setCurrentItems(currentData())
        }
    }, [currentPage, items, itemsPerPage])

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
                        <Table data={currentItems} />
                        <div className="h-4 w-full" />
                        <Pagination
                            currentPage={currentPage}
                            maxPages={maxPages}
                            prev={prev}
                            next={next}
                            jump={jump}
                            getTiles={getPaginationTiles}
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
