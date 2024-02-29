'use client';

import { useGetAllProductsQuery } from "@/redux/slices/products_slice";
import ClothComponent from "../ClothComponent/ClothComponent";

export default function HomepageTopSelling() {
    const {data, isLoading, error}= useGetAllProductsQuery({});

    if (error) {
        return <div>Error</div>
    }
    else if (isLoading) {
        return <div>Loading...</div>
    } 
    if (data) {
    return (
        <div className="p-12 flex flex-col gap-y-5 w-screen">
            {/* New Arrivals Text */}
            <div className="text-4xl font-bold font-header text-black text-center">
                TOP SELLING
            </div>

        {/* iterate through the data and display the products */}
        <div className="flex flex-row gap-x-5 overflow-x-auto ">
            {data.map((product:any) => {
                return <ClothComponent key={product.id} {...product} />
                   
                
            })}   
        </div>

        <div className="flex justify-center items-center h-[45px] border border-black rounded-3xl w-full group-hover:bg-black group-hover:text-white">
            <button className="  font-header text-xl w-full h-1/2 rounded-full">View All</button>
        </div>
    </div>
    )
    }
  
    
}