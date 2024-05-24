import React from 'react'
import { logo } from '../images'

function Nav() {

    return(

        <nav className='w-full max-w-[80%] md:max-w-[85%] mx-auto flex items-center justify-between pt-[40px]'>

            <img src={logo} alt="" className='w-[130px]' />

            <div>

                <h1 className='text-pink border border-pink py-2 px-5 rounded-[30px] text-[14px] cursor-pointer'>Try it free</h1>

            </div>

        </nav>
    )
}

export default Nav;