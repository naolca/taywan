import Rating from "../Rating/Rating"
import Image from "next/image"

export default function ClothComponent(cloth: any) {

    return (
        
        <div className="flex flex-col justify-center gap-y-3">
            <div className="flex justify-center border rounded-2xl w-[200px] h-[200px] ">
                <img className="rounded-2xl" src={ "boy_and_girl.png"} alt="cloth"  />
                </div>
            <div className="flex justify-start">
                <p className="text-2xl font-bold">{cloth.name}</p>
                </div>
                <div className="rating self-start">
                 
                    <Rating productId = {cloth._id} />
            
                </div>
        </div>
    )


}

    