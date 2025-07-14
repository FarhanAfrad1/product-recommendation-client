import React from 'react';

const MyQueries = () => {
    return (
        <div className='mt-20'>
            <div className='w-full flex flex-col lg:flex-row lg:items-center'>
                <div className='flex-1'>
                    <h2 className='text-5xl font-semibold'>Your Curiosity, Organized</h2>
                    <p className='text-xl mt-2'>Manage your queries and keep the conversation going with helpful recommendations.</p>
                </div>
                <div className='flex-1'>
                    <form action="">
                        <div className='flex gap-8'>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Product Name</legend>
                                <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='name' />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Product Brand</legend>
                                <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='photourl' />
                            </fieldset>
                        </div>
                        <div className='flex gap-8'>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Product Image-URL</legend>
                                <input type="email" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='email' />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Query TItle</legend>
                                <input type="text" className="input w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Type here" name='password' />
                            </fieldset>
                        </div>
                        <div>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Boycoing Reason Details</legend>
                                <textarea className="textarea h-24 w-full  border-2 focus:outline-0 text-lg p-4" placeholder="Reason"></textarea>
                            </fieldset>
                        </div>
                        <input type="submit" value="Add Query" className='mt-4 border-2 px-8 py-2 rounded-full font-semibold text-white bg-[#180d38] cursor-pointer active:scale-95 ' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default MyQueries;