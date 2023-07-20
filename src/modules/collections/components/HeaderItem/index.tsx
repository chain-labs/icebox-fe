import { INFO_SVG, SORTING_SVG } from '@/common/constants'
import If from '@/src/common/components/If'
import Image from 'next/image'

interface HeaderItemProps {
    title: string
    sort?: boolean
    info?: boolean
    width?: string
    shrink?: number
}

const HeaderItem = ({ title, sort, info, width, shrink }: HeaderItemProps) => {
    return (
        <th
            className={`h-full pl-2.5 py-2 flex items-center text-gray-500 text-xs font-medium text-center cursor-pointer`}
            style={{ width: width, flexShrink: shrink }}
        >
            <div className="mr-1.5 flex items-center">{title}</div>
            <If
                condition={sort}
                then={
                    <Image
                        src={SORTING_SVG}
                        alt="sort_svg"
                        width={16}
                        height={16}
                    />
                }
            />
            <If
                condition={info}
                then={
                    <Image
                        src={INFO_SVG}
                        alt="bitcoin"
                        width={16}
                        height={16}
                    />
                }
            />
        </th>
    )
}

export default HeaderItem
