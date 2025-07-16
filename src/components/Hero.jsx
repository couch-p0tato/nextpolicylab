import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { assets } from '../assets/assets';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    // For Email
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        'service_naose4d',
        'template_ov6qa6k',
        form.current,
        '3T9vL7mmUJtx-GkdU'
        )
        .then((result) => {
        toast.success('Message sent successfully!');
        e.target.reset();
        }, (error) => {
        toast.error('Failed to send message. Please try again later.');
        });
    };


    // For Modal
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }

        // Clean up on unmount
        return () => {
        document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

  return (
    <div className='h-screen'>
        <nav className='w-full bg-white flex flex-col lg:flex-row justify-center lg:justify-between items-center h-[10%] lg:px-5'>
            <div className='w-[65%] md:w-[50%] lg:w-[20%]'>
                <img src={assets.logo_v1} alt="" className='w-full' />
            </div>

            <button onClick={() => setIsOpen(true)} className='hidden lg:block text-black bg-transparent py-1.5 px-10 border border-black font-light cursor-pointer'>
                CONTACT US
            </button>
        </nav>

        <div className='h-[90%] relative overflow-hidden'>
            <div className='h-full element'>
            </div>

            <div className='absolute inset-0 top-[30%] md:top-[35%] z-10 flex items-center justify-center flex-col gap-10 h-fit'>
                <h3 className='md:hidden text-center text-white text-4xl font-bold leading-normal'>Innovating <br /> Policy <br /> Solutions Together</h3>
                <h3 className='hidden md:block text-center text-white text-5xl leading-normal font-bold'>Innovating Policy <br /> Solutions Together</h3>

                <button onClick={() => setIsOpen(true)} className='text-white md:text-lg bg-[#353030]/80 py-1.5 px-10 border border-white font-light cursor-pointer'>
                    JOIN US
                </button>
            </div>
        </div>

        {/* Modal */}
        {isOpen && (
            <>
            {/* Blurred Background */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}/>

            {/* Modal */}
            <div className="fixed top-1/2 left-1/2 z-50 w-[95%] md:w-full max-w-md p-6 bg-white rounded shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-black hover:text-[#353030]/80 cursor-pointer mt-2">
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-xl uppercase mb-4">Contact Us</h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label className="block text-sm">Name</label>
                        <input
                        type="text"
                        className="w-full px-3 py-2 border rounded"
                        name="name"
                        placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm">Email</label>
                        <input
                        type="email"
                        className="w-full px-3 py-2 border rounded"
                        name="email"
                        placeholder="Your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm">Message</label>
                        <textarea
                        name="message"
                        className="w-full px-3 py-2 border rounded"
                        rows="4"
                        placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button type='submit' className='text-black bg-transparent py-1.5 w-full px-10 border border-black cursor-pointer'>
                        Send Message
                    </button>
                </form>
            </div>
            </>
        )}


    </div>
  )
}

export default Hero