import { INFO_SVG, SORTING_SVG } from '@/common/constants'
import If from '@/src/common/components/If'
import Image from 'next/image'

interface ColumnItemProps {
    title: string
    width?: string
    sort?: boolean
    info?: boolean
}

const ColumnItem = ({ title, sort, info, width }: ColumnItemProps) => {
    return (
        <div
            className={`pl-2.5 py-2 flex items-center text-gray-500 text-xs font-medium text-center cursor-pointer`}
            style={{ width: width }}
        >
            <div className="mr-1.5">{title}</div>
            <If
                condition={sort}
                then={
                    <Image
                        src={SORTING_SVG}
                        alt="bitcoin"
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
        </div>
    )
}

export default ColumnItem
