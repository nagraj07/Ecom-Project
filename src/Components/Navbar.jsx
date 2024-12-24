import React, { useState } from "react";
import { CloseOutlined, DownOutlined, SearchOutlined, ShoppingCartOutlined, StarFilled, SunOutlined, } from "@ant-design/icons";
import Cartpage from "./Cartpage";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredData } from "../Redux/Slice/FilteredSlice";

const Navbar = () => {

    const dispatch = useDispatch();

    // State For Dailog Box
    const [opendailogbox, setOpendailogbox] = useState(false)

    const cartItems = useSelector(state => state.cart)
    const Products = useSelector(state => state.data.products)

    // console.log(Products)

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [search, setSearch] = useState("")

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleChange = (e) => {
        setSearch(e.target.value);

        //filtering data for searchbar 

        const filteredData = Products.filter((item) =>
        (item.title?.toLowerCase().includes(search.toLowerCase()) ||
            item.image?.toLowerCase().includes(search.toLowerCase()) ||
            item.description?.toString().toLowerCase().includes(search.toLowerCase()) ||
            item.price?.toString().toLowerCase().includes(search.toLowerCase())))

        // console.log(`Filtered Data : ${filteredData}`)

        dispatch(setFilteredData(filteredData));
    }




    // Categories for Navbar

    const category = [...new Set(Products.map(item => item.category))]
    // console.log(category)


    // rating for Navbar
    const rating = [...new Set(Products.map(item => item.rating.rate))]

    return (
        <>
            <div className="flex flex-wrap justify-between p-4 px-4 fixed z-10 w-full dark:to-black bg-white sm:px-4">
                <div className="hidden sm:flex">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFHrUMfnULhvTeUH4LZ_U1m1JM6YzGNJMXrYv6uSSAaoUcJ7--" alt="" className="w-14 h-8 rounded-full" />
                    <h2 className="font-bold text-indigo-950 text-xl hidden sm:block ">FashionMart</h2>
                </div>

                <div className="flex flex-wrap">
                    <ul className="flex space-x-4">
                        {category.map((item) => (
                            <div className="relative inline-block space-x-4">

                                <li onMouseMove={toggleDropdown}><button className="hover:text-blue-400 font-medium px-2">{item} <DownOutlined className="size-3" /></button></li>
                                {rating.map((item) => (


                                    <div style={{ backgroundColor: "lightgray", display: isDropdownVisible ? "block" : "none", position: "absolute", }}>
                                        <a
                                            href="#"
                                            className="py-2 px-2 block border-collapse border"
                                            onMouseOver={(e) => (e.target.style.backgroundColor = "lightsteelblue")}
                                            onMouseOut={(e) => (e.target.style.backgroundColor = "lightgray")}
                                        >
                                            {item}
                                        </a>
                                        <a
                                            href="#"
                                            className="py-2 px-2 block"
                                            onMouseOver={(e) => (e.target.style.backgroundColor = "lightsteelblue")}
                                            onMouseOut={(e) => (e.target.style.backgroundColor = "lightgray")}
                                        >
                                            {item}
                                        </a>
                                        <a
                                            href="#"
                                            className="p-2 px-2 block"
                                            onMouseOver={(e) => (e.target.style.backgroundColor = "lightsteelblue")}
                                            onMouseOut={(e) => (e.target.style.backgroundColor = "lightgray")}
                                        >
                                            {item}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </ul>
                </div>




                <div className="flex space-x-3 ">

                    <p className="mt-1 border border-black rounded-sm px-1 flex items-center">

                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFHrUMfnULhvTeUH4LZ_U1m1JM6YzGNJMXrYv6uSSAaoUcJ7--" alt="logo" className="w-8 h-6" />
                        <input type="search" placeholder="FashionMart" name="search" id="search" value={search}
                            onChange={handleChange}
                            className="h-full bg-transparent outline-none text-black" />

                        {/* {filteredData.length > 0 && (
                            <div className="absolute top-12 bg-white shadow-lg rounded-md w-full max-h-40 overflow-y-auto">
                                {filteredData.map((item) => (
                                    <div key={item.id} className="px-2 py-1 hover:bg-gray-200">
                                        {item.title} - ${item.price}
                                    </div>
                                ))}
                            </div>
                        )} */}
                    </p>

                    <Link
                        to={"/cartpage"}><ShoppingCartOutlined
                            className="text-xl mt-2" />
                        <sup className="bg-gray-300 rounded-full text-xs font-semibold px-[2px]">
                            {cartItems.length}
                        </sup>
                    </Link>

                    <button>
                        <SunOutlined className="hover:animate-spin" />
                    </button>

                    <button type="button" onClick={() => setOpendailogbox(true)}>
                        <img src="https://pngimg.com/uploads/simpsons/simpsons_PNG95.png" alt="" className="w-8 h-8 bg-slate-300 rounded-3xl" />
                    </button>

                </div>

                <dialog open={opendailogbox} onClose={() => setOpendailogbox(false)} className="bg-stone-200 border border-black p-4 w-72 h-80  left-auto right-1 top-16 mt-1 rounded-lg space-y-2">
                    {/* <h1> Hello from dev duud</h1> */}
                    <button onClick={() => setOpendailogbox(false)} type="button" className="absolute top-1 right-1"><CloseOutlined /></button>
                    <div className="flex space-x-2">
                        <img src="https://pngimg.com/uploads/simpsons/simpsons_PNG95.png" alt="" className="w-8 h-8 bg-slate-400 rounded-3xl" />
                        <h1 className="content-center font-bold">Nagraj Hajagulkar</h1>
                    </div>
                    <div className="border-b border-gray-500">
                        <p>Mobiel Number:</p>
                        <p>+917975521912</p>
                    </div>

                    <div className="border-b border-gray-500">
                        <p>Email ID:</p>
                        <p>hnagraj95@gmail.com</p>
                    </div>
                </dialog>
            </div>

        </>
    )
}

export default Navbar;