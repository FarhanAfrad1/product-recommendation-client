import React from 'react';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';

const MyQueryCard = ({ query }) => {
    console.log(query)
    return (
        <div className='w-full p-10 rounded-l bg-white mb-3 rounded-lg'>
            <p className='bg-[#f2e7dc] w-40 text-center rounded-full py-1'>laptops</p>
            <h2 className='text-3xl font-semibold my-3 underline'>Top 10 Laptops of 2025: Unbiased Reviews for Every Need</h2>
            <div className='flex justify-between mb-3'>
                <div className='flex items-center gap-2'>
                    <FaRegClock />
                    <span>
                        {/* {formatted} */}
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
    );
};

export default MyQueryCard;