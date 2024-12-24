import React from 'react'

const Watch = () => {
    return (
        <>
            <div className='pt-4 pb-12 shadow-xm shadow-black mb-1'>
                <div className='py-4'>
                    <h1 className='text-xl text-blue-700 font-sans text-center'>We have</h1>
                    <h1 className='text-3xl text-indigo-950 py-3 font-sans font-bold text-center'>Quality Products</h1>
                </div>
                <div className='flex flex-wrap justify-evenly '>
                    <img className='w-80 h-80 border hover:border-2 hover:border-gray-500' src="https://m.media-amazon.com/images/I/51TPsr4P7AL.jpg" alt="" />
                    <img className='w-80 h-80 border hover:border-2 hover:border-gray-500' src="https://m.media-amazon.com/images/I/71Sjf4eSi9L.jpg" alt="" />
                    <img className='w-80 h-80 border hover:border-2 hover:border-gray-500' src="https://cdn1.smartprix.com/rx-iGvSP4rlp-w1200-h1200/GvSP4rlp.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Watch