import { CloseCircleFilled, MinusCircleOutlined, MinusOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAll, removetoCart, addQuantity, removeQuantity } from '../Redux/Slice/CartSlice'

const Cartpage = () => {

    const cartItems = useSelector(state => state.cart)
    console.log(cartItems)
    const dispatch = useDispatch();

    return (
        <>
            <div className='border-2 p-3 m-1 flex flex-wrap bg-cyan-100'>
                
                <div className='w-8/12 '>
                    <h1 className='text-center font-bold text-2xl '>Cart Page</h1>
                    <table className='w-full  table-auto m-2'>
                        <thead>
                            <tr className='text-xl'>
                                <th> Cart Items</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody className=''>
                            {cartItems && cartItems.map(item => (

                                <tr key={item.id} className='text-center border-y border-y-cyan-800 '>
                                    <td className='text-left'>
                                        <div className='flex flex-wrap space-x-3 py-3'>
                                            <div>
                                                <img className='w-28 h-28' src={item.image} alt="" />
                                            </div>
                                            <div className='w-[60%]'>
                                                <h3 className='font-semibold'>{item.title}</h3>
                                                <p><text className='font-semibold'>color: </text> Blue/ Size:5</p>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='space-x-1'>
                                        <button type="button" className='text-xs ' onClick={() => dispatch(removeQuantity(item))}><MinusCircleOutlined /></button>
                                        <text className='bg-gray-200 px-2 border border-black'>{item.quantity}</text>
                                        <button type="button" className='text-xs ' onClick={() => dispatch(addQuantity(item))}><PlusCircleOutlined /></button>
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button
                                            className=' rounded-full text-md'
                                            onClick={() => dispatch(removetoCart(item))}
                                        >
                                            <CloseCircleFilled />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <div className='w-4/12 justify-items-center'>
                    <div className="w-[90%] h-content mt-10  bg-orange-300 rounded-lg shadow-lg p-5 sticky top-0 space-y-5">
                        <h1 className="text-left text-2xl font-bold m-2 ">Cart Total</h1>
                        <div className="flex flex-wrap justify-between">
                            <div className="text-md space-y-1 font-semibold">
                                <h2>Subtotal</h2>
                                <h2>Design by Fluttertop</h2>
                                <h2>Discount</h2>
                                <h2>Total</h2>
                            </div>
                            <div className="text-md font-bold">
                                <h2>$71.50</h2>
                                <h2 className="text-sm">Free</h2>
                                <h2 className="text-green-500">-$4.0</h2>
                                <h2 className="text-lg">$67.50</h2>
                            </div>
                        </div>
                        <button className="font-bold text-md text-black  px-10 py-1  rounded-[20px] bg-white shadow-md">
                            Apply
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cartpage