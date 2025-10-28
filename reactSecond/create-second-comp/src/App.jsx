// import Hello from "./Hello";
// import {KgButton} from "./kgButton";
// import Random from "./Random";

// function App(){
//   return <div>

//      <h1>
//      Hello world!  this is the best react course
//       </h1>
//      <Hello></Hello>
//      <Random></Random>
//      <Random></Random>
//      <Random></Random>
//      <Random></Random>
//   </div>


// }
// export default App;


import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [count,setCount]=useState(0)
  return (
    <div className="App">
      <h1><button type="button" class="btn btn-warning">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button></h1>
      
      
    </div>
  )
}

export default App;



