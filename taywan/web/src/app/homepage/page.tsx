import HomePageTopComponent from "@/components/HomePageTopComponent/HomePageTopComponent";
import Header from "../../components/Header/Header";
import HomepageImageBrand from "@/components/HomepageImageBrand/HomepageImageBrand";
import HomepageNewArrivals from "@/components/HomepageNewArrivals/HomepageNewArrivals";
import HomepageTopSelling from "@/components/HomepageTopSelling/HomepageTopSelling";
import StyleBrowsing from "@/components/StyleBrowsing/StyleBrowsing";
import Home from "../page";
import HomepageReviews from "@/components/HomepageReviews/HomepageReviews";


export default function Homepage() {
    return (
        <div className=" w-full">
        <Header />
        <HomePageTopComponent />
        <HomepageImageBrand />
        <HomepageNewArrivals />
        <HomepageTopSelling />
        <StyleBrowsing />
        <HomepageReviews />
        </div>
        
    )
    
}