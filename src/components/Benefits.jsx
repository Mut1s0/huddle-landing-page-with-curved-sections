import React from 'react'
import { illustartionFlowingConversation, illustartionGrowTogether, illustartionYourUsers } from '../images';

function Benefits() {

    return(

        <section className='w-full max-w-[90%] mx-auto'>

            <div className='flex justify-center items-center gap-[40px]'>

                <div className='w-full'>

                    <h1 className='font-poppins font-poppinsBold capitalize font-veryDarkCyan text-[30px]'>grow together</h1>
                    <p className='font-openSans font-openSansRegular'>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out with a feedback form.</p>
                </div>

                <img src={illustartionGrowTogether} alt="" className='w-[50%]' />

            </div>

            <div className='flex justify-center items-center gap-[40px]'>

                <img src={illustartionFlowingConversation} alt="" className='w-[50%]' />

                <div className='w-full'>

                    <h1 className='font-poppins font-poppinsBold capitalize font-veryDarkCyan text-[30px]'>flowing conversations</h1>
                    <p className='font-openSans font-openSansRegular'>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
                </div>

            </div>

            <div className='flex justify-center items-center gap-[40px]'>

                <div className='w-full'>

                    <h1 className='font-poppins font-poppinsBold capitalize font-veryDarkCyan text-[30px]'>your users</h1>
                    <p className='font-openSans font-openSansRegular'>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                </div>

                <img src={illustartionYourUsers} alt="" className='w-[50%]' />

            </div>

        </section>

    )
}

export default Benefits;