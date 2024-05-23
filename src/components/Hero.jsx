import React from 'react'
import { Button } from '../components';
import { screenMockups } from '../images';

function Hero() {

    return(

        <section className='w-full max-w-[90%] mx-auto'>

            <div className='flex flex-col items-center justify-center text-center'>

                <h1 className='capitalize text-veryDarkCyan font-openSans font-poppinsBold text-[30px]'>build the community your fans will love</h1>

                <p className='font-openSans font-openSansRegular text-veryDarkCyan'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions.</p>

                <Button />

            </div>

            <img src={screenMockups} alt="" className='w-full' />

        </section>

    )
}

export default Hero;