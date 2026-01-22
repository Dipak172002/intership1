import { ChevronFirst} from "lucide-react"
import { Link } from "react-router";
import { useContext, useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { ProductContext } from "../Usecontext/context";


export default function SideBar (){
    const {setIsOpen,setShowIcons,isOpen} = useContext(ProductContext)



return(
<div className={ `${isOpen ? "block" : "hidden"} sm:hidden fixed inset-0 text-right  pt-27 `}>
<div className="w-38 py-8 bg-cyan-200 flex-col absolute left-0 min-h-screen rounded-b-lg border-r-2 ">
<button onClick={() =>{ 
setIsOpen(false); 
setShowIcons(true) ;}}
className="block sm:hidden absolute right-0 font-bold text-gray-900"><ChevronFirst/>
    </button>
    
<Link
    to="/"
    className="flex gap-4 px-2 py-5 pt-14 rounded-lg font-bold text-gray-900 block"
>
   <FaHome />Home 

</Link>
<Link
    to="/navigation"
    className="flex gap-4  px-2 py-5 font-bold text-gray-900 block"
>
    <AiOutlineProduct /> Dashboard
</Link>
<Link
    to="/about"
    className="flex gap-4 px-2 py-5 font-bold text-gray-900 block"
>
    <AiFillBulb /> About

</Link>
<Link
    to="/report"
    className="flex gap-4 px-2 py-5 font-bold text-gray-900 block"
>
    <MdReport />
    Report

</Link>
<Link
    to="/setting"
    className="flex gap-4 px-2 py-5 font-bold text-gray-900 block"
>
    <MdOutlineSettings /> Setting

</Link>
<Link
    to="/help"
    className="flex gap-4 px-2 py-5 font-bold text-gray-900 block"
>
    <IoIosHelpCircleOutline /> Help
   

</Link>

<div className= "absolute bottom-25 " >
   
        <div className="py-5">
            <h5 className="font-bold text-xs text-gray-900">Product Manager</h5>
            <span className="font-semibold text-xs text-gray-900">drsonawane@gmail.com</span>
        </div>
        </div>
</div>

</div>
)}