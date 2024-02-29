import { useGetReviewsQuery } from "../../redux/slices/reviews_slice";


export default function Rating(productId: any) {

  

    const { data, isLoading, error } = useGetReviewsQuery(productId.productId);
    if (error) {
        return <div>Error</div>
    }
    else if (isLoading) {
        return <div>Loading...</div>
    }
    if (data){

    return (<div className="flex justify-center gap-x-1">
            {Array.from({ length: data.length }).map((_, index) => (
                
              <div key={index}>
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" className="w-3 h-3 text-yellow-700 cursor-pointer">
                        <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"></path>
                    </svg></span>

              </div>
              

   
            ))}
                        <div className="pl-2">{data.length}/5</div>
        </div>
          
    )
            }
}