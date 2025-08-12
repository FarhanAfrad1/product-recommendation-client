import React, { useState } from 'react';
import Banner from '../../Components/Banner';
import { format } from 'date-fns';
import { useLoaderData } from 'react-router';
import QueryCardHome from './QueryCardHome';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdLiveHelp, MdOutlineInsertComment } from 'react-icons/md';
import Stats from './Stats';
import useTitle from '../../Hook/useTitle';

const Home = () => {
    useTitle("home | recom");
    const [column, setColumn] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const cardPerPage = 3;
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
    const totalPages = Math.ceil(allQueries.length / 3);
    const displayUserPerPage = allQueries.slice((currentPage - 1) * cardPerPage, currentPage * cardPerPage);
    console.log(totalPages, displayUserPerPage)
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
                    <div >
                        <div className={`grid grid-cols-1 ${gridColumnClass} lg:gap-10 mt-5`}>
                            {
                                displayUserPerPage.map(query => <QueryCardHome key={query._id} query={query} column={column}></QueryCardHome>)
                            }
                        </div>

                        <div>
                            {
                                totalPages > 1 && (
                                    <div className="mt-4 flex justify-center gap-2">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i}
                                                className={`btn btn-sm ${currentPage === i + 1 ? 'btn bg-[#180d38] text-white' : 'btn-outline'}`}
                                                onClick={() => setCurrentPage(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <Stats></Stats>
            </div>
            <div className="max-w-4xl mx-auto mt-16">
                <div className="flex justify-center items-center gap-2 mb-10">
                    <MdLiveHelp size={40} color="#180d38" />
                    <h2 className="text-4xl font-bold text-[#180d38]">Frequently Asked Questions</h2>
                </div>

                <div className="join join-vertical w-full space-y-2">

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            How do I submit a product recommendation?
                        </div>
                        <div className="collapse-content">
                            <p>Visit the query details page and scroll down to the recommendation form. Fill in the details about the alternative product and submit it — your insights help others!</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Can I edit or delete my query or recommendation later?
                        </div>
                        <div className="collapse-content">
                            <p>Yes! You can go to your "My Queries" or "My Recommendations" page and use the edit or delete options provided for each item.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Are my recommendations visible to everyone?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, all approved recommendations will appear publicly under the corresponding query so others can benefit from your experience.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            How is the "Recommendation Count" calculated?
                        </div>
                        <div className="collapse-content">
                            <p>Every time a recommendation is submitted for a query, the count is automatically increased. If a recommendation is deleted, the count is decreased.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;