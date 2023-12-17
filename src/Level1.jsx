import React, { useState } from 'react'
import useSound from 'use-sound';
import ahh from '/sounds/ahhhh.mp3';
function Level1() {
    const [display1, setDesplay1] = useState('hidden')
    const [display2, setDesplay2] = useState('hidden')
    const [display3, setDesplay3] = useState('hidden')
    const [display4, setDesplay4] = useState('hidden')
    const [display5, setDesplay5] = useState('hidden')
    const [display6, setDesplay6] = useState('hidden')
    const [display7, setDesplay7] = useState('hidden')
    const [display8, setDesplay8] = useState('hidden')
    const [display9, setDesplay9] = useState('hidden')
    const [display10, setDesplay10] = useState('hidden')
    const [display11, setDesplay11] = useState('hidden')
    const [display12, setDesplay12] = useState('hidden')
    const [display13, setDesplay13] = useState('hidden')
    const [display14, setDesplay14] = useState('hidden')
    const [display15, setDesplay15] = useState('hidden')
    const [display16, setDesplay16] = useState('hidden')
    const [display17, setDesplay17] = useState('hidden')
    const [display18, setDesplay18] = useState('hidden')
    const [display19, setDesplay19] = useState('hidden')
    const [display20, setDesplay20] = useState('hidden')
    const [display21, setDesplay21] = useState('hidden')
    const [display22, setDesplay22] = useState('hidden')
    const [display23, setDesplay23] = useState('hidden')
    const [display24, setDesplay24] = useState('hidden')
    const [display25, setDesplay25] = useState('hidden')
    const [display26, setDesplay26] = useState('hidden')
    let [play] = useSound(ahh);
    
    
    const interval = setInterval(() => {
      play();
}, 15000)
    
    function player(){
      play()
      
      setDesplay1('block')
    }
    
    return (
    <div className=' h-screen relative bg-orange-600'>
    <div className=" text-center p-6 text-3xl text-white"> Welcome to this beautiful website, please calmly experiencing this majestic creation of a website</div>
      <span className=' p-4 text-xl text-white' >Press the button to hear a soothing and energetic sound </span>
      <button onClick={player} className="bg-white shadow-md p-2 text-black rounded-full">continue</button>
      <button onClick={()=>setDesplay2('block')} className={display1 + "  absolute top-16 right-5  bg-red-900 border border-red-900  p-1 rounded-full text-gray-50"}>Stop sound</button>
      <button onClick={()=>setDesplay3('block')}className={display2 + "  absolute bottom-3 right-5  bg-green-900 border border-red-900  p-1 rounded-full text-gray-50"}>are you sure?</button>
      <button onClick={()=>setDesplay4('block')}className={display3 + "  absolute top-3 left-5  bg-green-900 border border-red-900  p-4 rounded-full text-gray-50"}>are you really sure?</button>
      <button onClick={()=>setDesplay5('block')}className={display4 + "  absolute top-[50%] left-[50%] bg-yellow-900 border border-red-900  py-8 rounded-full text-gray-50"}>one last time are you sure?</button>
      <button onClick={()=>setDesplay6('block')}className={display5 + "  absolute top-[30%] left-[45%] bg-red-900 border border-red-900  p-16 rounded-full text-gray-50"}>i can't believe this, really?</button>
      <button onClick={()=>setDesplay7('block')}className={display6 + "  absolute top-[10%] right-[20%] bg-green-900 border border-red-900  p-12 rounded-full text-gray-50"}>i'll give you one last chance , are you sure?</button>
      <button onClick={()=>setDesplay8('block')}className={display7 + "  absolute top-[20%] left-[20%]  bg-yellow-900 border border-red-900  p-32 rounded-full text-gray-50"}>unbelievable!, really</button>
      <button onClick={()=>setDesplay9('block')}className={display8 + "  absolute bottom-[10%] right-[80%]  bg-red-900 border border-red-900  p-8 rounded-full text-gray-50"}>are you for real right now?</button>
      <button onClick={()=>setDesplay10('block')}className={display9 + "  absolute top-[90%] right-[0%]  bg-green-900 border border-red-900  p-12 rounded-full text-gray-50"}>r u fr rn ?</button>
      <button onClick={()=>setDesplay11('block')}className={display10 + "   absolute top-[193px] right-[0px] bg-yellow-900 border border-red-900  p-44 rounded-full text-gray-50"}>fr fr?</button>
      <button onClick={()=>setDesplay12('block')} className={display11 + " absolute top-[653px] left-[0px] bg-green-900 border border-red-900  p-4 rounded-full text-gray-50"}>fr fr fr?</button>
      <button onClick={()=>setDesplay13('block')} className={display12 + " absolute top-[393px] left-[0px] bg-red-900 border border-red-900  p-4 rounded-full text-gray-50"}>fr fr fr fr?</button>
      <button onClick={()=>setDesplay14('block')} className={display13 + " absolute top-[50px] right-[500px] bg-green-900 border border-red-900  p-8 rounded-full text-gray-50"}>Ok then this is the last button</button>
      <button onClick={()=>setDesplay15('block')} className={display14 + " absolute bottom-[3px] right-[500px]  bg-red-900 border border-red-900  p-32 rounded-full text-gray-50"}>sike!, that's the wrong button</button>
      <button onClick={()=>setDesplay16('block')} className={display15 + " absolute top-[400px] left-[150px]  bg-green-900 border border-red-900  p-12 rounded-full text-gray-50"}>try harder</button>
      <button onClick={()=>setDesplay17('block')} className={display16 + " absolute top-[570px] right-[220px]  bg-green-900 border border-red-900  p-16 rounded-full text-gray-50"}>harder </button>
      <button onClick={()=>setDesplay18('block')} className={display17 + " absolute top-[370px] right-[490px]  bg-red-900 border border-red-900  p-4 rounded-full text-gray-50"}>press this button if you like the sound</button>
      <button onClick={()=>setDesplay19('block')} className={display18 + " absolute top-[280px] left-[0px]  bg-green-900 border border-red-900  p-8 rounded-full text-gray-50"}>so you like it!</button>
      <button onClick={()=>setDesplay20('block')} className={display19 + " absolute bottom-[49px] left-[350px]  bg-green-900 border border-red-900  p-20 rounded-full text-gray-50"}>if you like it then you'll be happy to know</button>
      <button onClick={()=>setDesplay21('block')} className={display20 + " absolute top-[170px] left-[50px]  bg-red-900 border border-red-900  p-12 rounded-full text-gray-50"}>that the sound will never stop</button>
      <button onClick={()=>setDesplay22('block')} className={display21 + " absolute bottom-[150px] left-[0px] bg-green-900 border border-red-900  p-8 rounded-full text-gray-50"}>thank you</button>
      <button onClick={()=>setDesplay23('block')} className={display22 + " absolute  bg-green-900 border border-red-900  p-4 rounded-full text-gray-50"}>thank you thank you</button>
      <button onClick={()=>setDesplay24('block')} className={display23 + " absolute top-[0%] left-[200px] bg-green-900 border border-green-900  p-44  rounded-full text-gray-50"}>thank you again</button>
      <button onClick={()=>setDesplay25('block')} className={display24 + " absolute top-[0%] right-[100px] bg-red-900 p-36 rounded-full text-gray-50"}>and again</button>
      <button onClick={()=>setDesplay26('block')} className={display25 + " absolute bottom-[0%] left-[250px] bg-yellow-900 p-44 rounded-full text-gray-50"}>and again</button>
      <button  className={display26 + " absolute bottom-[20%] left-[550px] p-48 rounded-full bg-green-900 text-gray-50"}>ahhhhhhhhhhhhhhh!</button>
    </div>
  )
}

export default Level1
