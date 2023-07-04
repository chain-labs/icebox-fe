import If from '@/src/common/components/If'
import Image from 'next/image'

const SORTING_SVG =
    'https://ik.imagekit.io/chainlabs/Icebox/column-sorting_CG5oqH1Em.svg?updatedAt=1688419803019'

const INFO_SVG =
    'https://ik.imagekit.io/chainlabs/Icebox/info_BOVGJLuwh.svg?updatedAt=1688420406076'

interface HeaderItemProps {
    title: string
    sort?: boolean
    info?: boolean
    width?: string
}

const HeaderItem = ({ title, sort, info, width }: HeaderItemProps) => {
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

export default HeaderItem
