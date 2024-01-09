import React from 'react'

const Contact = () => {
    const handleContactUs = event =>{
        event.preventDefault();
        event.target.reset();
    }
    return (
        <section id='contact' className="bg-white">
            <div className="py-8 md:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl font-bold text-center text-black ">Contact Us</h2>
                <p className="mb-8 md:mb-16 font-light text-center text-gray-500   text-lg">Need any details? Let us know.</p>
                <form onSubmit={handleContactUs} className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-lg font-medium text-gray-900 ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-lg font-medium text-gray-900 ">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className=" col-span-2">
                        <label for="message" className="block mb-2 text-lg font-medium text-gray-900">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave message..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-primary-700  w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
