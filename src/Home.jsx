// import { useEffect, useState } from 'react'
// import './App.css'
// import Navigation from "./Navigation";

// const initialValue = {
//     userName: "",
//     price: "",
//     weight: "",
//     img: "",
// };

// function Home() {
//     const [values, setValues] = useState(initialValue);
//     const [data, setData] = useState(() => {
//         return JSON.parse(localStorage.getItem("products")) || [];
//     });
//     const [activeEditIndex, setActiveEditIndex] = useState(null);

//     useEffect(() => {
//         localStorage.setItem("products", JSON.stringify(data));
//     }, [data]);

//     const handleIamage = (file) => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setValues((prev) => ({ ...prev, img: reader.result }));
//         };
//         reader.readAsDataURL(file);
//     }




//     const multiSubmit = (e) => {
//         e.preventDefault();
//         if (!values.userName) {
//             alert("Fill The Product Name")
//             return
//         }
//         else if (!values.price) {
//             alert("Fill The Product weight ")
//             return
//         }

//         else if (!values.weight) {
//             alert("Fill the Delivery Date")
//             return
//         }
//         else if (!values.img) {
//             alert("Fill the Image")
//             return
//         }
//         else if (values) {
//             alert("Fill The Product Form Succesfully")
//         }

//         if (activeEditIndex !== null) {
//             const updateData = data.map((item, index) => {
//                 if (index === activeEditIndex) {
//                     return values;
//                 }
//                 return item;
//             });

//             setData(updateData);
//             setValues(initialValue);
//             setActiveEditIndex(null);
//             return;
//         }

//         setData([...data, values]);
//         setValues(initialValue);
//     };
//     const deleteData = (index) => {
//         setData((prev) =>
//             prev.filter((item, itemIndex) => itemIndex !== index)
//         );
//     };
//     const editData = (i) => {

//         setValues(data[i])
//         setActiveEditIndex(i)
//     }

//     return (
//         <div  >
//             <div className='container max-w-250 w-full border-2 rounded-lg p-1 relative'>
//                 <div className="bg-[url(/bg.png)] w-full bg-repeat opacity-30 absolute top-0 right-0 left-0 bottom-0 z-[-1]"></div>
//                 <form >
//                     <h1 className="text-4xl font-bold text-border-black text-yellow-400 border-2 border-blue-100 rounded-lg p-8 md" >Purchase The Product</h1><br /><br />
//                     <div className='ui divider p-12'>
//                         <div className='field '>
//                             <div className='feild py-1'>
//                                 <label> Product Name : </label>
//                                 <input type="text" name='userName' value={values.userName} placeholder=' Name...' className=" border-1 border-white-300 px-2 rounded-md w-short" onChange={(event) => setValues({ ...values, userName: event.target.value })} />
//                             </div>
//                             <div className='feild py-1'>
//                                 <label>Product Weight : </label>
//                                 <input type="weight" name='Id' value={values.price} placeholder=' kg/lt/peice..' className="border-1 border-white-300 px-2 rounded-md w-short" onChange={(event) => setValues({ ...values, price: event.target.value })} />
//                             </div>
//                         </div>

//                         <div className='feild py-1'>
//                             <label>Product Price : </label>
//                             <input type="number" name='weight' value={values.weight} placeholder=' price....' className="border-1 border-white-300 px-2 rounded-md w-short " onChange={(event) => setValues({ ...values, weight: event.target.value })} />
//                         </div>
//                         <div>
//                         </div>
//                         <div className="col-span-full p-6  ">
//                             <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-white">Product Image</label>
//                             <input id="file-upload" type="file" name="file-upload" onChange={(e) => handleIamage(e.target.files[0])} className="sr-only" />
//                             <label htmlFor='file-upload'>
//                                 <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/50 px-6 py-10 ">
//                                     <div className="text-center">
//                                         <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" className="mx-auto size-10 text-gray-600">
//                                             <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" fillRule="evenodd" />
//                                         </svg>
//                                         <div className=" feild mt-4 flex text-sm/6 text-gray-400">
//                                             <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300">
//                                                 <span className='text-blue-500'>Upload a Images</span>
//                                             </label>
//                                             <p className="pl-1 text-green-300">or drag and drop</p>
//                                         </div>
//                                         <p className="text-xs/5 text-gray-100">PNG, JPG, GIF up to 10MB</p>
//                                     </div>
//                                 </div>
//                             </label>
//                         </div>

//                         <button className=' border-2 border-blue-100 rounded-lg p-1' onClick={(e) => multiSubmit(e)}>{activeEditIndex !== null ? 'Update' : 'Add'}</button>
//                     </div>
//                 </form>
//                 <Navigation
//                     data={data}
//                     deleteData={deleteData}
//                     editData={editData}
//                 />




//             </div >

//         </div >
//     );

// }
// export default Home;


