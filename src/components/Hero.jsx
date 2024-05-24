import React from 'react'
import { Button } from '../components';
import { screenMockups } from '../images';

function Hero() {

    return(

        <section className='w-full max-w-[80%] md:max-w-[85%] mx-auto pb-[100px] pt-[50px]'>

            <div className='flex flex-col items-center justify-center text-center gap-[40px] py-[70px]'>

                <h1 className='capitalize text-veryDarkCyan font-openSans font-poppinsBold text-[23px] ss:text-[27px] sm:text-[31px]'>build the community <br className='block md:hidden' /> your fans will love</h1>

                <p className='font-openSans font-openSansRegular text-veryDarkCyan text-[12px] ss:text-[14px] sm:text-[16px]'>Huddle re-imagines the way we build <br className='block md:hidden' /> communities. You have a <br className='hidden md:block' /> voice, but so does <br className='block md:hidden' /> your audience. Create connections with your <br /> users as you engage in genuine discussions.</p>

                <Button />

            </div>

            <img src={screenMockups} alt="" className='w-full md:w-[70%] mx-auto' />

        </section>

    )
}

export default Hero;