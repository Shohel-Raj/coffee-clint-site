import React from 'react';

import logo from '../../assets//images/more/logo1.png'
import { Link } from 'react-router';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <div className="bg-[url('../13.jpg')] mt-3">


                <div className='w-11/12 mx-auto '>

                    <img className='w-20 pt-3' src={logo} alt="" />
                    <div className='py-4 pt-0 space-y-4 grid grid-cols-1 md:grid-cols-3'>
                        <div>

                            <h3 className='font-bold text-2xl'>Espresso Emporium</h3>
                            <p className='w-2/4 small'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <ul className='flex gap-3.5 my-1.5 '>
                                <li className='hover:font-[#3b241f] hover:text-2xl'><Link href="#"><FaFacebookSquare size={25} /></Link></li>
                                <li><Link href=""><FaInstagramSquare size={25} /></Link></li>
                                <li><Link href=""><FaTwitterSquare size={25} /></Link></li>
                                <li><Link href=""><FaLinkedin size={25} /></Link></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-bold mb-3 text-2xl'>Get in Touch</h1>
                            <p className='flex gap-2'><span><IoCall /></span> +88 01533 333 333</p>
                            <p className='flex gap-2'><span><MdEmail /></span> info@gmail.com</p>
                            <p className='flex gap-2'><span><FaLocationDot /></span> 72, Wall street, King Road, Dhaka</p>
                        </div>
                        <div>
                            <form >

                                <h1 className='font-bold mb-3 text-2xl'>Connect with Us</h1>

                                <fieldset className="fieldset py-0">
                                    <legend className="fieldset-legend">Name </legend>
                                    <input type="text" className="input " name='name' placeholder="Enter coffee name here" />
                                </fieldset>
                                <fieldset className="fieldset py-0">
                                    <legend className="fieldset-legend">Email </legend>
                                    <input type="email" className="input " name='email' placeholder="Enter coffee name here" />
                                </fieldset>
                                <fieldset className="fieldset py-0">
                                    <legend className="fieldset-legend">Name </legend>
                                    <textarea className="textarea" placeholder="Bio"></textarea>
                                </fieldset>
                                <button className="btn btn-outline btn-primary mt-2.5 rounded-3xl">Send Message</button>

                            </form>
                        </div>
                    </div>
                </div>



                <div className="bg-[url('../15.jpg')]">
                    <div className='w-11/12 mx-auto text-center text-white'>
                        <h1>&copy; Espresso Emporium ! All Rights Reserved</h1>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;