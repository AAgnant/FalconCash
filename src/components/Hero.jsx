import React from 'react'
import styles from '../style'
import {discount, falcon } from '../assets';
import GetStarted from './GetStarted'
const Hero = () => 
   (
    <section id="home" className={`flex
    md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row
         items-center py-[6px] px-4
        bg-discount-gradient rounded[10px] mb-2">
          <img src={discount} alt="discount" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">7%
            </span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row
        justify-between items-center w-full">
          <h1 className="flex-1 font-poppins
          font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Atlanta's New <br className="sm:block
            hidden" /> {" "}
            <span
            className="text-gradient">Generation</span>
             {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4  mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white
       ss:leading-[100px] leading-[75px] w-full"> Payment Method</h1>
       <p className={`${styles.paragrah} max-w-[470px] mt-5`}>
        Falcon Cash is Atlanta's new generation paymnet method for public and private services.
        Sign-up for discount rewards and other cash prizes!</p>
       </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={falcon} alt ="billing" className="w-[75%] h-[75%] relative left-100" />
        
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>  
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>

  )
   


export default Hero