import React from 'react';
import './App.css';
import orderStore from './store/computedStore';

function App() {
  return (
    <div>
      {orderStore.price} * {orderStore.amount} = {orderStore.total}
    </div>
  );
}

export default App;
