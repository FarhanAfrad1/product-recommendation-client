import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import MyQueryCard from '../My Queries/MyQueryCard';
import AuthContext from '../../Auth/AuthContext';
import axios from 'axios';
import QueryCard from './QueryCard';
import useTitle from '../../Hook/useTitle';

const Queries = () => {
    useTitle("Queris | recom");
    const [column, setColumn] = useState(3);
    const [allQueries, setAllQueries] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setLoader(true);
        axios.get(`http://localhost:3000/queries?search=${searchText}`)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    setAllQueries(res.data);
                    setLoader(false);
                }
            })
    }, [searchText])

    console.log(allQueries)
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
    return (
        <div className='mt-10'>
            <input
                type="text"
                placeholder="Search product name"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="border border-gray-400 px-4 py-2 mb-4 rounded"
            />
            <div className=''>
                <h2 className='text-3xl font-medium'>All Queries</h2>
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
                            allQueries.length === 0 ?
                                (<div>
                                    <h3 className='text-4xl font-semibold'>No Query is found!</h3>
                                    <Link to='/addqueries' className="bg-[#180d38] text-white px-8 rounded-full text-lg py-1 active:scale-95 transition-all mt-10 text-center shadow-black shadow active:shadow-amber-50">Add Query</Link>
                                </div>) :
                                (allQueries.map(query =>
                                    <QueryCard key={query._id} query={query} column={column}>
                                    </QueryCard>))

                    }

                </div>
            </div>
        </div>
    );
};

export default Queries;