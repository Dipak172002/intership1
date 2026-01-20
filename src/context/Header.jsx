import { Link } from "react-router";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";




function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        
        <div className="">
        <header >
        {/* className="flex gap-4 "  */}

            <nav className="  border 2 rounded-l-lg rounded-t-lg text-white   ">
                <div className="flex gap-4  px-6  flex justify-between items-center" >
            <Link
                to="/" >
                <img src="/dis.png" className="w-40 h-26" /></Link>
            <h2 className=" font-bold border-b p-2   ">
                Product Manager
            </h2>
                <div className="hidden sm:block">
                <Link
                    to="/"
                    className=" px-2 py-2 rounded-lg hover:bg-pink-200"
                >
                    Home
                </Link>
                <Link
                    to="/navigation"
                    className="px-2 py-2 rounded-lg hover:bg-blue-300"
                >
                    Products
                </Link>
                <Link
                    to="#"
                    className="px-2 py-2 rounded-lg hover:bg-green-300"
                >
                    About
                </Link>
                <Link
                    to="#"
                    className="px-2 py-2 rounded-lg hover:bg-orange-300"
                >
                    Setting
                </Link>
               
                </div>
                <button onClick={() =>setIsOpen(!isOpen)}className="block sm:hidden"><RxHamburgerMenu />
                
                </button>
                </div>
                
            
            </nav>
        </header>
        
        

        <div className={ `${isOpen ? "block" : "hidden"} sm:hidden inset-0 text-right `}>
                    <div className="w-10 py-3 absolute right-0 rounded-b-lg border-2">

                    <Link
                        to=""
                        className=" px-2 py-2 rounded-lg   block"
                    >
                       <FaHome />

                    </Link>
                    <Link
                        to="/navigation"
                        className="px-2 py-2 rounded-lg block"
                    >
                        <AiOutlineProduct />
                    </Link>
                    <Link
                        to="#"
                        className="px-2 py-2 rounded-lg block"
                    >
                        <AiFillBulb />

                    </Link>
                    <Link
                        to="#"
                        className="px-2 py-2 rounded-lg  block"
                    >
                        <MdOutlineSettings />

                    </Link>
                    </div>
                    </div>
                    </div>
        
        
    );
}

export default Header;
