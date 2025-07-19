import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Auth/AuthContext';
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';

const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);
    const [myRecomData, setMyRecomData] = useState([]);
    useEffect(() => {
        setLoader(true);
        fetch(`http://localhost:3000/personalrecommendation?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => res.json())
            .then(data => {
                setMyRecomData(data);
                setLoader(false);
            })
    }, [user.email, user.accessToken])
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/recommendation/${id}?email=${user.email}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    },
                }).then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }

                    })

            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Info</th>
                            <th className='hidden md:table-cell'>Recommendation Reason</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            loader && myRecomData ? <tr>
                                <td colSpan="100%" className="text-center py-8">
                                    <p className="loading loading-spinner loading-xl"></p>
                                </td>
                            </tr> :
                                myRecomData.map((recom, index) => <tr key={recom._id}>
                                    <td className='font-semibold text-lg shadow'>
                                        {index + 1}
                                    </td>
                                    <td className='shadow'>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="h-[150px] lg:h-[200px] rounded-lg">
                                                    <img
                                                        src={recom.recommendedProductImage}
                                                        alt="Avatar Tailwind CSS Component"
                                                        className='h-full' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-md lg:text-xl">{recom.recommendedproductName}</div>
                                                <div className="text-md opacity-50">{recom.productBrand}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='shadow hidden md:table-cell'>
                                        <span className="text-xl bg-white leading-11 p-2 rounded">{recom.recommendationReason}</span>
                                    </td>
                                    <td className='shadow'>
                                        <button onClick={() => handleDelete(recom._id)} className='cursor-pointer active:scale-95 transition-all shadow-lg'>
                                            <MdDeleteForever size={40}></MdDeleteForever>
                                        </button>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;