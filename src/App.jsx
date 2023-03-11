import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'

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

  return (
    // Recat Fragment
    <>
      <h1>Welcome to Poon App</h1>
      <p>{count}</p>
      <p>My Name is {user.firstName} {user.lastName}</p>
      <img src={user.imgPic} alt={user.firstName} width="3 50" height="auto" />
      <br />
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <br />
      {/* Ternary operator */}
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <h2>Product Lists</h2>
      <ul>{listItems}</ul>
    </>
  )
  function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }
}

export default App
