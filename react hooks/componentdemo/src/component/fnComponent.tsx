import React, {useState} from "react";

interface IProps {
  test?: any;
}

const Account: React.FC<IProps> = (props) => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default Account