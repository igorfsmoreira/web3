import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';

function App() {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlockNumber = async () => {
      try {
        const provider = ethers.getDefaultProvider('mainnet');
        const currentBlockNumber = await provider.getBlockNumber();
        setBlockNumber(currentBlockNumber);
      } catch (error) {
        console.error('Error fetching block number:', error);
      }
    };

    fetchBlockNumber();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {blockNumber}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
