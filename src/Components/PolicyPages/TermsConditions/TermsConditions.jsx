import React from 'react';
import './TermsConditions.scss';
import { NavLink } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="TermsConditions min-h-full h-screen">
      <div className="inner-terms-section">
          <div className="top-breadcrumb-section py-16 border-b bg-Secondary border-white border-opacity-20">
            <div className="container">
              <div className="inner-breadcrumb-section">
                <h2 className='text-center font-semibold text-5xl mb-5'>TERMS & CONDITIONS</h2>
                <ul className='flex items-center justify-center gap-4'>
                  <li className='text-white text-lg hover:text-[#FF5353] duration-500 font-medium'><NavLink className={''} to={'/'}>Home</NavLink></li>
                  <li className='text-white'><i class="bi bi-chevron-right"></i></li>
                  <li className='text-white text-lg opacity-70'>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="policy-content pt-16 pb-100p ">
            <div className="container">
              <div className="inner-policy-content flex flex-col gap-30p w-3/4 mx-auto">
                <p className='text-Secondary leading-relaxed'>Welcome to my website. By accessing and purchasing any course listed on this platform, you agree to abide by the following terms and conditions. These terms apply to all users who visit, browse, or make purchases on this website.</p>
                <p className='text-Secondary leading-relaxed'>All course content made available through this website is the intellectual property of the creator and is strictly for personal and educational use. Redistribution, resale, or unauthorized sharing of the course materials, including but not limited to video content, downloadable files, and private drive links, is prohibited and may lead to legal action.</p>
                <p className='text-Secondary leading-relaxed'>Once a course is purchased, access will be granted via a private Google Drive link or similar method. It is the buyer's responsibility to ensure their email and contact details are entered correctly during the purchase. All sales are final and non-refundable.</p>
                <p className='text-Secondary leading-relaxed'>We reserve the right to update or change these terms at any time without prior notice. Continued use of the site or its services after such modifications shall constitute your consent to the updated terms.</p>
              </div>
            </div>
          </div>
          <div className="bottom-privacy-section bg-Secondary py-8 mt-12 absolute bottom-0  w-full">
              <div className="container">
                <div className="privacy-links">
                    <ul className='flex items-center justify-center gap-10'>
                      <li><NavLink className={'text-white font-medium hover:text-[#FF5353] duration-300'} to={'/terms-conditions'}>Terms & Conditions</NavLink></li>
                      <li><NavLink className={'text-white font-medium hover:text-[#FF5353] duration-300'} to={'/privacy-policy'}>Privacy Policy</NavLink></li>
                      <li><NavLink className={'text-white font-medium hover:text-[#FF5353] duration-300'} to={'/refund-policy'}>Refund & Cancellation Policy</NavLink></li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

TermsConditions.propTypes = {};

TermsConditions.defaultProps = {};

export default TermsConditions;
