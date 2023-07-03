const NavLink = ({ text, page }) => {
    return (
        <div
            className={`ml-6 px-4 py-2 cursor-pointer font-medium text-lg text-${
                page === text ? 'black' : 'neutral-400'
            }`}
        >
            {text}
        </div>
    )
}

export default NavLink
