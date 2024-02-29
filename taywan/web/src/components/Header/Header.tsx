import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
    return (
        <div className="flex justify-between p-2  items-center w-full">
            {/* Hamburger menu and Text Logo */}
            <div className="flex items-center space-x-4">
                {/* create hamburger menu */}
                <div>
                    <RxHamburgerMenu className="w-8 h-8"/>
                </div>
                
                {/* Text Logo */}
                <div>
                    <h1 className="text-xl font-bold">SHOP.CO</h1>
                </div>
            </div>

            {/* Icons on the far right with space between them */}
            <div className="flex items-center space-x-4">
                <IoSearchSharp className="w-6 h-6"/>
                <FiShoppingCart className="w-6 h-6"/>
                <FaRegUserCircle className="w-6 h-6"/>
            </div>
            
        </div>
    )
}