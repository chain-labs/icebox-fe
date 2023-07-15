import Image from 'next/image'
import React from 'react'
import SearchBar from '../Searchbar'
import NavLink from './components/NavLink'
import { BRANDING } from '@/common/constants'

const Navbar = ({ page }) => {
    return (
        <div className="w-full h-14 px-[60px] py-2 bg-white bg-opacity-80 border-b border-b-slate-700 border-opacity-30 flex justify-between">
            <div className="flex items-center">
                <div className="text-black flex">
                    <div className="h-10 w-[108px] relative cursor-pointer">
                        <Image fill src={BRANDING} alt="logo-branding" />
                    </div>
                    <NavLink text="Collections" page={page} url="/collections" />
                    <NavLink text="Portfolio" page={page} url="/portfolio" />
                </div>
            </div>

            <div className="flex items-center">
                <SearchBar />
                <div className="w-6" />
                <div className="h-10 px-3.5 py-2 bg-black rounded-[30px] shadow border-white border-opacity-5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-stone-50 text-[16px] font-semibold leading-normal">
                        Connect wallet
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
