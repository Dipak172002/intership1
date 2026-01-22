import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {  ChevronLast } from "lucide-react"
import { useContext } from "react";
import { ProductContext } from "../Usecontext/context";
import SideBar from "./sidebar";
import IconBar from "./Iconbar";




function Header() {

    const {isOpen,setIsOpen,setShowIcons,showIcons} = useContext(ProductContext)



    const toggleSidebar = () => {
        if (isOpen) {
          setIsOpen(false);
          setShowIcons(true);
        } else if (showIcons) {
          setShowIcons(false);
        } else {
          setIsOpen(true);
        }
      };


    return (
        
        <div className="">
            <div>
        <header >
        {/* className="flex gap-4 "  */}

            <nav className=" fixed z-50 w-full  border 2 bg-rose-200">
                <div className="flex gap-4 border-2 text-gray-900 px-6  flex justify-between items-center" >
            <Link
                to="/" >
                <img src="/dis.png" className="w-40 h-26" /></Link>
            <h2 className=" font-bold border-b p-2 text-center text-gray-900  ">
                Product Manager
            </h2>
                <div className="hidden sm:block">
                <Link
                    to="/"
                    className=" px-2 py-2 rounded-lg font-bold text-gray-900 hover:bg-pink-400"
                >
                    Home
                </Link>
                <Link
                    to="/navigation"
                    className="px-2 py-2 rounded-lg font-bold text-gray-900 hover:bg-blue-300"
                >
                    Products
                </Link>
                <Link
                    to="/about"
                    className="px-2 py-2 rounded-lg font-bold text-gray-900 hover:bg-green-300"
                >
                    About
                </Link>
                <Link
                    to="/report"
                    className="px-2 py-2 rounded-lg font-bold text-gray-900 hover:bg-cyan-200"
                >
                    Report
                </Link>
                <Link
                    to="/setting"
                    className="px-2 py-2 rounded-lg font-bold text-gray-900 hover:bg-orange-300"
                >
                    Setting
                </Link>
                <Link
                    to="/help"
                    className="px-2 py-2 rounded-lg font-bold text-gray-900 hover:bg-red-400"
                >
                    Help
                </Link>
               
                </div>
                
                <button
          className="block sm:hidden text-gray-900 " onClick={toggleSidebar}
        >
          <RxHamburgerMenu size={22} />
        </button>
                </div>
                
            
            </nav>
        </header>
        <SideBar/>
        <IconBar/>
        </div>
    </div>
      
        
        


        

        
        
    );
}

export default Header;






