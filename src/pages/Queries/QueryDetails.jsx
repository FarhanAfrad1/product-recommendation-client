import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Auth/AuthContext';
import { useParams } from 'react-router';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';
import { format } from 'date-fns';
import axios from 'axios';
import Swal from 'sweetalert2';

const QueryDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [queryDetails, setQueryDatails] = useState({});
    const [date, setDate] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/queries/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            },
        }).then(res => res.json())
            .then(data => {
                setQueryDatails(data)
                const newDate = new Date(data.createdAt);
                const formatted = format(newDate, 'MMMM d, yyyy');
                setDate(formatted);
            })
    }, [id, user.accessToken])


    const handleRecommendation = (e) => {
        e.preventDefault();
        const form = e.target;
        const newForm = new FormData(form);
        const recommededData = Object.fromEntries(newForm.entries());
        const recommendation = {
            ...recommededData,
            queryId: queryDetails._id,
            queryTitle: queryDetails.query,
            productName: queryDetails.name,
            userEmail: queryDetails.userEmail,
            userName: queryDetails.userName,
            recommenderEmail: user.email,
            recommenderName: user.displayName
        }
        console.log(recommendation)
        axios.post('http://localhost:3000/recommendation', recommendation)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Congrats!",
                        text: "Recommendation is submitted successfully",
                        icon: "success"
                    })
                }
            }).catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <div className='w-full flex flex-col lg:flex-row p-10 rounded-l bg-white mb-3 rounded-lg gap-5'>
                    <div>
                        <img src={queryDetails.productimage} alt="" className='h-[300px] w-full rounded-xl' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h2 className='text-3xl font-semibold my-3 hover:underline'>
                                {queryDetails.query}
                            </h2>
                            <div className='flex flex-col'>
                                <span className='text-md'>Product name: <span className='text-lg font-medium'>{" "}{queryDetails.name}</span></span>
                                <span className='text-md'>Brand name:<span className='text-lg font-medium'>{" "}{queryDetails.brand}</span></span>
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-between mb-3'>
                                <div className='flex items-center gap-2'>
                                    <FaChalkboardUser size={20} />
                                    <span>
                                        Created By:{" "} {queryDetails.userName}
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between mt-3'>
                                <div className='flex items-center gap-2'>
                                    <FaRegClock />
                                    <span>
                                        Created at:{" "}
                                        {date}
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
            </div>
            <div className='w-full flex flex-col lg:flex-row lg:items-center mt-20'>
                <div className='flex-1'>
                    <h2 className='text-5xl font-semibold'>Your Opinion Matters</h2>
                    <p className='text-xl mt-2'>Tell others about a better product you’ve used — your advice could make a difference.
                    </p>
                </div>
                <div className='flex-1 border p-10 rounded-lg'>
                    <form onSubmit={handleRecommendation}>
                        <div className='flex gap-8'>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Recommended product Name</legend>
                                <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='recommendedproductName' />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Product Brand</legend>
                                <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='productBrand' />
                            </fieldset>
                        </div>
                        <div className='flex gap-8'>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Recommended Product Image</legend>
                                <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='recommendedProductImage' />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend"> Recommendation Title</legend>
                                <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='recommendationTitle' />
                            </fieldset>
                        </div>
                        <div>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Recommendation reason</legend>
                                <textarea className="textarea h-24 w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Reason" name='recommendationReason'></textarea>
                            </fieldset>
                        </div>
                        <input type="submit" value="Add Recommendation" className='mt-4 border-2 px-8 py-2 rounded-full font-semibold text-white bg-[#180d38] cursor-pointer active:scale-95 shadow-[0_4px_12px_rgba(128,0,255,0.4)] active:shadow-white' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default QueryDetails;