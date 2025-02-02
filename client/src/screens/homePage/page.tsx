
const HomePage = () => {

    return (
        <>
            <div className="w-full h-full flex-col flex justify-center items-center">

                <h1 className="m-auto text-black font-extrabold text-5xl mt-5">
                    One Place For All Our Services
                </h1>

                <h3 className="m-5 text-gray-600 text-center font-mono text-lg">
                    We provide high-quality services for all your needs. This is a central service to 
                    <br />
                    process payments for all our products.
                </h3>

                <button className="bg-amber-400 h-20 rounded-md w-20 p-3 border-amber-400 hover:bg-amber-500 transition">
                    <img src="arrow.svg" alt="Navigate" className="h-8 w-8 m-auto" />
                </button>

            </div>
            
        </>
    );
};

export default HomePage;