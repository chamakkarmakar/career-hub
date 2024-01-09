import React, { useState } from 'react'
import Toast from '../Toast/Toast';
import { saveJobApplication } from '../../Utility/localStorage';

const Modal = ({ setShowModal, id }) => {

    const handleFormSubmit = event => {
        event.preventDefault();
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        saveJobApplication(id);
        event.target.reset();
        setShowModal(false);
    }
    return (
        <div>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative my-6 mx-auto w-1/3" >
                    {/*content*/}
                    <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-purple-950">
                                Application form
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-30 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    x
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6">

                            <form onSubmit={handleFormSubmit} className='grid gap-5'>
                                <input className='px-3 py-2 outline-none focus:outline-none border-purple-300 border-b-2' type="text" name="fullName" placeholder='Full Name' required />
                                <input className='px-3 py-2 outline-none focus:outline-none border-purple-300 border-b-2' type="email" name="email" placeholder='Email' required />
                                <input className='px-3 py-2 outline-none focus:outline-none border-purple-300 border-b-2' type="number" name="phone" placeholder='Phone number' required />

                                <div className="flex items-center justify-end p-6">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button>
                                    <button className="py-2 px-5 border-2 rounded-lg border-purple-950 bg-purple-900 text-white hover:text-purple-950 hover:bg-transparent cursor-pointer font-bold ease-linear transition-all duration-150"
                                        type='submit'>
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                        {/*footer*/}

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default Modal
