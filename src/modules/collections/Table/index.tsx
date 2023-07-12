import React, { useEffect, useState } from 'react'
import TableHeader from '../components/TableHeader'
import TableItem, { TableItemProps } from '../components/TableItem'
import axios from 'axios'
import _ from 'lodash'

const Table = () => {
    const [items, setItems] = useState<TableItemProps[]>([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/collections').then((res) => {
            setItems(_.slice(res.data, 0, 11))
        })
    }, [])

    return (
        <div className="w-max-[1320px]">
            <TableHeader />
            {items.map((item) => (
                <TableItem
                    key={item.slug}
                    slug={item.slug}
                    name={item.name}
                    inscriptions={item.inscriptions}
                    image_url={item.image_url}
                    floor_price={item.floor_price}
                    top_loan_offer={item.top_loan_offer}
                    sales_volume_7d={item.sales_volume_7d}
                    loan_volume_7d={item.loan_volume_7d}
                    buy_links={item.buy_links}
                />
            ))}
        </div>
    )
}

export default Table
