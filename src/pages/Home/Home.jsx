import React, { useState } from 'react';
import Banner from '../../Components/Banner';
import { format } from 'date-fns';
import { useLoaderData } from 'react-router';
import QueryCardHome from './QueryCardHome';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdLiveHelp, MdOutlineInsertComment } from 'react-icons/md';
import Stats from './Stats';
import useTitle from '../../Hook/useTitle';
import NewsletterSection from '../../Components/NewsletterSection';

const Home = () => {
    useTitle("home | recom");

    const [sortBy, setSortBy] = useState("latest"); // latest | oldest | mostRecommended


    const [currentPage, setCurrentPage] = useState(1);
    const cardPerPage = 4;

    const allQueries = useLoaderData();



    // ✅ Sorting
    if (sortBy === "latest") {
        allQueries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "oldest") {
        allQueries.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === "mostRecommended") {
        allQueries.sort((a, b) => (b.recommendationCount || 0) - (a.recommendationCount || 0));
    }

    const date = new Date();
    const formatted = format(date, 'MMMM d, yyyy'); // March 13, 2025
    // const allQueries = useLoaderData();
    const totalPages = Math.ceil(allQueries.length / 3);
    const displayUserPerPage = allQueries.slice((currentPage - 1) * cardPerPage, currentPage * cardPerPage);
    console.log(totalPages, displayUserPerPage)
    console.log(formatted)
    return (
        <div className='mt-10'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex-1'>
                    <div className='w-full lg:w-4/5 p-10 rounded-l bg-base-100 mb-3 rounded-lg'>
                        <p className='bg-[#f2e7dc] w-40 text-center rounded-full py-1 text-black'>laptops</p>
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
                            <span className='cursor-pointer bg-base-200 px-3 rounded-full active:scale-95 transition-all'>
                                details
                            </span>
                        </div>
                    </div>
                    <div className='hover:bg-base-100 w-full lg:w-4/5 p-10 rounded-lg'>
                        <p className='bg-[#c3bdff] w-40 text-center rounded-full py-1 text-black'>Skincare</p>
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
                            <span className='cursor-pointer bg-base-200 px-3 rounded-full active:scale-95 transition-all'>
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
                <h2 className='text-2xl font-medium'>Queries by Users</h2>
                <p className='mt-1'>Here you can explore real product-related questions asked by our community. Each query reflects genuine user experiences, and the shared recommendations aim to guide others toward better choices. Join the conversation and contribute your own insights to help fellow users.</p>
                <div className='mt-5'>
                    {/* Controls */}
                    <div className="my-10 flex justify-end items-center gap-4">
                        <div>
                            <label className="font-medium mr-2">Sort By:</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-bordered">
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                                <option value="mostRecommended">Most Recommended</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                            {displayUserPerPage.map(query => (
                                <QueryCardHome key={query._id} query={query} />
                            ))}
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
            <div className="mt-16">


                <h2 className="text-2xl font-bold text-[#180d38] dark:text-base-content">
                    Frequently Asked Questions
                </h2>

                {/* ✅ Subheading */}
                <p className="mb-10 mt-1">
                    Find quick answers to the most common questions about using our platform.
                    From submitting queries to sharing recommendations, these FAQs guide you
                    through the essentials. Explore them to make the most of your experience.
                </p>

                {/* Accordions */}
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                        <input type="checkbox" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            How do I submit a product recommendation?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Visit the query details page and scroll down to the recommendation
                                form. Fill in the details about the alternative product and submit it
                                — your insights help others!
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                        <input type="checkbox" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Can I edit or delete my query or recommendation later?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes! You can go to your "My Queries" or "My Recommendations" page and
                                use the edit or delete options provided for each item.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                        <input type="checkbox" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Are my recommendations visible to everyone?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, all approved recommendations will appear publicly under the
                                corresponding query so others can benefit from your experience.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
                        <input type="checkbox" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            How is the "Recommendation Count" calculated?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Every time a recommendation is submitted for a query, the count is
                                automatically increased. If a recommendation is deleted, the count is
                                decreased.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <NewsletterSection></NewsletterSection>
            </div>

        </div>
    );
};

export default Home;