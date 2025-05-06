import React from 'react';
import './RefundPolicy.scss';
import { NavLink } from 'react-router-dom';
import '../TermsConditions/TermsConditions.scss';

const RefundPolicy = () => {
  return (
    <div className="TermsConditions min-h-full h-screen">
      <div className="inner-terms-section">
          <div className="top-breadcrumb-section py-16 border-b bg-Secondary border-white border-opacity-20">
            <div className="container">
              <div className="inner-breadcrumb-section">
                <h2 className='text-center font-semibold text-5xl mb-5'>REFUND & CANCELLATION POLICY</h2>
                <ul className='flex items-center justify-center gap-4'>
                  <li className='text-white text-lg hover:text-[#FF5353] duration-500 font-medium'><NavLink className={''} to={'/'}>Home</NavLink></li>
                  <li className='text-white'><i class="bi bi-chevron-right"></i></li>
                  <li className='text-white text-lg opacity-70'>Refund & Cancellation Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="policy-content pt-16 pb-100p ">
            <div className="container">
              <div className="inner-policy-content flex flex-col gap-30p w-3/4 mx-auto">
                <p className='text-Secondary leading-relaxed'>All purchases made through this website are final and non-refundable. Once payment has been successfully completed via Razorpay, the course content—delivered as a private link or downloadable file—is considered consumed and cannot be returned or revoked.</p>
                <p className='text-Secondary leading-relaxed'>As the nature of the course delivery is digital and immediate, we do not offer cancellations or exchanges after the order is placed. Please review the course description carefully before making your purchase. If you encounter any issues accessing the content, you may contact us for support, and we will do our best to resolve technical issues related to access.</p>
                <p className='text-Secondary leading-relaxed'>We appreciate your understanding and cooperation regarding this no-refund policy. This is in place to protect the value of the content and ensure fair use.</p>
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

RefundPolicy.propTypes = {};

RefundPolicy.defaultProps = {};

export default RefundPolicy;
