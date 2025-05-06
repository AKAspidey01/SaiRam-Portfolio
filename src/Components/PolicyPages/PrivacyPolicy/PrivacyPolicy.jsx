import React from 'react';
import './PrivacyPolicy.scss';
import '../TermsConditions/TermsConditions.scss'
import { NavLink } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="TermsConditions min-h-full h-screen">
      <div className="inner-terms-section">
          <div className="top-breadcrumb-section py-16 border-b bg-Secondary border-white border-opacity-20">
            <div className="container">
              <div className="inner-breadcrumb-section">
                <h2 className='text-center font-semibold text-5xl mb-5'>PRIVACY POLICY</h2>
                <ul className='flex items-center justify-center gap-4'>
                  <li className='text-white text-lg hover:text-[#FF5353] duration-500 font-medium'><NavLink className={''} to={'/'}>Home</NavLink></li>
                  <li className='text-white'><i class="bi bi-chevron-right"></i></li>
                  <li className='text-white text-lg opacity-70'>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="policy-content pt-16 pb-100p ">
            <div className="container">
              <div className="inner-policy-content flex flex-col gap-30p w-3/4 mx-auto">
                <p className='text-Secondary leading-relaxed'>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website and purchase our courses.</p>
                <p className='text-Secondary leading-relaxed'>When you place an order or sign up through our website, we collect personal information such as your name, email address, and payment details (processed securely through Razorpay). This information is used solely for fulfilling your purchase and for communication related to your course access. We do not share or sell your data with any third parties, except as required by law or to complete your transaction securely.</p>
                <p className='text-Secondary leading-relaxed'>We may also collect non-personal data such as your browser type or visit patterns to improve the website experience. All data collected is stored securely and handled with care.</p>
                <p className='text-Secondary leading-relaxed'>By using our site and services, you consent to our collection and use of your information as described in this policy. If any changes are made to this Privacy Policy, they will be updated on this page.</p>
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
  )
}

PrivacyPolicy.propTypes = {};

PrivacyPolicy.defaultProps = {};

export default PrivacyPolicy;
