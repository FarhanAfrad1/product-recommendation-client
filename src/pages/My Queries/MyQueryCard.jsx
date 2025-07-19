import { format } from 'date-fns';
import React, { useContext } from 'react';
import { FaChalkboardUser, FaRegClock } from 'react-icons/fa6';
import { MdOutlineInsertComment } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import AuthContext from '../../Auth/AuthContext';

const MyQueryCard = ({ query, column }) => {
    const height = column === 3 ? "h-[450px]" : column === 2 ? "h-[550px]" : "h-[650px]"
    const { user } = useContext(AuthContext);
    const { userName, query: queryTitle, productimage, createdAt } = query;
    const date = new Date(createdAt);
    const formatted = format(date, 'MMMM d, yyyy');
    // delete query
    const handleDelete = () => {
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
                fetch(`http://localhost:3000/queries/${query._id}?email=${user.email}`, {
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
        <div className={`${column === 1 ? "w-full lg:w-2/4" : "w-full"} p-10 rounded-l bg-white mb-3 rounded-lg`}>
            <div>
                <img src={productimage} alt="" className={`${height} w-full rounded-xl`} />
            </div>
            <h2 className='text-3xl font-semibold my-3 hover:underline'>
                {queryTitle}</h2>
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
                        By:{" "} {userName}
                    </span>
                </div>
                <div className='space-x-2 flex'>
                    <Link to={`/querydetails/${query._id}`}>
                        <span className='cursor-pointer bg-gray-100 px-3 rounded-full active:scale-95 transition-all  py-[1px] shadow-black shadow active:shadow-amber-50'>
                            details
                        </span>
                    </Link>
                    <Link to={`/updatequery/${query._id}`}>
                        <span className='cursor-pointer bg-green-100 px-3 rounded-full active:scale-95 transition-all py-[1px] shadow-black shadow active:shadow-amber-50'>
                            update
                        </span>
                    </Link>

                    <span onClick={handleDelete} className='cursor-pointer bg-orange-300 px-3 rounded-full active:scale-95 transition-all py-[1px] shadow-black shadow active:shadow-amber-50'>
                        delete
                    </span>
                </div>

            </div>
        </div>
    );
};

export default MyQueryCard;