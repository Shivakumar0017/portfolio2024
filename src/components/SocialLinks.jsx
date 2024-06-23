import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsPersonLinesFill} from "react-icons/bs"

const SocialLinks = () => {

    const links=[
        {
            id:1,child:(<>LinkedIn <FaLinkedin size={25}></FaLinkedin></>),href: 'https://www.linkedin.com/in/shiva-kumar-r-b1a16624a/',
            style: 'rounded-tr-md bg-blue-800'
        },
        {
            id:2,child:(<> Github<FaGithub size={25}></FaGithub></>),href: 'https://github.com/Shivakumar0017', style: 'bg-slate-900' ,
        },
        {
            id:3,child:(<>Mail<HiOutlineMail size={25}></HiOutlineMail></>),href: 'mailto:rshivakumar017@gmail.com',style: 'bg-red-500'
        },
        {
            id:4,child:(<>Resume<BsPersonLinesFill size={25}></BsPersonLinesFill></>),href: '/Resume.pdf',download: true,
            style: 'rounded-br-md bg-lime-300'
        },
    ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
<ul>
    {links.map(({id,child,href,style,download})=>(
        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-115px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " + style}>
    <a href={href} className='flex justify-between items-center w-full text-white ' download={download} target="_blank" rel="noreferrer">
        {child}
        </a>
        </li>
    ))}
    
</ul>

    </div>
  )
}

export default SocialLinks