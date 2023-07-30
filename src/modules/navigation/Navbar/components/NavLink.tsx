import Link from 'next/link'

const NavLink = ({ text, page, url }) => {
    return (
        <Link href={url}>
            <div
                className={`ml-6 px-4 py-2 cursor-pointer font-medium text-lg text-${
                    page === text ? 'black' : 'neutral-400'
                }`}
            >
                {text}
            </div>
        </Link>
    )
}

export default NavLink
