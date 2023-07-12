import If from '@/common/components/If'
import {
    BITCOIN_SVG,
    GEM_MARKETPLACE_SVG,
    SHIP_MARKETPLACE_SVG,
} from '@/common/constants'
import { formatNumber } from '@/common/utils/formatNumber'
import { satToBtc } from '@/common/utils/satToBtc'
import { ArrowRight } from 'akar-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type TableItemProps = {
    slug?: string
    name: string
    inscriptions: {
        min: number
        max: number
    }
    floor_price: number
    top_loan_offer: number
    image_url: string
    loan_volume_7d: {
        value: number
        change: number
    }
    sales_volume_7d: {
        value: number
        change: number
    }
    buy_links: {
        ship: boolean
        gem: boolean
    }
}

const TableItem = (props: TableItemProps) => {
    console.log({ props })

    return (
        <Link href={`/collection/${props?.slug}`}>
            <div className="text-black text-sm w-full h-12 bg-white border-b border-b-slate-200 flex justify-between items-center cursor-pointer hover:bg-[#f8f9fc] hover:bg-opacity-80 hover:backdrop-blur-[8px]">
                <div
                    className="pl-2.5 py-2 flex items-center"
                    style={{ width: '25%' }}
                >
                    <div className="relative h-8 w-8 rounded-lg overflow-hidden">
                        <Image
                            src={props.image_url}
                            fill
                            alt={`${props.slug}-img`}
                        />
                    </div>
                    <div className="ml-2 font-medium text-gray-900">
                        {props.name}
                    </div>
                </div>

                <div
                    className="pl-2.5 flex items-center"
                    style={{ width: '12%' }}
                >
                    <div className="text-sm flex items-center font-normal">
                        <div>{formatNumber(props.inscriptions.min)}</div>
                        <ArrowRight size={14} className="mx-1" />
                        <div>{formatNumber(props.inscriptions.max)}</div>
                    </div>
                </div>

                <div className="flex items-center" style={{ width: '10%' }}>
                    <If
                        condition={!!props.top_loan_offer}
                        then={
                            <div className="flex pl-2.5">
                                <Image
                                    src={BITCOIN_SVG}
                                    width={18}
                                    height={18}
                                    alt="bitcoin_svg"
                                />
                                <div className="ml-2.5">
                                    {satToBtc(props.top_loan_offer)}
                                </div>
                            </div>
                        }
                        else={
                            <div className="w-full text-center self-center">
                                {'--'}
                            </div>
                        }
                    />
                </div>

                <div
                    className="py-2 flex items-center"
                    style={{ width: '10%' }}
                >
                    <If
                        condition={!!props.floor_price}
                        then={
                            <div className="flex pl-2.5">
                                <Image
                                    src={BITCOIN_SVG}
                                    width={18}
                                    height={18}
                                    alt="bitcoin_svg"
                                />
                                <div className="ml-2.5">
                                    {satToBtc(props.floor_price)}
                                </div>
                            </div>
                        }
                        else={
                            <div className="w-full text-center self-center">
                                {'--'}
                            </div>
                        }
                    />
                </div>

                <div
                    className="py-2 flex items-center"
                    style={{ width: '12%' }}
                >
                    <If
                        condition={!!props.loan_volume_7d.value}
                        then={
                            <div className="flex pl-2.5">
                                <Image
                                    src={BITCOIN_SVG}
                                    width={18}
                                    height={18}
                                    alt="bitcoin_svg"
                                />
                                <div className="ml-2.5">
                                    {props.loan_volume_7d.value}
                                    <span
                                        className={
                                            props.loan_volume_7d.change > 0
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                        }
                                    >
                                        {` (${
                                            props.loan_volume_7d.change > 0
                                                ? '+'
                                                : ''
                                        }${props.loan_volume_7d.change}%)`}
                                    </span>
                                </div>
                            </div>
                        }
                        else={
                            <div className="w-full text-center self-center">
                                {'--'}
                            </div>
                        }
                    />
                </div>

                <div
                    className="py-2 flex items-center"
                    style={{ width: '12%' }}
                >
                    <If
                        condition={!!props.sales_volume_7d.value}
                        then={
                            <div className="flex pl-2.5">
                                <Image
                                    src={BITCOIN_SVG}
                                    width={18}
                                    height={18}
                                    alt="bitcoin_svg"
                                />
                                <div className="ml-2.5">
                                    {props.sales_volume_7d.value}
                                    <span
                                        className={
                                            props.sales_volume_7d.change > 0
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                        }
                                    >
                                        {`( ${
                                            props.sales_volume_7d.change > 0
                                                ? '+'
                                                : ''
                                        }${props.sales_volume_7d.change}%)`}
                                    </span>
                                </div>
                            </div>
                        }
                        else={
                            <div className="w-full text-center self-center">
                                {'--'}
                            </div>
                        }
                    />
                </div>

                <div
                    className="py-2 flex items-center justify-center"
                    style={{ width: '6%' }}
                >
                    <div className="flex px-2.5">
                        <If
                            condition={props.buy_links.ship}
                            then={
                                <div className="flex">
                                    <Image
                                        src={SHIP_MARKETPLACE_SVG}
                                        width={20}
                                        height={20}
                                        alt="ship_marketplace"
                                    />
                                    <div className="w-2" />
                                </div>
                            }
                        />
                        <If
                            condition={props.buy_links.gem}
                            then={
                                <div>
                                    <div className="w-2" />
                                    <Image
                                        src={GEM_MARKETPLACE_SVG}
                                        width={20}
                                        height={20}
                                        alt="gem_marketplace"
                                    />
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TableItem
