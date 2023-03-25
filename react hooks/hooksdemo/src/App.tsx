import React, {useState, useEffect} from 'react';
import Counter from './hooks/hooks-useState';
import GlobalStats from './hooks/hooks-useEffect';

const BASE_URL = "https://corona.lmao.ninja/v2";

function App() {
  const [globalStats, setGlobalStats] = useState({})
  useEffect(() => {
    const fetchGlobalStats = async () => {
      const response = await fetch(`${BASE_URL}/all`);
      const data = await response.json();
      setGlobalStats(data);
    };

    fetchGlobalStats();
    const intervalId = setInterval(fetchGlobalStats, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <Counter initialCount={1} />
      <GlobalStats stats={globalStats} />
    </div>
  );
}

export default App;
