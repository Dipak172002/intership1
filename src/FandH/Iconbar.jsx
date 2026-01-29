import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {  ChevronLast } from "lucide-react"
import { useContext } from "react";
import { ProductContext } from "../Usecontext/context";

export default function IconBar (){

const {isOpen,setIsOpen,setShowIcons,showIcons}=useContext(ProductContext)


return(

    <div className={ `${showIcons && !isOpen ? "block" : "hidden"} sm:hidden fixed inset-0 text-right  pt-27 `}>
    <div className="w-10 py-8 bg-cyan-200  absolute left-0 min-h-screen rounded-b-lg border-r-2 " >
    <button className="block sm:hidden font-bold text-gray-900" onClick={() =>{setIsOpen(true);
                           setShowIcons(false);}}
                           ><ChevronLast/>
        </button>
        
    <Link
        to="/"
        className="flex gap-4 px-2 py-7 pt-14 font-bold text-gray-900 rounded-lg   block"
    >
       <FaHome />

    </Link>
    <Link
        to="/navigation"
        className="flex gap-4  px-2 pt-6 rounded-lg font-bold text-gray-900 block"
    >
        <AiOutlineProduct /> 
    </Link>
    <Link
        to="/about"
        className="flex gap-4 px-2 pt-12 rounded-lg font-bold text-gray-900 block"
    >
        <AiFillBulb /> 

    </Link>
    <Link
        to="/report"
        className="flex gap-4 px-2 py-11 rounded-lg font-bold text-gray-900 block"
    >
        <MdReport />
        

    </Link>
    <Link
        to="/setting"
        className="flex gap-4 px-2 py-2 rounded-lg font-bold text-gray-900 block"
    >
        <MdOutlineSettings /> 
    </Link>
    <Link
        to="/help"
        className="flex gap-4 px-2 py-10 rounded-lg font-bold text-gray-900 block"
    >
        <IoIosHelpCircleOutline /> 
       

    </Link>
   </div>
   </div>
)
}