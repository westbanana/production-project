import {useState} from "react";
import classnames from './style.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(prev =>  prev + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button
        className={classnames.btn}
        onClick={increment}
      >
        increment
      </button>
    </div>
  )
}