const Navbar = () => {
    return (
        <nav className="bg-gray-600 w-[80%] mx-auto rounded-md mb-5">
            <div className="flex justify-between mx-10">
                <div>Logo</div>
                <div>Pokedex</div>
                <div>Moves</div>
                <div>Types</div>
                <div>Abilities</div>
                <input type='search'/>
            </div>
        </nav>
    )
}

export default Navbar