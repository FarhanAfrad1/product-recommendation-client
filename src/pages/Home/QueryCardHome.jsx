import { format } from 'date-fns';
import React from 'react';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';

const QueryCardHome = ({ query }) => {
    const { createdAt } = query;
    const date = new Date(createdAt);
    const formatted = format(date, 'MMMM d, yyyy');

    return (
        <div className="w-full flex flex-col p-6 rounded-lg bg-base-100 shadow-md hover:shadow-lg transition h-full">
            {/* Image */}
            <div>
                <img src={query.productimage} alt={query.name} className='h-[200px] w-full object-cover rounded-xl' />
            </div>

            {/* Content with spacing */}
            <div className='flex flex-col justify-between flex-1 mt-4'>
                {/* Top text */}
                <div>
                    <h2 className='text-xl font-semibold mb-2 hover:underline'>
                        {query.query}
                    </h2>

                    <p className='text-md mb-4'>
                        Product name: <span className='font-medium'>{query.name}</span>
                    </p>
                </div>

                {/* Bottom info pinned at bottom */}
                <div className='text-sm mt-auto'>
                    <div className='flex justify-between mb-2'>
                        <div className='flex items-center gap-2'>
                            <FaChalkboardUser size={16} />
                            <span>Created By: {query.userName}</span>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between mt-2'>
                        <div className='flex items-center gap-2'>
                            <FaRegClock size={16} />
                            <span>{formatted}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineInsertComment size={16} />
                            <span>No Comment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCardHome;
