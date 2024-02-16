import React from 'react'

const Projectlist = ({projects}) => {
  return (
    <>
       <div class="-screen flex flex-row gap-0 lg:gap-[10rem] justify-center items-center mx-5  mt-6">
        <div class="h-[4px] w-[8rem] md:w-[30em] bg-[#162E45]"></div>
        <p class="text-[20px] md:text-[30px] font-['Montserrat'] text-center font-extrabold mx-auto w-[20rem] text-[#162E45] md:w-[12rem]">
          FYDP 2022
        </p>
        <div class="h-[4px] w-[8rem] md:w-[30rem] bg-[#162E45]"></div>
      </div>
      <div className="flex flex-col gap-2 px-5 text-[#1b354e] font-['Montserrat'] py-5 pb-5 mb-[8rem] mt-10 border-[#061A2D]">
        <div className="text-[30px] font-semibold font-['Montserrat'] text-[#061A2D]">
          PROJECTS LIST
        </div>
        <div>
            {projects?.map((item) => (
              <div key={item.id} className='gap-2'>
                <li className="text-[#7D7D7D] gap-3">
                <a href={`#${item.id}`} className="text-[#7D7D7D] hover:text-[#00B4E8] hover:cursor-pointer">
                  {item.title}
              </a>
              <br></br> <br />
              </li>
              </div>
            ))}
          
        </div>
        </div>
    </>
  )
}

export default Projectlist;