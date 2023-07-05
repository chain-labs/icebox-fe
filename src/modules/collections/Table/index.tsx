import React from 'react'
import TableHeader from '../components/TableHeader'
import TableItem from '../components/TableItem'
import { ITEMS } from '../mocks/mock'

const Table = () => {
    return (
        <div className="w-max-[1320px]">
            <TableHeader />
            {ITEMS.map((item) => (
                <TableItem
                    key={item.slug}
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
