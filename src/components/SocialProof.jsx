import { iconCommunities, iconMesages } from "../images";
import React from 'react'

function SocialProof() {

    return(

        <section className="w-full max-w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center">

            <div className="w-full flex flex-col items-center justify-start">

                <div className="">

                    <img src={iconCommunities} alt="icon communities" className="w-[35px]" />
                    <h1 className="text-veryDarkCyan font-openSans font-openSansBold text-[50px]">1.4k+</h1>
                    <p className="font-openSans text-veryDarkCyan font-openSansRegular text-center">Communities Formed</p>

                </div>

            </div>

            <div className="w-full flex flex-col items-center justify-start">

                <div>

                    <img src={iconMesages} alt="icon communities" className="w-[35px]" />
                    <h1 className="text-veryDarkCyan font-openSans font-openSansBold text-[50px]">2.7m+</h1>
                    <p className="font-openSans text-veryDarkCyan font-openSansRegular text-center">Messages Sent</p>

                </div>

            </div>

        </section>
    )
}

export default SocialProof;