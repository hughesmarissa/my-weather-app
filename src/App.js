import React from 'react';

const api = {
    key: 'f380b5a69a1ca9ff2f4843a8ecd7bf3d',
    base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  return (
    <div className="app">
        <main>
            <div className="search-box">
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                />
            </div>
        </main>
    </div>
  );
}

export default App;
