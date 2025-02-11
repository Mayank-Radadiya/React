import { useState , useCallback , useEffect ,  useRef} from 'react'
import './App.css'

function App() {
 const [length , setLength] = useState(4)
 const [NumAllowed ,  SetNumAllowed] = useState(false)
 const [CharAllowed ,  SetCharAllowed] = useState(false)
 const [password, setPassword] = useState('')


 let passwordReference = useRef(null)

 function passwordCopy() {
   window.navigator.clipboard.writeText(password);
 }

 let passwordGenerator  = useCallback( () => {

   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if (NumAllowed) str += "1234567890" 
   if(CharAllowed) str += "!@#$%^&*=+?"

   for (let i = 0; i < length; i++) {
    let newChar = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(newChar)
    
   }
   setPassword(pass)

 } ,[length, NumAllowed, CharAllowed, setPassword] )

 function Status() {
  let state 
  if (CharAllowed == false && NumAllowed == false){
     state = "Only Normal Characters"
  }
 else if(CharAllowed == true && NumAllowed == false){
    state = "  Characters + Special Characters " }

   else if(CharAllowed == false && NumAllowed == true){
    state = "Characters + Numbers" }

    else if(CharAllowed == true && NumAllowed == true){
    state = "Characters + Numbers + Special Characters" }

    return state
    }

 useEffect(()=> {
  passwordGenerator()
 } , [length, NumAllowed, CharAllowed, passwordGenerator])

  return (
    <>
   <div className=' w-full max-w-md mx-auto rounded-md px-4 py-3 my-8 bg-gray-700 text-pink-500'>

    <h1 className='text-4xl text-white'>Password Generator</h1> 

    <input 
      className='outline-none w-full py-2 px-3 mt-4 text-black'
      type="text"
      placeholder='Password Includes: Only Characters' 
      readOnly
      value={Status()}
      />
    <div className='flex shadow rounded-lg overflow-hidden mb-4 '>

      <input 
      value={password}
      className='outline-none w-full py-2 px-3 mt-4'
      type="text"
      placeholder='Password' 
      readOnly
      ref = {passwordReference} 
      />
     <button type="button" 
     onClick={ passwordCopy ()}
     className="text-white bg-pink-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ml-4 mt-4 hover:bg-pink-900 ease-in-out duration-300">Copy</button>
    </div>
  
    <div className='flex text-sm gap-x-2 flex-col gap-4 mt-8'>
    
    <button type="button" 
    onClick={ ()=> passwordGenerator() }
    className="text-white bg-cyan-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ml-4 hover:bg-cyan-100 ease-in-out duration-700">Generate New</button> 

      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={4}
        max={30}
        value={length}
         className='cursor-pointer' 
         onChange={ (e) => {setLength(e.target.value)}}
         />
          <label className='text-xl '> Length: {length}</label> 
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={NumAllowed} 
          id="numberInput"
          onChange={ ()=> {SetNumAllowed((prev) => !prev)} }
          
      />
      <label className='text-white text-lg'  htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input 
              type="checkbox"
              defaultChecked={CharAllowed}
              id="characterInput"
              onChange={ ()=> {SetCharAllowed((prev) => !prev)} }
              
          />
          <label className='text-white text-lg' htmlFor="characterInput"> Special Characters</label>
      </div>
      </div>
   </div>
    </>
  )
}

export default App
