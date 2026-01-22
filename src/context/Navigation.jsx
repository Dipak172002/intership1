import { useContext,  useState } from 'react'
import { useDebounce } from "use-debounce";
import Card from './cards';
import { ProductContext } from '../Usecontext/context';
import { useNavigate } from 'react-router';

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


  



      const deleteData = (index) => {
        setData((prev) =>
          prev.filter((item, itemIndex) => itemIndex !== index)
        );
      };
      const editData = (i) => {
    
        setValues(data[i])
        setActiveEditIndex(i)
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
        <div>
        <div className=' bg-neutral-primary min-h-screen min-w-screen border-b border-default pt-25'>
       
            <div>
                <div className="py-6">
                    <div className=" w-full max-w-sm " >
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
                        {/* <div className="  ">
                            <h4 className="absolute right-40 top-1/2 -translate-y-1/2 text-white mix-blend-lighten"size={22}><IoIosSearch />
                            </h4>
                        </div> */}
                    </div>
                 
                    
                    <div className='flex gap-3  justify-center'>
                        <input type="number" placeholder='Min' className='px-7 w-30 h-10 rounded-full  border-2 m-2' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                        <input type="number" placeholder='Max' className='px-7 w-30 h-10 rounded-full  border-2 m-2' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                </div>
            </div>
            <br />
            <div className=" border-blue-100 border-t-2 py-9  grid grid-cols-1 gap-x-6 gap-y-6 justify around sm:grid-cols-2 lg:grid-cols-4 ">
                {filter.map((value, i) => (
                    <Card key={i} value={value} editData={() => editData(i)} deleteData={() => deleteData(i)} />
                ))}
            </div>
      </div>
      </div>
    )


}
export default Navigation;


