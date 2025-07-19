
import { format } from 'date-fns';
import React from 'react';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';
import { Link } from 'react-router';

const QueryCard = ({ query, column }) => {
    const { userName, query: queryTitle, productimage, createdAt,
        recommendationCount } = query;
    const date = new Date(createdAt);
    const formatted = format(date, 'MMMM d, yyyy');
    const height = column === 3 ? "h-[450px]" : column === 2 ? "h-[550px]" : "h-[650px]"
    return (
        <div className={`${column === 1 ? "w-full lg:w-2/4" : "w-full"} p-10 rounded-l bg-white mb-3 rounded-lg`}>
            <div>
                <img src={productimage} alt="" className={`${height} w-full rounded-xl`} />
            </div>
            <h2 className='text-3xl font-semibold my-3 hover:underline'>
                {queryTitle}</h2>
            <div className='flex flex-col md:flex-row gap-3 justify-between mb-3 mt-10'>
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
            <div className='flex flex-col md:flex-row gap-3 justify-between mt-3'>
                <div className='flex items-center gap-2'>
                    <FaChalkboardUser size={20} />
                    <span>
                        By:{" "} {userName}
                    </span>
                </div>
                <div className='space-x-2'>
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