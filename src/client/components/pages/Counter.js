import { observer } from 'mobx-react'
import React from 'react'
import rootStore from "../../store";

const Counter = observer(() => {
  const { counterStore } = rootStore;
  return (
    <>
      <p>Count: {counterStore.count}</p>
      <p>Double Count: {counterStore.doubleCount}</p>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
    </>
  )
});

export default Counter