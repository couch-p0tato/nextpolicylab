import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { assets } from '../assets/assets';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

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
    <div className='relative mt-8'>
        <div className='bg-[url("/footer-bg.jpg")] bg-cover bg-center lg:h-[550px] lg:justify-between flex flex-col items-center py-8 lg:py-10 lg:px-8 gap-24 md:gap-32'>
            <div className='flex flex-col lg:flex-row lg:w-full lg:justify-between gap-10 md:gap-5 items-center'>
                <h3 className='font-bold text-2xl lg:text-3xl text-white text-center lg:text-left lg:w-[27%]'>Crafting Policy with innovation</h3>

                <button onClick={() => setIsOpen(true)} className='text-white md:text-lg bg-[#111010]/50 py-1.5 px-10 border-[0.5px] border-white font-light cursor-pointer'>
                    CONTACT US
                </button>
            </div>

            <div className='flex flex-col items-center gap-5 lg:w-full'>
                <div className='w-[80%] lg:w-[20%] lg:self-start'>
                    <img src={assets.logo_v3} alt="" className='w-full' />
                </div>

                <div className='text-white/60 flex flex-col lg:flex-row lg:justify-between lg:w-full items-center text-xs gap-3 lg:gap-0 text-center'>
                    <p className='lg:order-2'>
                        <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Legal Notice</a>
                    </p>

                    <p className='lg:order-1'>© 2025 Humanities Lab. All rights reserved.</p>
                </div>
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

export default Footer