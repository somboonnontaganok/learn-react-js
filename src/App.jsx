import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'
import MyProfile from './components/MyProfile'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Poon Nontaganok")
  const [ifTrue, setifTrue] = useState(true)

  const user = {
    firstName: 'Keanu',
    lastName: 'Reeves',
    imgPic: 'https://t1.blockdit.com/photos/2019/04/5cba42cd0e0ce0101ec871fe_800x0xcover_LFRzAYxz.jpg'

  }

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product =>
    <li 
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
      >
        {product.title}
      </li>
  );

  function handleClick() {
    setCount(count + 1)
  }

  function handleClickMinus() {
    setCount(count - 1)
  }

  return (
    // Recat Fragment
    <>
      <h1>Welcome to Poon Studio</h1>
      <MyProfile data={user}/>
      
      <br />
      <h1>Counters that update separately</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleClickMinus}>Decrease</button>
      <br />
      {/* Ternary operator */}
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <h2>Product Lists</h2>
      <ul>{listItems}</ul>
    </>
  )
}

export default App
