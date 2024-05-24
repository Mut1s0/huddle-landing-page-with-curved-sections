import { Button } from "../components";
import React from 'react';

function CTA() {

    return(

        <section className='w-full  max-w-[80%] md:max-w-[85%] mx-auto flex flex-col items-center justify-center gap-[40px] pt-[50px] pb-[100px]'>

            <h1 className="capitalize font-veryDarkCyan font-poppins font-poppinsBold text-[25px] md:text-[30px] lg:text-[33px] text-center">ready to build your <br className="block md:hidden" /> community ?</h1>

            <Button />

        </section>

    )
}

export default CTA;