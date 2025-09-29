import React, { useContext } from 'react';
import AuthContext from '../../Auth/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddQueries = () => {
    const { user } = useContext(AuthContext)
    const handleAddQuery = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        const queryDetail = {
            userName: user?.displayName,
            userEmail: user?.email,
            userPhoto: user?.photoURL,
            recommendationCount: 0,
            ...formObject
        }
        console.log(queryDetail);
        axios.post('http://localhost:3000/queries', queryDetail)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Congrats!",
                        text: "Query is submitted successfully",
                        icon: "success"
                    })
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='w-full flex flex-col lg:flex-row lg:items-center'>
            <div className='flex-1'>
                <h2 className='text-5xl font-semibold'>Your Curiosity, Organized</h2>
                <p className='text-xl mt-2'>Manage your queries and keep the conversation going with helpful recommendations.</p>
            </div>
            <div className='flex-1'>
                <form onSubmit={handleAddQuery}>
                    <div className='flex gap-8'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Product Name</legend>
                            <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='name' />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Product Brand</legend>
                            <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='brand' />
                        </fieldset>
                    </div>
                    <div className='flex gap-8'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Product Image-URL</legend>
                            <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='productimage' />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Query TItle</legend>
                            <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='query' />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Boycoing Reason Details</legend>
                            <textarea className="textarea h-24 w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Reason" name='reason'></textarea>
                        </fieldset>
                    </div>
                    <input type="submit" value="Add Query" className='mt-4 border-2 px-8 py-2 rounded-full font-semibold text-white
                     bg-[#180d38] cursor-pointer active:scale-95 shadow-[0_4px_12px_rgba(128,0,255,0.4)] active:shadow-white' />
                </form>
            </div>

        </div>
    );
};

export default AddQueries;