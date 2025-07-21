import { format } from 'date-fns';
import React, { useState } from 'react';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';

const QueryCardHome = ({ query, column }) => {
    const flexDirection = {
        1: 'lg:flex-row',
        2: 'lg:flex-row',
        3: 'lg:flex-col'
    }[column]

    console.log(query)
    const { createdAt } = query;
    const date = new Date(createdAt);
    const formatted = format(date, 'MMMM d, yyyy');
    return (
        <div className={`w-full flex flex-col ${flexDirection} p-10 rounded-l bg-white mb-3 rounded-lg gap-5`}>
            <div>
                <img src={query.productimage} alt="" className='h-[300px] w-full rounded-xl' />
            </div>
            <div className='flex flex-col justify-between'>
                <div>
                    <h2 className='text-3xl font-semibold my-3 hover:underline'>
                        {query.query}
                    </h2>

                    <div className='flex flex-col'>
                        <span className='text-md'>Product name: <span className='text-lg font-medium'>{" "}{query.name}</span></span>
                        <span className='text-md'>Brand name:<span className='text-lg font-medium'>{" "}{query.brand}</span></span>
                    </div>
                </div>

                <div>
                    <div className='flex justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                            <FaChalkboardUser size={20} />
                            <span>
                                Created By:{" "} {query.userName}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between mt-3'>
                        <div className='flex items-center gap-2'>
                            <FaRegClock />
                            <span>
                                Created at:{" "}
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
                </div>
            </div>
        </div>
    );
};

export default QueryCardHome;