import React from 'react';
import { Link } from 'react-router';

const MyQueries = () => {
    return (
        <div className='mt-10'>
            <div className='w-full lg:w-3/4 flex flex-col lg:flex-row mx-auto rounded-2xl items-center'>
                <div className='flex-1'>
                    <img src="/queries.jpg" alt="" className='w-3/4 h-[400px] rounded-lg' />
                </div>
                <div className='flex-1 lg:-ml-20'>
                    <h2 className='text-4xl font-semibold mb-2'>Ask Better, Choose Smarter</h2>
                    <p className='text-xl font-medium mb-4'>Easily manage your product questions and add new ones to get personalized suggestions.</p>
                    <Link className="bg-[#180d38] text-white px-8 rounded-full text-lg py-1 active:scale-95 transition-all">Add Query</Link>
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-3xl font-medium'>My Queries</h2>
                <div className='mt-5'>
                    <div>
                        <button className='rounded-l-md px-3 py-1 bg-white text-lg fond-medium cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>one</span> column layout</button>
                        <button className='px-3 py-1 bg-white text-lg fond-medium border-r border-l cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>two</span> column layout</button>
                        <button className='rounded-r-md px-3 py-1 bg-white text-lg fond-medium cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>three</span> column layout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyQueries;