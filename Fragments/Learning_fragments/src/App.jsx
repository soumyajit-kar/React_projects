// import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'

// function App() {
//   let foodItems=["Dal","Green Sabji","Rooti","Vaat"];
//   return (
    
//       <>
//    <h1>Healthy Foods</h1>
//  { /* <ul class="list-group">
//   <li class="list-group-item">Dal</li>
//   <li class="list-group-item">Dahi</li>
//   <li class="list-group-item">Paneer</li>
//   <li class="list-group-item">Ghee</li>
//   <li class="list-group-item">Rooti</li>
// </ul> */ }
// <ul class="List-group">
//   {
//    foodItems.map(item)=>(
//     <li class="list-group-item">
//       {item}
//     </li>
//    ))}
// </ul>
// </>
//   );

  
  
//    }

// export default App;

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import ".App.css";

function App(){
   let foodItems=["Dal","Green Vegetable","Roti","Salad","Milk"];
   return (
    <>
   <h1>
    Healthy Food
   </h1>
<ErrorMessage></ErrorMessage>
<FoodItems></FoodItems>
</>
   );



}





















