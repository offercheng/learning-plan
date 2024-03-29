import React, {useState, useEffect} from "react";

interface StateType {
  number?: any;
  color?: any;
}

interface GlobalType {
  stats: any
}

const Stat:React.FC<StateType> = ({ number, color }) => {
  return <span style={{ color: color, fontWeight: "bold" }}>{number}</span>;
}

const GlobalStats:React.FC<GlobalType> = ({ stats }) => {
  const { cases, deaths, recovered, active, updated } = stats;

  return (
    <div className='global-stats'>
      <small>Updated on {new Date(updated).toLocaleString()}</small>
      <table>
        <tr>
          <td>
            Cases: <Stat number={cases} color='red' />
          </td>
          <td>
            Deaths: <Stat number={deaths} color='gray' />
          </td>
          <td>
            Recovered: <Stat number={recovered} color='green' />
          </td>
          <td>
            Active: <Stat number={active} color='orange' />
          </td>
        </tr>
      </table>
    </div>
  );
}


export default GlobalStats