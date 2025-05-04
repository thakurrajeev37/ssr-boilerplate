import { observer } from 'mobx-react'
import React from 'react'
import rootStore from "../../../store";

const Counter = observer(() => {
  const { counterStore } = rootStore;
  const incrementVal = () => {
    alert();
  }
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <p>Double Count: {counterStore.doubleCount}</p>
      <button onClick={incrementVal}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
});

export default Counter