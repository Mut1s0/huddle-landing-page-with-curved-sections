import React from 'react'
import { illustartionFlowingConversation, illustartionGrowTogether, illustartionYourUsers } from '../images';

function Benefits() {

    return(

        <section className='w-full max-w-[80%] md:max-w-[85%] mx-auto flex flex-col gap-[150px] pb-[50px]'>

            <div className='flex justify-center items-center flex-col-reverse md:flex-row gap-[50px]'>

                <div className='w-full text-center md:text-left flex flex-col gap-[15px]'>

                    <h1 className='font-poppins font-poppinsBold capitalize font-veryDarkCyan text-[25px] lg:text-[30px]'>grow together</h1>
                    <p className='font-openSans font-openSansRegular text-[11px] md:text-[10px] lg:text-[12.5px]'>Generate meaningful discussions with your <br className='block md:hidden' /> audience and build a <br className='hidden md:block' /> strong, loyal community. <br className='block md:hidden' /> Think of the insightful conversations you <br className='hidden md:block' /> miss <br className='block md:hidden' /> out with a feedback form.</p>

                </div>

                <img src={illustartionGrowTogether} alt="" className='w-full md:w-[45%]' />

            </div>

            <div className='flex justify-center items-center flex-col md:flex-row gap-[50px] lg:gap-[100px]'>

                <img src={illustartionFlowingConversation} alt="" className='w-full md:w-[45%]' />

                <div className='w-full text-center md:text-left flex flex-col gap-[15px]'>

                    <h1 className='font-poppins font-poppinsBold capitalize font-veryDarkCyan text-[25px] lg:text-[30px]'>flowing conversations</h1>
                    <p className='font-openSans font-openSansRegular text-[11px] md:text-[9.5px] lg:text-[12.5px]'>You wouldn't paginate a conversation in real life, <br className='block md:hidden' /> so why do it online?<br className='hidden md:block' /> Our threads have just-in-<br className='block md:hidden' />time loading for a more natural flow.</p>

                </div>

            </div>

            <div className='flex justify-center items-center flex-col-reverse md:flex-row gap-[50px]'>

                <div className='w-full text-center md:text-left flex flex-col gap-[15px]'>

                    <h1 className='font-poppins font-poppinsBold capitalize font-veryDarkCyan text-[25px] lg:text-[30px]'>your users</h1>
                    <p className='font-openSans font-openSansRegular text-[11px] md:text-[9.5px] lg:text-[12.5px]'>It takes no time at all to integrate Huddle with <br className='block md:hidden' /> your app's <br className='hidden md:block' /> authentication solution. This means, <br className='block md:hidden' /> once signed in to your app, your <br className='hidden md:block' /> users can start <br className='block md:hidden' /> chatting immediately.</p>

                </div>

                <img src={illustartionYourUsers} alt="" className='w-full md:w-[45%]' />

            </div>

        </section>

    )
}

export default Benefits;