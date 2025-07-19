import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Auth/AuthContext';

const RecomForMe = () => {
    const { user } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);
    const [recomDataForMe, setRecomDataForMe] = useState([]);
    useEffect(() => {
        setLoader(true);
        fetch(`http://localhost:3000/recommendation?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => res.json())
            .then(data => {
                setRecomDataForMe(data);
                setLoader(false);
            })
    }, [user.email, user.accessToken])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Info</th>
                            <th>Recommendation Reason</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            loader ? <span className="loading loading-spinner loading-xl"></span> :
                                recomDataForMe.map((recom, index) => <tr key={recom._id}>
                                    <td className='font-semibold text-lg'>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="h-[200px] rounded-lg">
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
                                    <td>
                                        <span className="text-xl bg-white leading-11 p-2 rounded">{recom.recommendationReason}</span>
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