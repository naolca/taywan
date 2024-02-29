/* eslint-disable @next/next/no-img-element */
import Image from "next/image" 

export default function HomepageImageBrand(){
    return (
        <div className="flex flex-col justify-center items-center w-full bg-background">
            {/* Image of models*/}
            <div className="flex justify-center items-center">
                <img src="boy_and_girl.png" alt="homepage-image-brand" className="w-full h-96"/>
            </div>

            {/* the brands images */}
            <div className="flex justify-evenly items-center p-4 gap-y-3 bg-black flex-wrap">
                <div className="w-1/3">
                    <img src="/versace.png" alt="brand1"  />
                </div>
                <div className="w-1/4">
                    <img src="/zara.png" alt="brand2"/>
                </div>
                <div className="w-1/3">
                    <img src="/gucci.png" alt="brand3"/>
                </div>
                <div className="w-1/2">
                    <img src="/prada.png" alt="brand4"/>
                </div>
                <div className="w-1/2">
                    <img src="/calvinklein.png" alt="brand5" />
                </div>
            </div>


           
        </div>
    )
}