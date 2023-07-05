import React from 'react'
import Link from 'next/link'

const SubHeader = () => {
  return (
    <div className="mx-12 my-5 text-[18px] sm:text-[24px] text-white flex justify-evenly items-center xl:px-24">
        <Link href="/about" >
          About
        </Link>
        <Link href="/journey">
          Journey
        </Link>
        <Link href="/projects">
          Projects
        </Link>
        <Link href='/contact'>
          Contact
        </Link>
    </div>
  )
}

export default SubHeader;