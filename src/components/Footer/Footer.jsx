import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#244d3f] text-white py-12 px-6 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                <h2 className="text-5xl font-bold mb-4">
                    KeenKeeper
                </h2>

                <p className="text-sm text-gray-300 text-center mb-8 max-w-md">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex flex-col items-center gap-4 mb-16">
                    <span className="text-sm font-medium">Social Links</span>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white p-2 rounded-full text-[#2D4A3E] hover:bg-gray-200 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-[#2D4A3E] hover:bg-gray-200 transition-colors">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-[#2D4A3E] hover:bg-gray-200 transition-colors">
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px]  text-gray-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400">Privacy Policy</a>
                        <a href="#" className="text-gray-400">Terms of Service</a>
                        <a href="#" className="text-gray-400">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;