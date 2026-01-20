import { useEffect, useState } from 'react'
import { useDebounce } from "use-debounce";
import Card from './cards';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router';

import { useNavigate } from 'react-router';


function Navigation() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const [debouncedSearch] = useDebounce (wordEntered, 1000);
    const [debouncedMin] = useDebounce (minPrice, 1000)
    const [debouncedMax] = useDebounce (maxPrice, 1000);
    console.log(debouncedMax)

    const savedData = localStorage.getItem("productsData");

    // useEffect(() => {
    //     const local = JSON.parse(localStorage.getItem("localdata")) || [];
    //     setData(local);
    //   }, []);

    useEffect(() => {
        if (savedData) {
          const updatedData = JSON.parse(savedData);
          setData(updatedData);
        }
      }, [savedData]);

    const deleteData = (index) => {
        setData((prev) =>
            prev.filter((item, itemIndex) => itemIndex !== index)
        );
    };
    const editData = (index) => {

    localStorage.setItem("activeEditIndex", index);
    navigate("/");
    }
    
 
    const filter = data.filter((item) => {
        const searchMatch = `${item.userName} ${item.weight} ${item.price}`.toLowerCase().includes(debouncedSearch.toLowerCase());

        const productPrice = (item.weight);
        console.log(productPrice);
        const minMatch = debouncedMin === "" || productPrice >=Number(debouncedMin);
        const maxMatch = debouncedMax === "" || productPrice <=Number(debouncedMax);

        return searchMatch && minMatch && maxMatch;
    });
    return (
        <div className='relative max-w-350 min-h-screen  border-2 rounded-lg '>
            <div className="bg-[url(/bg.png)] opacity-30 absolute inset-0 -z-10 "></div>
            <div>
                <div className="flex justify-between items-center gap-4 flex-nowrap w-full">
                    <div className="relative w-full sm:w-96" >
                        <input type="search" placeholder="Search The Product InFo" className="w-full h-12 p-4 px-22 pr-12  rounded-full bg-gray-600 text-white border-1 " value={wordEntered} onChange={(e) => setWordEntered(e.target.value)} />
                        {filterData.length > 0 && (
                            <div className='dataResult'>
                                {filterData.slice(0, 15).map((item, index) => {
                                    return (
                                        <p key={index}>{item.userName}</p>
                                    )
                                })}
                            </div>
                        )}
                        <div className=" text-right mr-4 ">
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white mix-blend-lighten"size={22}><IoIosSearch />
                            </button>
                        </div>
                    </div>
                    <div>
                    <button className='mix-blend-lighten' ><Link to="/" ><h4 className='h-12 p-3 pr-10 px-9 rounded-full bg-gray-600 text-white border-1 '>Add To Product </h4>  </Link></button></div>
                    
                    <div className='flex gap-3'>
                        <input type="number" placeholder='Min' className='px-7 w-30 h-10 rounded-full bg-gray-600 border-1 m-2' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                        <input type="number" placeholder='Max' className='px-7 w-30 h-10 rounded-full bg-gray-600 border-1 m-2' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                </div>
            </div>
            <br />
            <div className="mt-6 border-blue-100 p-1  grid grid-cols-1 gap-x-6 gap-y-6 justify around sm:grid-cols-2 lg:grid-cols-4 ">
                {filter.map((value, i) => (
                    <Card key={i} value={value} editData={() => editData(i)} deleteData={() => deleteData(i)} />
                ))}
            </div>
      </div>
    )


}
export default Navigation;


