import React, { useContext } from 'react';
import { ContextAPI } from '../Context/useContext';

const Footer = () => {
    const { toggleTheme } = useContext(ContextAPI);
    return (
        <footer className={`${toggleTheme ? "bg-primary text-white" : "bg-white"}`}>
            <div className="mx-auto py-10">
                <div className="text-center">
                    <h3 className="text-3xl font-bold"> Rest Countries </h3>
                    <p> Get all information about all countries. </p>
                    <div className="flex justify-center my-4">
                        <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 bg-secondary">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt='playStore icon' />
                            <div className="text-left ml-3 text-white">
                                <p className='text-xs'>Download on </p>
                                <p className="text-sm"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2 bg-secondary">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt='apple store icon' />
                            <div className="text-left ml-3 text-white">
                                <p className='text-xs'>Download on </p>
                                <p className="text-sm"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm">
                    <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Rest Countries, 2023. </p>
                    <div className="order-1 md:order-2">
                        <span className="px-2">About us</span>
                        <span className="px-2 border-l">Contact us</span>
                        <span className="px-2 border-l">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;