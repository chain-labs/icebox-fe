import { useEffect, useState } from 'react'
import _ from 'lodash'

const MAX_BEFORE_KINK = 10
const MAX_BUNCH = 7

export type IPaginationInfo = {
    range: { max: number; min: number }
    total: number
    currentPage: number
    totalPages: number
}

const usePaginate = (
    data: any[],
    itemsPerPage: number,
    defaultActivePage = 1
) => {
    const [currentPage, setCurrentPage] = useState(defaultActivePage)
    const [maxPages, setMaxPages] = useState(
        Math.floor(data.length / itemsPerPage)
    )

    useEffect(() => {
        if (itemsPerPage) {
            setCurrentPage(1)
            const maxPgs = Math.ceil(data.length / itemsPerPage)
            setMaxPages(maxPgs)
        }
    }, [itemsPerPage, data.length])

    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPages))
    }

    const prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
    }

    const jump = (page: number) => {
        const pageNumber = Math.max(1, page)
        console.log('jump')

        setCurrentPage(Math.min(pageNumber, maxPages))
    }

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage
        const end = begin + itemsPerPage
        console.log({ currentPage, itemsPerPage, data: data.slice(begin, end) })

        return data.slice(begin, end)
    }

    const getPaginationInfo = (): IPaginationInfo => {
        const begin = (currentPage - 1) * itemsPerPage + 1
        const end = begin + itemsPerPage - 1
        console.log({ info: currentPage })

        return {
            range: {
                min: begin,
                max: end,
            },
            total: data.length,
            currentPage: currentPage,
            totalPages: maxPages,
        }
    }

    const getPaginationTiles = () => {
        console.log({ currentPage, maxPages })

        if (maxPages <= MAX_BEFORE_KINK) {
            return _.times(maxPages)
        } else {
            const paginationTiles = []
            if (currentPage < MAX_BUNCH) {
                paginationTiles.push(..._.times(7))
                paginationTiles.push(-1)
                paginationTiles.push(maxPages - 1)
            } else if (currentPage > maxPages - MAX_BUNCH + 1) {
                paginationTiles.push(0, -1)
                paginationTiles.push(..._.times(maxPages).slice(-1 * MAX_BUNCH))
            } else {
                paginationTiles.push(0, -1)
                paginationTiles.push(
                    ..._.times(maxPages).slice(
                        currentPage - MAX_BUNCH / 2,
                        currentPage + MAX_BUNCH / 2
                    )
                )
                paginationTiles.push(-1, maxPages - 1)
            }
            return paginationTiles
        }
    }

    return {
        itemsPerPage,
        currentPage,
        maxPages,
        next,
        prev,
        jump,
        currentData,
        getPaginationTiles,
        getPaginationInfo,
    }
}

export default usePaginate
