import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Auth/AuthContext';
import useTitle from '../../Hook/useTitle';

const RecomForMe = () => {
    useTitle("Recom for Me | recom");
    const { user } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);
    const [recomDataForMe, setRecomDataForMe] = useState([]);
    useEffect(() => {
        setLoader(true);
        const fetching = async () => {
            const idToken = await user.getIdToken();
            fetch(`http://localhost:3000/recommendation?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${idToken}`
                }
            }).then(res => res.json())
                .then(data => {
                    setRecomDataForMe(data);
                    setLoader(false);
                })
        }
        fetching();
    }, [user.email, user])
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
                            <th className='hidden md:table-cell'>Recommendation For</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            loader && !recomDataForMe ? <tr>
                                <td colSpan="100%" className="text-center py-8">
                                    <p className="loading loading-spinner loading-xl"></p>
                                </td>
                            </tr> :
                                recomDataForMe.map((recom, index) => <tr key={recom._id}>
                                    <td className='font-semibold text-lg shadow'>
                                        {index + 1}
                                    </td>
                                    <td className='shadow'>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="h-[150px] md:h-[200px] rounded-lg">
                                                    <img
                                                        src={recom.recommendedProductImage}
                                                        alt="Avatar Tailwind CSS Component"
                                                        className='h-full' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-xl">{recom.recommendedproductName}</div>
                                                <div className="text-md opacity-50">{recom.productBrand}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='shadow hidden md:table-cell'>
                                        <span className="text-xl bg-white leading-11 p-2 rounded">{recom.recommendationReason}</span>
                                    </td>
                                    <td className='shadow hidden md:table-cell'>
                                        <div>
                                            <div className="font-semibold text-xl">
                                                {recom.productName}
                                            </div>
                                        </div>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecomForMe;