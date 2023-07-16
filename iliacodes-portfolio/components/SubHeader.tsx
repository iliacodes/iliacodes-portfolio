import React from 'react'
import Link from 'next/link'

const SubHeader = () => {
  return (
    <div className="mx-12 my-5 text-[18px] sm:text-[24px] text-white flex justify-evenly items-center xl:px-24">
        <Link href="/about" className="hover:text-[#9f9]">
          About
        </Link>
        <Link href="/journey"  className="hover:text-[#9f9]">
          Journey
        </Link>
        <Link href="/projects"  className="hover:text-[#9f9]">
          Projects
        </Link>
        <Link href='/contact' className="hover:text-[#9f9]">
          Contact
        </Link>
    </div>
  )
}

export default SubHeader;