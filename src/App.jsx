import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
import Button from './Button'

function App() {


  const fruits = [
    { id: 1, name: "Apple", calories:95 },
    { id: 2, name: "Orange", calories: 100 },
    { id: 3, name: "Grapes", calories: 60 },
    { id: 4, name: "Banana", calories: 80 },
    { id: 5, name: "Pineapple", calories: 40 },
];
const vegetables = [
    { id: 1, name: "Brocli", calories: "40" },
    { id: 1, name: "Brocli", calories: "40" },
    { id: 1, name: "Brocli", calories: "40" },
    { id: 1, name: "Brocli", calories: "40" }
];
// fruilts.sort((a, b) => a.fruitName.localeCompare(b.fruitName));
// const lowCalFruits = fruilts.filter(fruit => fruit.calories < 100)
// const listItems = lowCalFruits.map(lowCalFruits => <li className="list-item" key={lowCalFruits.id}>{lowCalFruits.fruitName}
//     :<b>{lowCalFruits.calories}</b> </li>);
return (<Button/>);
//     <>
//   {fruits.length >0 ?
// <List items={fruits} category="Fruits"/> :null}
// {vegetables.length >0 ?<List items={vegetables} category="Vegetables"/> 
// :"Fruits are empty"}

// </>);
  /* <Student name="Mahesh" age={25} isStudent={true} />
      <Student name="Vutej" age={27} isStudent={false} />
      <Student name="Sai" age={24} isStudent={true} />
      <Student name="Rakesh"/> */
    
  

}


export default App
