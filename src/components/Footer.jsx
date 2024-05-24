import React from 'react'
import { iconEmail, iconPhone, logo, facebook, instagram, twitter } from '../images'

function Footer() {

    return(

        <footer className='bg-veryDarkCyan'>

            <div className='w-full  max-w-[80%] md:max-w-[85%] mx-auto flex flex-col-reverse md:flex-row md-[30px] items-center justify-between text-white font-openSans py-[40px]'>

                <div className='w-full'>

                    <div>

                        <img src="" alt="Logo" />

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit. Quis quas dicta repudiandae accusamus aperiam <br /> nisi ducimus, quos optio soluta animi vero nostrum <br /> deleniti quia quidem perspiciatis! Quia dolores repellat nesciunt!</p>

                        <div className='flex flex-col items-start justify-center gap-[15px] py-[50px]'>

                            <div className='flex items-center justify-start gap-8'>

                                <img src={iconPhone} alt="" />
                                <p>Phone: <span></span>+1-543-123-4567</p>

                            </div>

                            <div className='flex items-center justify-start gap-8'>

                                <img src={iconEmail} alt="" />
                                <p>example@huddle.com</p>

                            </div>

                        </div>

                    </div>

                    <div className='flex items-center justify-start gap-4'>

                        <img src={facebook} alt="" className='cursor-pointer' />
                        <img src={instagram} alt="" className='cursor-pointer' />
                        <img src={twitter} alt="" className='cursor-pointer' />

                    </div>

                </div>

                <div className='w-full lg:h-[270px]'>

                    <div className='flex flex-col items-start justify-center gap-[20px] mb-[40px]'>

                        <h1 className='uppercase font-openSansBold text-[25px]'>newsletter</h1>
                        <p>To receive tips on how to grow your <br className='block md:hidden' /> community, <br className='hidden md:block' /> sign up to our weekly newsletter. <br className='block md:hidden' /> We'll never send <br className='hidden md:block' /> you spam or pass on your <br className='block md:hidden' /> email address.</p>

                    </div>

                    <div className='flex flex-col lg:flex-row items-end justify-center gap-[15px] lg:h-[35px]'>

                        <input type="text" className='w-full h-[35px] rounded-[5px]' />
                        <button type='button' className='bg-pink py-[10px] lg:py-0 px-[40px] rounded-[6px] cursor-pointer text-white font-openSansSemiBold w-[60%] lg:h-[35px] lg:w-[45%]'>Subscribe</button>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;