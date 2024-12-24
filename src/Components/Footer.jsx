import { FacebookFilled, InstagramFilled, LinkedinFilled, RightOutlined, TwitterOutlined } from '@ant-design/icons';
import React from 'react';

const Footer = () => {
  return (

    //  bg-footer-texture is used to background image which is defined in tailwind.config. file. 

    <footer className='font-sans bg bg-footer-texture '>
      <div className="backdrop-brightness-95 p-10 border-t border-gray-300 text-[#333] flex flex-wrap justify-between">

        <div className="flex-1 p-2 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="/contact" className="hover:text-black"> <RightOutlined className='text-xs text-gray-400' /> Contact Us</a></li>
            <li className="mb-2"><a href="/shipping" className="hover:text-black"> <RightOutlined className='text-xs text-gray-400' /> Shipping & Delivery</a></li>
            <li className="mb-2"><a href="/returns" className="hover:text-black"> <RightOutlined className='text-xs text-gray-400' /> Returns & Exchanges</a></li>
            <li className="mb-2"><a href="/faq" className="hover:text-black"> <RightOutlined className='text-xs text-gray-400' /> FAQs</a></li>
          </ul>
        </div>


        <div className="flex-1 p-2 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="/about" className="hover:text-black"> <RightOutlined className='text-xs text-gray-400' /> About Us</a></li>
            <li className="mb-2"><a href="/careers" className="hover:text-black"> <RightOutlined className='text-xs text-gray-400' /> Careers</a></li>
            <li className="mb-2"><a href="/privacy" className="hover:text-black"> <RightOutlined className='text-xs text-gray-400' /> Privacy Policy</a></li>
            <li className="mb-2"><a href="/terms" className="hover:text-black"> <RightOutlined className='text-xs text-gray-400' /> Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="flex-1 p-2 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><FacebookFilled /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><TwitterOutlined /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><InstagramFilled /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><LinkedinFilled /></a>
          </div>
        </div>

        <div className="flex-1 p-2 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-2">We Accept</h3>
          <div className="flex mt-4 space-x-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYFc0LxnBekf6fVV7eehPXk7qLTBPLM922w&s" alt="MasterCard" className="max-w-[50px]" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVmQ4MVjRGzeaWjSiSHd90jv73ua23rC_mw&s" alt="PayPal" className="max-w-[50px]" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkHNRQj89cAP1RrrlUSfezirOARmxtsIbwg&s" alt="UPI" className="max-w-[50px]" />
          </div>
        </div>

      </div>

      <div className='bg-cyan-50 p-5 text-center text-sm'>
        <div>
          <span>&copy;</span>Copyright <strong><span>FashionMart.</span></strong>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
