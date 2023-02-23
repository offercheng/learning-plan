import React from 'react';
import './App.css';
import resourceStore from './store/whenStore';

function App() {
  return (
    <div>
      {resourceStore.isVisible}
    </div>
  );
}

export default App;
