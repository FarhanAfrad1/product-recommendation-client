import React from 'react';
import Banner from '../../Components/Banner';
import { format } from 'date-fns';
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineInsertComment } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";

const Home = () => {
    const date = new Date();
    const formatted = format(date, 'MMMM d, yyyy'); // March 13, 2025

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
            </div>
        </div>
    );
};

export default Home;