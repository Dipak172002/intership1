import { useContext,  useState } from 'react'
import { useDebounce } from "use-debounce";
import Card from './cards';
import { ProductContext } from '../Usecontext/context';
import { useNavigate } from 'react-router';
import { IoIosSearch } from "react-icons/io";
import {deleteProduct} from "../Api/Api"

function Navigation() {
    const navigate = useNavigate();
    const {data,setData,setValues, setActiveEditIndex} =
     useContext(ProductContext);
    const [filterData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const [debouncedSearch] = useDebounce (wordEntered, 1000);
    const [debouncedMin] = useDebounce (minPrice, 1000)
    const [debouncedMax] = useDebounce (maxPrice, 1000);
    console.log(debouncedMax)

    //    const deleteData = async (id) => {
    //     await axios.delete(`http://localhost:3001/products/${id}`);
    //     setData(data.filter((item) => item.id !== id));
    //    }
  
    // const deleteData = async (id) => {
    //     await fetch(`http://localhost:3001/products/${id}`, {
    //       method: "DELETE",
    //     });
    //     setData(data.filter((item) => item.id !== id));
    //   };
     


      const deleteData = async (id) => {
        const delet = await deleteProduct(id);
        setData((prev) => prev.filter((item, itemIndex) => item.id !== id)
        );
      };


        const editData = (item) => {
        setValues(item)
        setActiveEditIndex(item.id)
        navigate("/");
      }
    
 
    const filter = data.filter((item) => {
        const searchMatch = `${item.userName} ${item.weight} ${item.price}`.toLowerCase().includes(debouncedSearch.toLowerCase());
        const productPrice = (item.price);
        const minMatch = debouncedMin === "" || productPrice >=Number(debouncedMin);
        const maxMatch = debouncedMax === "" || productPrice <=Number(debouncedMax);

        return searchMatch && minMatch && maxMatch;
    });
    return (   
        <div>
        <div className=' bg-neutral-primary min-h-screen min-w-screen border-b border-default pt-25'>
       
            <div>
                <div className="py-6">
                    <div className=" w-full max-w-sm pl-16" >
                        <input type="search" placeholder="Search The Product" className=" h-12  px-6 w-60 rounded-full  text-white border-2 " value={wordEntered} onChange={(e) => setWordEntered(e.target.value)} />
                        {filterData.length > 0 && (
                            <div className='dataResult'>
                                {filterData.slice(0, 15).map((item, index) => {
                                    return (
                                        <p key={index}>{item.userName}</p>
                                    )
                                })}
                            </div>
                        )}
                        <div className="relative w-60  ">
                            <h4 className=" absolute left-50 top-1/2 -translate-y-7.5  text-white mix-blend-lighten"size={22}><IoIosSearch />
                            </h4>
                        </div>
                    </div>
                 
                    
                    <div className='flex gap-3  justify-center'>
                        <input type="number" placeholder='Min' className='px-7 w-30 h-10 rounded-full  border-2 m-2' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                        <input type="number" placeholder='Max' className='px-7 w-30 h-10 rounded-full  border-2 m-2' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                </div>
            </div>
            <br />
            <div className=" border-blue-100 border-t-2 py-9 px-5 grid grid-cols-1 gap-x-6 gap-y-6 justify around sm:grid-cols-2 lg:grid-cols-4 ">
                {filter.map((value, i) => (
                    <Card key={value.id} value={value} editData={() => editData(value)} deleteData={() => deleteData(value.id)} />
                ))}
            </div>
      </div>
      </div>
    )


}
export default Navigation;


