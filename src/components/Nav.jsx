import React from 'react'
import { logo } from '../images'

function Nav() {

    return(

        <nav className='w-full max-w-[90%] mx-auto flex items-center justify-between pt-[30px]'>

            <img src={logo} alt="" className='w-[130px]' />

            <div>

                <h1 className='text-lightRed border border-lightRed py-2 px-5 rounded-[30px] text-[14px] cursor-pointer'>Try it free</h1>

            </div>

        </nav>
    )
}

export default Nav;