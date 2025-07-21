import React from 'react';
import CountUp from 'react-countup';
import { MdOutlineQuestionAnswer, MdInsights } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Stats = () => {
    return (
        <div className="mt-16">
            <div className="flex justify-center items-center gap-2 mb-10">
                <MdInsights size={40} color="#180d38" />
                <h2 className="text-4xl font-bold text-[#180d38]">Platform Insights</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* Total Queries */}
                <div className='bg-white py-10 px-8 rounded-2xl text-center shadow-md'>
                    <MdOutlineQuestionAnswer size={40} color={'#311b72'} className='mx-auto' />
                    <p className='text-5xl text-[#180d38] font-extrabold my-2'>
                        <CountUp end={156} duration={5} />+
                    </p>
                    <p className='text-[#311b72] text-xl font-medium'>Total Product Queries</p>
                </div>

                {/* Total Recommendations */}
                <div className='bg-white py-10 px-8 rounded-2xl text-center shadow-md'>
                    <FaRegComments size={40} color={'#311b72'} className='mx-auto' />
                    <p className='text-5xl text-[#180d38] font-extrabold my-2'>
                        <CountUp end={245} duration={5} />+
                    </p>
                    <p className='text-[#311b72] text-xl font-medium'>Total Recommendations</p>
                </div>

                {/* Total Users */}
                <div className='bg-white py-10 px-8 rounded-2xl text-center shadow-md'>
                    <AiOutlineUsergroupAdd size={40} color={'#311b72'} className='mx-auto' />
                    <p className='text-5xl text-[#180d38] font-extrabold my-2'>
                        <CountUp end={102} duration={5} />+
                    </p>
                    <p className='text-[#311b72] text-xl font-medium'>Active Users</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
