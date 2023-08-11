import {
    BITCOIN_SVG,
    DISCORD_LOGO,
    GEM_MARKETPLACE_SVG_DARK,
    SHIP_MARKETPLACE_SVG,
    SHIP_MARKETPLACE_SVG_DARK,
    TWITTER_LOGO,
} from '@/common/constants'
import { table } from 'console'
import Image from 'next/image'
import React from 'react'
import { TableItemProps } from '../collections/components/TableItem'
import { formatNumber } from '@/common/utils/formatNumber'
import { ArrowRight } from 'akar-icons'
import If from '@/common/components/If'
import { satToBtc } from '@/common/utils/satToBtc'
import CollectionInfo from './components/CollectionInfo'
import ScatterGraph from './components/ScatterGraph'

const CollectionPage = ({
    collection,
    volume,
    sales,
    tableItem,
}: {
    collection: any
    volume: any
    sales: any
    tableItem: TableItemProps
}) => {
    return (
        <div className="max-w-[1288px] w-[1288px] m-auto">
            {/* InfoBar */}
            <CollectionInfo tableItem={tableItem} />
            <ScatterGraph
                plotData={[{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]}
            />
        </div>
    )
}

export default CollectionPage
