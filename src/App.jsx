import React,{useState} from "react"

function App() {
  const [color, setcolor] = useState('olive')

  return (
   <div 
   style={{backgroundColor: color}}
   className="w-full h-screen duration-200">
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={()=> setcolor('red')}
        style={{backgroundColor:'red'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Red
        </button>
        <button
        onClick={()=> setcolor('green')}
        style={{backgroundColor:'green'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Green
        </button>
        <button
        onClick={()=> setcolor('blue')}
        style={{backgroundColor:'blue'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Blue
        </button>
        <button
        onClick={()=> setcolor('gray')}
        style={{backgroundColor:'gray'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Gray
        </button>
        <button
        onClick={()=> setcolor('yellow')}
        style={{backgroundColor:'yellow'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Yellow
        </button>
        <button
        onClick={()=> setcolor('pink')}
        style={{backgroundColor:'pink'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Pink
        </button>
        <button
        onClick={()=> setcolor('lavender')}
        style={{backgroundColor:'lavender'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Lavender
        </button>
        <button
        onClick={()=> setcolor('purple')}
        style={{backgroundColor:'purple'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Purple
        </button>
        <button
        onClick={()=> setcolor('white')}
        style={{backgroundColor:'white'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">White
        </button>
        <button
        onClick={()=> setcolor('black')}
        style={{backgroundColor:'black'}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Black
        </button>
      </div>
     </div>
   </div>
  )
}

export default App
