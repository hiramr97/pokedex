import { useState } from "react"
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gray-700 w-[80%] mx-auto rounded-md mb-5 text-white shadow-md shadow-slate-900">
            <div className="flex justify-between mx-10 py-2 text-lg">
                <div className="relative flex flex-col items-center">
                    <button className="flex justify-center items-center" onClick={() => setIsOpen((prev) => !prev)}>Pokedex
                        {!isOpen ? (
                            <AiOutlineCaretDown className="h-4 ml-2 pt-1" />
                        ) : (
                            <AiOutlineCaretUp className="h-4 ml-2 pt-1" />
                        )}
                    </button>
                    {isOpen && (
                        <div className="bg-gray-700 absolute top-12 flex flex-col justify-center items-center text-center rounded-md shadow-md shadow-slate-900 text-white">
                            <div className="">
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer rounded-t-md">National</p>
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer">Kanto</p>
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer">Johto</p>
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer">Hoenn</p>
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer">Sinnoh</p>
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer">Unova</p>
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer">Kalos</p>
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer">Alola</p>
                                <p className="hover:bg-gray-500 px-4 py-2 cursor-pointer rounded-b-md">Galar</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="-ml-4">Moves</div>
                <div>Types</div>
                <div>Abilities</div>
                <form className="flex items-center relative">
                    <input className="rounded-md px-2 text-md" type='search' placeholder="Search" />
                    <div className="absolute inset-y-0 right-2 flex items-center pl-3">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Navbar