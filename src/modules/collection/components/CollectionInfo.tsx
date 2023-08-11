import If from '@/common/components/If'
import {
    BITCOIN_SVG,
    DISCORD_LOGO,
    GEM_MARKETPLACE_SVG_DARK,
    SHIP_MARKETPLACE_SVG_DARK,
    TWITTER_LOGO,
} from '@/common/constants'
import { formatNumber } from '@/common/utils/formatNumber'
import { satToBtc } from '@/common/utils/satToBtc'
import { TableItemProps } from '@/modules/collections/components/TableItem'
import { ArrowRight } from 'akar-icons'
import Image from 'next/image'
import React from 'react'

type Props = { tableItem: TableItemProps }

const CollectionInfo = ({ tableItem }: Props) => {
    return (
        <div className="mt-[42px] border border-[#eceff3] rounded-md p-4 bg-white flex justify-between">
            <div>
                <div className="flex items-center mb-3">
                    <Image
                        src={tableItem.image_url}
                        width={36}
                        height={36}
                        alt="logo"
                        className="rounded-lg mr-2"
                    />
                    <h2 className="text-xl font-semibold leading-5 tracking-[0.2px] text-gray-900">
                        {tableItem.name}
                    </h2>
                </div>
                <div className="flex gap-4 items-center">
                    <a>
                        <Image
                            src={SHIP_MARKETPLACE_SVG_DARK}
                            alt="ship_logo"
                            width={19}
                            height={18}
                        />
                    </a>
                    <a>
                        <Image
                            src={GEM_MARKETPLACE_SVG_DARK}
                            alt="ship_logo"
                            width={19}
                            height={18}
                        />
                    </a>
                    <a>
                        <Image
                            src={TWITTER_LOGO}
                            alt="ship_logo"
                            width={19}
                            height={18}
                        />
                    </a>
                    <a>
                        <Image
                            src={DISCORD_LOGO}
                            alt="ship_logo"
                            width={19}
                            height={18}
                        />
                    </a>
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <Info label="INSCRIPTION#">
                    <div>{formatNumber(tableItem.inscriptions.min)}</div>
                    <ArrowRight size={14} className="mx-1" />
                    <div>{formatNumber(tableItem.inscriptions.max)}</div>
                </Info>
                <Info label="TOP LOAN OFFER">
                    <If
                        condition={!!tableItem.top_loan_offer}
                        then={
                            <div className="flex">
                                <Image
                                    src={BITCOIN_SVG}
                                    width={18}
                                    height={18}
                                    alt="bitcoin_svg"
                                />
                                <div className="ml-2.5">
                                    {satToBtc(tableItem.top_loan_offer)}
                                </div>
                            </div>
                        }
                        else={<div className="w-full self-center">{'--'}</div>}
                    />
                </Info>
                <Info label="FLOOR PRICE">
                    <If
                        condition={!!tableItem.floor_price}
                        then={
                            <div className="flex">
                                <Image
                                    src={BITCOIN_SVG}
                                    width={18}
                                    height={18}
                                    alt="bitcoin_svg"
                                />
                                <div className="ml-2.5">
                                    {satToBtc(tableItem.floor_price)}
                                </div>
                            </div>
                        }
                        else={<div className="w-full self-center">{'--'}</div>}
                    />
                </Info>
                <Info label="ACTIVE LOANS">---</Info>
                <Info label="ASSETS #">12,345</Info>
                <Info label="OWNERS #">2305</Info>
                <Info label="7D SALES VOLUME">
                    <If
                        condition={!!tableItem.loan_volume_7d.value}
                        then={
                            <div className="flex">
                                <Image
                                    src={BITCOIN_SVG}
                                    width={18}
                                    height={18}
                                    alt="bitcoin_svg"
                                />
                                <div className="ml-2.5">
                                    {tableItem.loan_volume_7d.value}
                                    <span
                                        className={
                                            tableItem.loan_volume_7d.change > 0
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                        }
                                    >
                                        {` (${
                                            tableItem.loan_volume_7d.change > 0
                                                ? '+'
                                                : ''
                                        }${tableItem.loan_volume_7d.change}%)`}
                                    </span>
                                </div>
                            </div>
                        }
                        else={<div className="w-full self-center">{'--'}</div>}
                    />
                </Info>
            </div>
        </div>
    )
}

export default CollectionInfo

const Info = ({ label, children }) => {
    return (
        <div>
            <h4 className="text-xs font-medium text-gray-500 tracking-[0.36px] leading-[18px]">
                {label}
            </h4>
            <h5 className="text-sm flex items-center font-normal leading-5 text-gray-900 mt-2.5">
                {children}
            </h5>
        </div>
    )
}
