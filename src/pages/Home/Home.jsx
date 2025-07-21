import React, { useState } from 'react';
import Banner from '../../Components/Banner';
import { format } from 'date-fns';
import { useLoaderData } from 'react-router';
import QueryCardHome from './QueryCardHome';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';

const Home = () => {
    const [column, setColumn] = useState(3)
    const gridColumnClass = {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3'
    }[column] || 'lg:grid-cols-3';
    const handleGridButton = (col) => {
        if (col === 1) setColumn(1)
        else if (col === 2) setColumn(2)
        else setColumn(3)
    }
    const date = new Date();
    const formatted = format(date, 'MMMM d, yyyy'); // March 13, 2025
    const allQueries = useLoaderData();
    console.log(formatted)
    return (
        <div className='mt-10'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex-1'>
                    <div className='w-full lg:w-4/5 p-10 rounded-l bg-white mb-3 rounded-lg'>
                        <p className='bg-[#f2e7dc] w-40 text-center rounded-full py-1'>laptops</p>
                        <h2 className='text-3xl font-semibold my-3 underline'>Top 10 Laptops of 2025: Unbiased Reviews for Every Need</h2>
                        <div className='flex justify-between mb-3'>
                            <div className='flex items-center gap-2'>
                                <FaRegClock />
                                <span>
                                    {formatted}
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdOutlineInsertComment />
                                <span>
                                    No Comment
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between mt-3'>
                            <div className='flex items-center gap-2'>
                                <FaChalkboardUser size={20} />
                                <span>
                                    By: recom
                                </span>
                            </div>
                            <span className='cursor-pointer bg-gray-100 px-3 rounded-full active:scale-95 transition-all'>
                                details
                            </span>
                        </div>
                    </div>
                    <div className='hover:bg-white w-full lg:w-4/5 p-10 rounded-lg'>
                        <p className='bg-[#c3bdff] w-40 text-center rounded-full py-1'>Skincare</p>
                        <h2 className='text-3xl font-semibold my-3 underline'>
                            Honest Reviews of the Best Skincare Products</h2>
                        <div className='flex justify-between mb-3'>
                            <div className='flex items-center gap-2'>
                                <FaRegClock />
                                <span>
                                    {formatted}
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdOutlineInsertComment />
                                <span>
                                    No Comment
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between mt-3'>
                            <div className='flex items-center gap-2'>
                                <FaChalkboardUser size={20} />
                                <span>
                                    By: recom
                                </span>
                            </div>
                            <span className='cursor-pointer bg-gray-100 px-3 rounded-full active:scale-95 transition-all'>
                                details
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <Banner></Banner>
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl font-medium'>Recent Queries</h2>
                <div className='mt-5'>
                    <div className='hidden lg:flex'>
                        <button onClick={() => handleGridButton(1)} className='rounded-l-md px-3 py-1 bg-white text-lg fond-medium cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>one</span> column layout</button>
                        <button onClick={() => handleGridButton(2)} className='px-3 py-1 bg-white text-lg fond-medium border-r border-l cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>two</span> column layout</button>
                        <button onClick={() => handleGridButton(3)} className='rounded-r-md px-3 py-1 bg-white text-lg fond-medium cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>three</span> column layout</button>
                    </div>
                    <div className={`grid grid-cols-1 ${gridColumnClass} lg:gap-10 mt-5`}>
                        {
                            allQueries.map(query => <QueryCardHome key={query._id} query={query} column={column}></QueryCardHome>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;