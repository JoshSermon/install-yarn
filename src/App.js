import React from "react";
const api = {
  key: "dd375dfbfeeb88e76ef19ee90b7d98bd",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
