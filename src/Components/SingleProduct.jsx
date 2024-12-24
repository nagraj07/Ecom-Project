import { StarFilled, HeartOutlined, ShoppingCartOutlined, CheckOutlined, CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, addtoCart, removeQuantity, removetoCart } from '../Redux/Slice/CartSlice'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const products = useSelector(state => state.data.products)
    const cartItems = useSelector(state => state.cart)
    console.log(cartItems)

    const { id } = useParams();
    const dispatch = useDispatch();

    const product = products.find(item => item.id === parseInt(id));

    const quantityProduct = cartItems.find(cartItem => cartItem.id === product.id);

    console.log(quantityProduct);

    if (!product) {
        return <p>Loading product details...</p>; // Show loading or error if product not found
    }

    return (
        <>
            <div>
                <h1 className='text-center text-3xl font-bold p-5 text-indigo-900 bg-footer-texture bg-gray bg-opacity-90'>Product Details</h1>

                <div className='border border-black px-8 py-4'>

                    {/* {product && product.map(item => ( */}

                    <div key={product.id} className='border border-black flex flex-wrap flex-col sm:flex-row'>
                        <div className='border w-1/3 h-[29rem]'>
                            <div className='overflow-hidden'>
                                <img className='w-full h-[26rem]  transition-transform duration-300 ease-in-out transform hover:scale-105' src={product.image} alt={product.title} />
                            </div>
                            <div className='flex font-semibold'>
                                <button type="button" className='bg-green-400 w-60' onClick={() => dispatch(addtoCart(product))}><ShoppingCartOutlined />Add to Cart</button>
                                <button type="button" className='bg-blue-400 w-60'>Buy Now</button>
                                <button type="button" className='bg-red-200 p-3 px-4'><HeartOutlined /></button>
                            </div>
                        </div>


                        <div className='border w-2/3 h-[29rem] p-5 space-y-1'>
                            <p><StarFilled className='text-yellow-500' /><StarFilled className='text-yellow-500' /><StarFilled className='text-yellow-500' /><StarFilled className='text-yellow-500' /><StarFilled className='text-yellow-500' /> {product.review}</p>
                            <h1 className='font-bold text-xl'>{product.title}</h1>
                            <p className='text-sm'>{product.description}</p>
                            <p>${product.price} <del>$280.99</del> <span>(50%off)</span> </p>
                            <p><CheckCircleOutlined /> In Stock</p>
                            <p><CheckCircleOutlined /> Free Delivery Available</p>
                            <p><CheckCircleOutlined /> Sales 10% Off Use Code: FASHION10</p>

                            <div className='space-y-1'>
                                <h2 className='font-bold'>Available offers:</h2>
                                <p><b>Bank Offer</b> 10% instant discount on Fedaral Banl Debit Cards, up to $3000 on orders of $5,000 and above </p>
                                <p><b>Bank Offer</b> 10% instant discount on Fedaral Banl Debit Cards, up to $3000 on orders of $5,000 and above </p>
                            </div>


                            <div>Quantity: <span className=''>
                                <button
                                    className='border w-10 h-10'
                                    onClick={() => dispatch(addQuantity(product))}
                                >   +

                                </button>

                                {/* {quantityProduct && quantityProduct.map(item => ( */}
                                    <button className='border w-10 h-10'>{quantityProduct && quantityProduct.quantity ? quantityProduct.quantity : 0} {console.log(quantityProduct.quantity)}</button>

                                {/* ))} */}
                                <button
                                    className='w-10 h-10 border'
                                    onClick={() => dispatch(removeQuantity(product))}
                                >   -

                                </button>
                            </span>
                            </div>
                            <div className='flex flex-wrap space-x-16'>
                                <div >
                                    <h2>Sizes:</h2>
                                    <div className='flex flex-wrap gap-2 m-1'>
                                        <button type="button" className='border w-6 h-6 text-md rounded-full bg-gray-100 text-blue-500'>S</button>
                                        <button type="button" className='border w-6 h-6 text-md rounded-full bg-gray-100 text-blue-500'>M</button>
                                        <button type="button" className='border w-6 h-6 text-md rounded-full bg-gray-100 text-blue-500'>L</button>
                                        <button type="button" className='border w-6 h-6 text-md rounded-full bg-gray-100 text-blue-500'>XL</button>
                                    </div>
                                </div>

                                <div>
                                    <h2>Colors:</h2>
                                    <div className='flex flex-wrap gap-2 m-1'>
                                        <button type="button" className='border w-6 h-6 text-md rounded-full bg-red-400'></button>
                                        <button type="button" className='border w-6 h-6 text-md rounded-full bg-blue-300'></button>
                                        <button type="button" className='border w-6 h-6 text-md rounded-full bg-black'></button>
                                        <button type="button" className='border w-6 h-6 text-md rounded-full bg-gray-300'></button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* ))} */}

                </div>

            </div>
        </>
    )
}

export default SingleProduct;