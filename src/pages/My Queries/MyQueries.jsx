import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import AuthContext from '../../Auth/AuthContext';
import MyQueryCard from './MyQueryCard';
import useTitle from '../../Hook/useTitle';



const MyQueries = () => {
    useTitle("My Queries | recom");
    const { user, loading } = useContext(AuthContext);
    const [userQueries, setUserQueries] = useState([]);
    const [column, setColumn] = useState(3)
    const [loader, setLoader] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        if (loading || !user || !user.email || !user.accessToken) {
            console.log("no user");
            return
        };

        setLoader(true);
        const fetchUserQueries = async () => {
            const idToken = await user.getIdToken();
            fetch(`https://product-recommendation-server-beige.vercel.app/userqueries?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${idToken}`
                }
            }).then(res => res.json())
                .then(data => {
                    setUserQueries(data)
                    setLoader(false)
                })
        }
        fetchUserQueries();

    }, [user?.email, user.accessToken, user, loading]);
    console.log(userQueries);
    const handleGridButton = (col) => {
        if (col === 1) setColumn(1)
        else if (col === 2) setColumn(2)
        else setColumn(3)
    }
    const gridColumnClass = {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3'
    }[column] || 'lg:grid-cols-3';
    const cardPerPage = 3;
    const totalPages = Math.ceil(userQueries.length / cardPerPage);
    const displayCardPerPage = userQueries.slice((currentPage - 1) * cardPerPage, currentPage * cardPerPage);
    return (
        <div className='mt-10'>
            <div className='w-full lg:w-3/4 flex flex-col lg:flex-row mx-auto rounded-2xl items-center'>
                <div className='flex-1'>
                    <img src="/queries.jpg" alt="" className='w-3/4 h-[400px] rounded-lg' />
                </div>
                <div className='flex-1 lg:-ml-20'>
                    <h2 className='text-4xl font-semibold mb-2'>Ask Better, Choose Smarter</h2>
                    <p className='text-xl font-medium mb-4'>Easily manage your product questions and add new ones to get personalized suggestions.</p>
                    <Link to='/addqueries' className="bg-[#180d38] text-white px-8 rounded-full text-lg py-1 active:scale-95 transition-all shadow-[0_4px_12px_rgba(128,0,255,0.4)] active:shadow-white">Add Query</Link>
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-3xl font-medium'>My Queries</h2>
                <div className='mt-5'>
                    <div className='hidden lg:flex'>
                        <button onClick={() => handleGridButton(1)} className='rounded-l-md px-3 py-1 bg-white text-lg fond-medium cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>one</span> column layout</button>
                        <button onClick={() => handleGridButton(2)} className='px-3 py-1 bg-white text-lg fond-medium border-r border-l cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>two</span> column layout</button>
                        <button onClick={() => handleGridButton(3)} className='rounded-r-md px-3 py-1 bg-white text-lg fond-medium cursor-pointer hover:bg-amber-100 active:scale-95 transition-all'><span className='font-bold'>three</span> column layout</button>
                    </div>
                </div>
                <div className={`grid grid-cols-1 ${gridColumnClass} lg:gap-10 mt-5`}>
                    {
                        loader ? (<span className="loading loading-spinner loading-xl"></span>) :
                            userQueries.length === 0 ?
                                (<div>
                                    <h3 className='text-4xl font-semibold mb-5'>No Query is found!</h3>
                                    <Link to='/addqueries' className="bg-[#180d38] text-white px-8 rounded-full text-lg py-1 active:scale-95 transition-all mt-10 text-center shadow-black shadow active:shadow-amber-50">Add Query</Link>
                                </div>) :
                                (displayCardPerPage.map(query =>
                                    <MyQueryCard key={query._id} query={query} column={column}>
                                    </MyQueryCard>))
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
    );
};

export default MyQueries;