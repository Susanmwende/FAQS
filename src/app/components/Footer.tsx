import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#644777] text-white py-4 md:py-8 px-4 md:px-24 w-full"> {/* Ensured full width and consistent background color */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1 mb-6 md:mb-0 text-left">
                    {/* Adjusted logo width for better responsiveness */}
                    <img src="/images/logo.png" alt="Ubora CBC Logo" className='w-full max-w-[200px]' /> {/* Increased max-width for Nest Hub */}
                </div>

                <div className="flex-[2] flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0 md:ml-96 md:mr-24">
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="list-none space-y-6 font-bold">
                            <li>About Us</li>
                            <li>Features</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className="md:mr-24">
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className='space-y-6 font-bold'>
                            <li>+254748375701</li>
                            <li>imena@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;