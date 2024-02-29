import ReviewCard from "../ReviewCard/ReviewCard";

export default function HomepageReviews() {
    return (
        <div className="flex flex-col p-4">
            {/* the header text*/}
            <div className="flex flex-col justify-center  p-4">
                <h1 className="text-4xl font-bold text-left font-header">OUR HAPPY <br /> CUSTOMERS</h1>
            </div>

            <ReviewCard/>  

        
            
        </div>
    )
}