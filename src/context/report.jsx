import { useContext, useEffect } from "react";
import { ProductContext } from "../Usecontext/context";
import axios from "axios";

export default function Report() {
  const { data ,setData} = useContext(ProductContext);


  // const getUserData = async()=>{
  //   let response = await fetch("http://localhost:3001/products");
  //   response =await response.json();
  //   console.log(response);
  //   setData(response)
  // }
  const getUserData = async() =>{
    const response = await axios.get("http://localhost:3001/products")
    setData(response.data)
  }
  useEffect (()=>{
    getUserData()
  },[])

  return (
    <div className="pt-45 min-h-screen  min-w-screen py-17 px-6">
      <h1 className="text-2xl font-bold mb-6">📊 Product Report</h1>

      {data.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table className="w-full border border-gray-300 ">
          <thead className="">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Weight</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td className="border px-2 ">{item.userName}</td>
                <td className="border p-2">{item.weight}</td>
                <td className="border p-2">₹ {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
   
  );
}
