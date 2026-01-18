// import { use, useState } from 'react'
// import { useDebounceValue } from 'usehooks-ts'
// import Card from './cards';
// import { IoIosSearch } from "react-icons/io";

// import { useNavigate } from 'react-router';

// function Navigation({data =[],deleteData,editData}) {
//     const [filterData, setFilterData] = useState([]);
//     const [wordEntered, setWordEntered] = useState("");

//     const [minPrice, setMinPrice] = useState("")
//     const [maxPrice, setMaxPrice] = useState("")

//     const [debouncedSearch] = useDebounceValue(wordEntered, 500);
//     const [debouncedMin] = useDebounceValue(minPrice, 500)
//     const [debouncedMax] = useDebounceValue(maxPrice, 500);
    
 
//     const filter = data.filter((item) => {
//         const searchMatch = `${item.userName} ${item.weight} ${item.price}`.toLowerCase().includes(debouncedSearch.toLowerCase());
//         const productPrice = Number(item.price);
        

//         const minMatch = debouncedMin === "" || productPrice >=Number(debouncedMin);
//         const maxMatch = debouncedMax === "" || productPrice <=Number (debouncedMax);

//         return searchMatch && minMatch && maxMatch;
//     });
//     return (
//         <div className='relative max-w-350 min-h-screen  px-6 border-2 rounded-lg p-4'>
//             <div className="bg-[url(/bg.png)] opacity-30 absolute inset-0 -z-10 "></div>
//             <div>
//                 <div className="flex justify-between items-center gap-4 flex-nowrap w-full">
//                     <div className="relative w-full sm:w-96" >
//                         <input type="search" placeholder="Search The Product InFo" className="w-full h-12 p-4 pr-12  rounded-full bg-gray-600 text-white border-1 " value={wordEntered} onChange={(e) => setWordEntered(e.target.value)} />
//                         {filterData.length > 0 && (
//                             <div className='dataResult'>
//                                 {filterData.slice(0, 15).map((item, index) => {
//                                     return (
//                                         <p key={index}>{item.userName}</p>
//                                     )
//                                 })}
//                             </div>
//                         )}
//                         <div className=" text-right mr-4 ">
//                             <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white"size={22}><IoIosSearch />
//                             </button>
//                         </div>
//                     </div>
//                     <div className='flex gap-3'>
//                         <input type="number" placeholder='Min' className='px-7 w-30 h-10 rounded-full bg-gray-600 border-1 m-2' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
//                         <input type="number" placeholder='Mix' className='px-7 w-30 h-10 rounded-full bg-gray-600 border-1 m-2' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
//                     </div>
//                 </div>
//             </div>
//             <br />
//             <div className="mt-6 border-blue-100 p-1  grid grid-cols-1 gap-x-6 gap-y-6 justify around sm:grid-cols-2 lg:grid-cols-3 ">
//                 {filter.map((value, i) => (
//                     <Card key={i} value={value} editData={() => editData(i)} deleteData={() => deleteData(i)} />
//                 ))}
//             </div>
//       </div>
//     )


// }
// export default Navigation;


