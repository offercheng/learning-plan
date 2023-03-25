import React, {useState} from "react";

interface initProps {
  initialCount: any
}

const Counter:React.FC<initProps> = ({initialCount}) => {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount: number) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount: number) => prevCount + 1)}>+</button>
    </>
  );
}

export default Counter