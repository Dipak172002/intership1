import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import React from "react";
function Card({ value, editData, deleteData, }) {

    return (
        <div className="border-2 border-white/180 rounded-lg ">
            <img src={value.img} alt="" className="object-cover rounded-lg  aspect-squre lg:h-80 w-full mb-3" />
            <h3 className="px-2 mx-5 font-semibold border border-blue-100 rounded-lg text-center">{value.userName}</h3>
            <div className="p-2 space-y-2" >
                <div className="flex justify-around" >
                    <h4 className="text-white px-2 font-semibold border border-blue-100 rounded-lg">₹{value.price}</h4>
                    <h4 className="text-white px-2 font-semibold border border-blue-100 rounded-lg">{value.weight}</h4>
                </div>
            </div>
            <div className="flex gap-2 justify-center mb-2">
                <button className="  px-4 py-2 rounded-lg border-2 " onClick={() => editData()}> <FiEdit3 /></button>
                <button className=" px-4 py-2 rounded-lg border-2"  onClick={() => deleteData()}> <MdDelete /></button>
            </div>
        </div>
    )
}
export default Card;


