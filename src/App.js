import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';

const items = [
  {
    id: 1,
    value: 'Pulp Fiction',
  },
  {
    id: 2,
    value: 'The Prestige',
  },
  {
    id: 3,
    value: 'Blade Runner 2049',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dropdown title="Select a movie"  items={items} multiselect/>
      </header>
    </div>
  );
}

export default App;
