import React, { useState } from 'react'

function Level4() {
  const [style, setStyle] = useState('')
  return (
    <div className=' h-screen flex p-5 justify-around'>
    If you have any comment's or bug reports or if you're so happy with your experience here and wanted to contact me, please fill this form    
    <form className=' flex flex-col p-2 border'>
   <h2 className=' text-2xl font-semibold'> Easy form </h2>
    <span>First letter of your Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Second letter of your Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Third letter of your Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Forth letter of your Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Fifth letter of your Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Sixth letter of your Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Seventh letter of your Father's Name</span>
      <input type='text' required className=' border' maxLength={1} />
      <span>First letter of your Father's Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Second letter of your Father's Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Third letter of your Father's Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Forth letter of your Father's Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Fifth letter of your Father's Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Sixth letter of your Father's Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Seventh letter of your Father's Name</span>
      <input type='text' required className=' border' maxLength={1} />
      
      <span>First letter of your Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Second letter of your Name</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Third letter of your message</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Forth letter of your message</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Fifth letter of your message</span>
      <input type='text' required className=' border' maxLength={1} />

      <span>Sixth letter of your message</span>
      <input type='text' required className=' border' maxLength={1} />
      <button className=' bg-slate-700 mb-8' >Submit</button>
    </form>
    <div className=''>
    <h2 className=' text-2xl font-semibold'> Hard form </h2>
    <form onMouseLeave={()=>setStyle('flex')} onMouseEnter ={()=>setStyle('hidden')} className={ style +' p-2 flex flex-col border rounded-lg '}>
    <span> Full Name </span>
    <input className=' border rounded-md' required />
    <span> Message</span>
    <textarea className=' border rounded-md' required />
    <button className=' p-2 rounded-3xl bg-purple-500 my-2'>Submit</button>
    </form>

    </div>
    </div>
  )
}

export default Level4