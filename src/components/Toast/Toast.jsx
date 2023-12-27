import React from 'react'

const Toast = ({ message }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="fixed top-1 right-1 bg-slate-300 font-semibold text-purple-950 px-5 py-6 rounded-md">
                {message}
            </div>
        </div>
    )
}

export default Toast
