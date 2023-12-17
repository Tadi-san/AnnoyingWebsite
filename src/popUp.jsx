import React from 'react'

export const PopUp = () => {
  return (
    <div className='h-screen relative cursor-vertical-text bg-green-900'>
   <span className=' ml-36 text-gray-400 text-2xl'>here I have made a beautiful web site with the most power full frame work,  react! and tailwindcss </span> 
        <div className=' absolute top-11 left-32 flex bg-red-900 w-1/5 gap-8 flex-col rounded-tl-full rounded-br-full'>
            <div className=' flex gap-4'> <img className=' w-24' src='images/click.png' /> <a href='#Level1' className=' rounded-3xl shadow-inner p-1 text-gray-400 text-center bg-black'>Level1 of ugliness</a></div>
            <div className=' flex gap-4'> <img className=' w-24' src='images/click.png' /><a href='#' className=' rounded-3xl shadow-inner p-1 text-gray-400 bg-blue-900'>Level2 of ugliness</a></div>
            <div className=' flex gap-4'> <img className=' w-24' src='images/click.png' /><a href='#' className=' rounded-3xl shadow-inner p-1 text-gray-400 bg-yellow-900'>Level3 of ugliness</a></div>
            <div className=' flex gap-4'> <img className=' w-24' src='images/click.png' /><a href='#' className=' rounded-3xl shadow-inner p-1 text-gray-400 bg-purple-900'>Level4 of ugliness</a></div>
        <span>stop trying too hard the links won't take you anywhere </span>
        </div>
    </div>
  )
}
