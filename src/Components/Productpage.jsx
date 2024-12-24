import { HeartFilled, StarFilled } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../Redux/Slice/CartSlice';
import { addproducts } from '../Redux/Slice/DataSlice';
// import { Link } from 'react-router-dom';

const Productpage = () => {

    // const data = useSelector(state => state.cart)
    // console.log(data);

    const filteredData = useSelector(state => state.searchingdata)
    // console.log(filteredData);


    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);
    const [isadded, setIsAdded] = useState({});
    const [isliked, setIsLiked] = useState({})


    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                // console.log("API Response:", res);

                const productsData = Array.isArray(res.data) ? res.data : res.data.products; // Adjust if data is nested

                setProduct(productsData);
                dispatch(addproducts(productsData)); // Dispatch only the array to Redux
            })
            .catch(err => {
                console.log("Error fetching products:", err);
            });
    }, [dispatch]);


    const handleAddtoCart = (item) => {
        setIsAdded((prev) => ({
            ...prev,
            [item.id]: !prev[item.id],
        }));
        dispatch(addtoCart(item));
       
    }

    const handleLiked = (item) => {
        setIsLiked((prev) => ({
            ...prev,
            [item.id]: !prev[item.id], // Toggle liked status
        }));
    };

    const dataToDisplay = filteredData.length > 0 ? filteredData : product;
    console.log(filteredData)
    console.log(product)

    return (
        <>
        {/* {filteredData.length > 0 && ( */}
            <div className=' flex flex-wrap justify-evenly gap-2 sm:gap-4 py-4 bg-gray-200 shadow-xm w-9/12'>
                        
                {dataToDisplay && dataToDisplay.map((item) => (
                    <div
                    key={item.id}
                    className='border border-black bg-white rounded-lg w-32 h-56 sm:w-52 sm:h-72 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300'
                >
                    <Link to={`/productdetails/${item.id}`}>
                        <div className='w-full h-1/2 sm:h-36 items-center'>
                            <img className='w-full h-full rounded-t-lg border-b border-black' src={item.images} alt="" />
                        </div>
                    </Link>
                
                    <div>
                        <h2 className='text-sm font-semibold sm:text-md w-full h-10 sm:h-[4.6em] overflow-hidden'>{item.title}</h2>
                
                        <div className='flex justify-between text-sm sm:text-md m-2 px-2'>
                            <p className='text-green-700 font-bold'>${item.price}</p>
                            <p>
                                {item.rating} <span><StarFilled className='text-yellow-500' /></span>
                            </p>
                        </div>
                
                        <div className='flex justify-evenly'>
                            <button
                                type="button"
                                className='text-sm sm:text-md px-2 sm:px-5 rounded-lg bg-blue-600 text-white shadow-sm shadow-black hover:bg-blue-800'
                                onClick={() => handleAddtoCart(item)}
                            >
                                {isadded[item.id] ? "Add to Cart" : "Add to Cart"}
                            </button>
                
                            <button
                                type="button"
                                className='px-2 rounded-lg bg-teal-600 text-white shadow-sm shadow-black hover:bg-teal-800'
                                onClick={() => handleLiked(item)}
                            >
                                {isliked[item.id] ? <HeartFilled className='text-red-500' /> : <HeartFilled />}
                            </button>
                        </div>
                    </div>
                </div>
                
                ))}

            </div>
        {/* )} */}
        </>
    )
}

export default Productpage;