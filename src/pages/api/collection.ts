import { TableItemProps } from '@/modules/collections/components/TableItem'
import axios from 'axios'
import _ from 'lodash'

const COLLECTION_BASE_URL =
    'https://ordapi.bestinslot.xyz/v1/get_collections_base_info'

const COLLECTION_VOLUME_URL =
    'https://ordapi.bestinslot.xyz/v1/get_collections_volume_info'

const COLLECTION_SUPPLY_URL =
    'https://ordapi.bestinslot.xyz/v1/get_collections_supply_info'

const getChange = (old_num: number, new_num: number) => {
    const diff = new_num - old_num
    const diff_percent = (diff / old_num) * 100

    return diff_percent
}

export default async function handler(req, res) {
    const response: TableItemProps[] = []
    const { data: COLLECTION_BASE } = await axios.get(COLLECTION_BASE_URL)
    const { data: COLLECTION_VOLUME } = await axios.get(COLLECTION_VOLUME_URL)
    const { data: COLLECTION_SUPPLY } = await axios.get(COLLECTION_SUPPLY_URL)

    const slug = req.query.slug
    const collection = _.find(COLLECTION_BASE, function (o) {
        return o.slug === slug
    })

    console.log({ collection })

    const volume = _.find(COLLECTION_VOLUME, function (o) {
        return o.slug === slug
    })

    const supply = _.find(COLLECTION_SUPPLY, function (o) {
        return o.slug === slug
    })

    const tableItem: TableItemProps = {
        slug: collection.slug,
        name: collection.name,
        inscriptions: {
            max: collection['max_num'],
            min: collection['min_num'],
        },
        image_url: `https://bis-ord-content.fra1.cdn.digitaloceanspaces.com/ordinals/${collection['inscription_icon_id']}`,
        floor_price: _.min([
            collection['floor_price_ordinalswallet'],
            collection['floor_price_magiceden'],
            collection['floor_price_gammaio'],
            collection['floor_price_nostr'],
            collection['floor_price_ordynals'],
            collection['floor_price_ordinalsmarket'],
            collection['floor_price_ordswap'],
        ]),
        top_loan_offer: null,
        loan_volume_7d: {
            value: volume['vol_7d_in_btc'],
            change: getChange(
                volume['vol_24h-in-btc'],
                volume['vol_7d_in_btc']
            ),
        },
        sales_volume_7d: {
            value: 12566.05,
            change: -16.9,
        },
        buy_links: {
            ship: true,
            gem: true,
        },
    }

    res.status(200).json({
        tableItem,
        collection,
        supply,
        volume,
    })
}
