import { SearchOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Sidemenu = () => {

    const AllProducts = useSelector(state => state.data.products)
    // const filteredData = useSelector(state => state.searchingdata)
    

    const [searchProducts, setSearchProducts] = useState('');
    const [searchBrand, setSearchBrand] = useState('');

    // List of all Products
    // const products = [
    //     'Grocery', 'Fashion', 'Watches', 'Electronics', 'Furniture', 'applicence', 'kids', 'grocery', 'fashion', 'watches', 'kids'
    // ]

    const category = [...new Set(AllProducts?.map(item => item.category).filter(Boolean))]

    // List of all brands
    // const brands = [
    //     'Boat', 'Oneplus', 'Realme', 'Sony', 'JBL', 'Fossil', 'Citizen', 'Casio', 'Rolex', 'Boat', 'Oneplus', 'Realme', 'Sony', 'JBL',
    //     'Fossil', 'Citizen', 'Casio', 'Rolex'
    // ];

    const brands = [...new Set(AllProducts.map(item => item.brand).filter(Boolean))]


    // Filtered products based on search input
    const filteredProducts = category && category.filter((product) =>
        product.toLowerCase().includes(searchProducts.toLowerCase())
    );

    const SearchProducts = (e) => {
        setSearchProducts(e.target.value);
    };

    // Filtered brands based on search input
    const filteredBrands = brands && brands.filter((brand) =>
        brand.toLowerCase().includes(searchBrand.toLowerCase())
    );

    const SearchBrand = (e) => {
        setSearchBrand(e.target.value);
    };

    return (

        <>
            <div className='w-3/12 border border-gray-300 border-collapse'>
                <div className='border border-gray-300 p-4 space-y-2'>
                    <div className='flex justify-between flex-wrap'>
                        <h4 className='font-bold'>Filters</h4>
                        <h4>Clear All</h4>
                    </div>
                    <div className='w-full border border-gray-500 rounded-sm'>
                        <SearchOutlined className='px-2' />
                        <input
                            type="search" name="" id="" value={searchProducts} placeholder='search products...'
                            className='w-[87%] bg-transparent outline-none  '
                            onChange={SearchProducts}
                        />
                    </div>
                </div>

                <div className='border border-gray-300 p-4 space-y-2'>
                    <h4 className='font-bold'>Products</h4>
                    <div className='flex flex-col items-start space-y-1 h-64 overflow-auto '>
                        {filteredProducts.map((products, index) => (
                            <p key={index}>
                                <button type="button">{products}</button>
                            </p>
                        ))}
                       
                    </div>
                </div>


                <div className='border border-gray-300 p-4 space-y-2'>
                    <h4 className='font-bold'>Price</h4>
                    <input
                        type="range" name="" id=""
                        className='w-full size-1'
                    />
                    <div className='flex'>
                        <input
                            type="number" name="" id="" placeholder='$ 0'
                            className='w-1/2 outline-none border border-black rounded-sm px-1'
                        />
                        <b className='px-2'>to</b>
                        <input
                            type="number" name="" id="" placeholder='$ 2000'
                            className='w-1/2 outline-none border border-black rounded-sm px-1'
                        />
                    </div>
                </div>

                <div className='border border-gray-300 p-4 space-y-2'>
                    <h4 className='font-bold'>Colors</h4>
                    <div className='grid grid-cols-5 gap-2'>
                        <button className='w-6 h-6 rounded-full shadow-sm border border-gray-500 bg-orange-500'></button>
                        <button className='w-6 h-6 rounded-full shadow-sm border border-gray-500 bg-blue-500'></button>
                        <button className='w-6 h-6 rounded-full shadow-sm border border-gray-500 bg-green-500'></button>
                        <button className='w-6 h-6 rounded-full shadow-sm border border-gray-500 bg-red-500'></button>
                        <button className='w-6 h-6 rounded-full shadow-sm border border-gray-500 bg-yellow-500'></button>
                        <button className='w-6 h-6 rounded-full shadow-sm border border-gray-500 bg-cyan-500'></button>
                        <button className='w-6 h-6 rounded-full shadow-sm border border-gray-500 bg-black'></button>
                        <button className='w-6 h-6 rounded-full shadow-sm border border-gray-500 bg-white'></button>
                    </div>
                </div>

                <div className='border border-gray-300 p-4 space-y-2'>
                    <h4 className='font-bold'>Sizes</h4>
                    <div className='grid grid-cols-5 gap-2'>
                        <button className='w-8 h-8 text-center text-sm rounded-full text-blue-900   bg-blue-100'>XS</button>
                        <button className='w-8 h-8 text-center text-sm rounded-full text-blue-900   bg-blue-100'>S</button>
                        <button className='w-8 h-8 text-center text-sm rounded-full text-blue-900   bg-blue-100'>M</button>
                        <button className='w-8 h-8 text-center text-sm rounded-full text-blue-900   bg-blue-100'>L</button>
                        <button className='w-8 h-8 text-center text-sm rounded-full text-blue-900   bg-blue-100'>XL</button>
                        <button className='w-8 h-8 text-center text-sm rounded-full text-blue-900   bg-blue-100'>2XL</button>
                        <button className='w-8 h-8 text-center text-sm rounded-full text-blue-900   bg-blue-100'>3XL</button>
                        <button className='w-8 h-8 text-center text-sm rounded-full text-blue-900   bg-blue-100'>4XL</button>
                    </div>
                </div>

                <div className='border border-gray-300 p-4 space-y-2 '>
                    <h4 className='font-bold'>Brands</h4>
                    <div className='w-full border border-gray-500 rounded-sm'>
                        <SearchOutlined className='px-2' />
                        <input
                            type="search" name="" value={searchBrand} id="" placeholder='Search Brands...'
                            className='w-[87%] bg-transparent outline-none  '
                            onChange={SearchBrand}
                        />
                    </div>
                    <div className="space-y-1 h-64 overflow-auto">
                        {filteredBrands.map((brand, index) => (
                            <p key={index}>
                                <input type="checkbox" id={brand} name={brand} />
                                <label htmlFor={brand} className="ml-2">{brand}</label>
                            </p>
                        ))}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Sidemenu