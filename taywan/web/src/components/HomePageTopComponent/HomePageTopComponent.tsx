

export default function HomePageTopComponent() {
    return <div className="bg-background flex-grow w-full">
        {/* header text and the sub text */}
        <div className="flex flex-col items-center justify-center max-h-80 p-4 text-black">
            <h1 className="text-5xl font-bold font-header">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-xl text-gray-500 font-body">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and
                to cater your sense of style</p>
        </div>

        {/* shop now button */}
        <div className="flex justify-center items-center h-[100px]">
            <button className="bg-black text-white font-header text-xl w-full h-1/2 rounded-full  ">SHOP NOW</button>
        </div>

        {/* shop stats */}
        <div className="flex flex-col items-center gap-y-3 p-2">
            <div className="flex justify-between items-center gap-x-5">
                <div>
                    <h1 className="text-2xl font-bold font-header">200+</h1>
                    <p className="text-sm font-body text-gray-500">International Brands</p>
                </div>
                {/* vertical line */}
                <div className="h-10 w-0.5 bg-gray-500"></div>
                <div>
                    <h1 className="text-2xl font-bold font-header">2000+</h1>
                    <p className="text-sm font-body text-gray-500">High-quality Products</p>
                </div>
            </div>
            <div className="place-self-center">
                    <h1 className="text-2xl font-bold font-header">30,000+</h1>
                    <p className="text-sm font-body text-gray-500">Happy Customers</p>
            </div>

        </div>

        
    </div>
}
