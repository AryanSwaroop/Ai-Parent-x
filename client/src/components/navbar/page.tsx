const Navbar = () => {
    return (
        <div className="flex justify-between items-center mb-20">
            <img src="/logo.svg" className="h-10 w-10 m-3"/>
            <div>
                <button className=" text-gray-600 m-5 mt-3 font-mono">Home</button>
                <button className=" text-gray-600 m-5 mt-3 font-mono">Products</button>
                <button className=" text-gray-600 m-5 mt-3 font-mono">Pricing</button>
            </div>

            <div>
                <button className=" text-gray-600 m-3 mr-3 p-2 font-mono">Login</button>
                <button className=" text-white m-3 ml-2 font-mono bg-black p-2 rounded-md">Signup</button>
            </div>
        </div>
    )
}

export default Navbar;