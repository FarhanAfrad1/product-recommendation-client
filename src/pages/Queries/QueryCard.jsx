
import { format } from 'date-fns';
import React from 'react';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';
import { Link } from 'react-router';

const QueryCard = ({ query }) => {
    const { userName, query: queryTitle, productimage, createdAt,
        recommendationCount } = query;
    const date = new Date(createdAt);
    const formatted = format(date, 'MMMM d, yyyy');
    return (
        <div className='w-full p-10 rounded-l bg-white mb-3 rounded-lg'>
            <div>
                <img src={productimage} alt="" className='h-[300px] w-full rounded-xl' />
            </div>
            <h2 className='text-3xl font-semibold my-3 hover:underline'>
                {queryTitle}</h2>
            <div className='flex justify-between mb-3 mt-10'>
                <div className='flex items-center gap-2'>
                    <FaRegClock />
                    <span>
                        {formatted}
                    </span>
                </div>
                <div className='flex items-center gap-2'>
                    <MdOutlineInsertComment />
                    <span>
                        Total Recommendation:{" "}<span className='text-lg font-medium'>{recommendationCount}</span>
                    </span>
                </div>
            </div>
            <hr />
            <div className='flex justify-between mt-3'>
                <div className='flex items-center gap-2'>
                    <FaChalkboardUser size={20} />
                    <span>
                        By:{" "} {userName}
                    </span>
                </div>
                <div className='space-x-2 flex'>
                    <Link to={`/querydetails/${query._id}`}>
                        <span className='cursor-pointer bg-gray-100 px-3 rounded-full active:scale-95 transition-all  py-[1px] shadow-black shadow active:shadow-amber-50'>
                            Recommend
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default QueryCard;