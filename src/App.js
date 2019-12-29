import React from "react";

const App = () => {
  const APP_ID = "3dad0141";
  const APP_KEY = "9999d40cef8531c5b99ef78414f3fbe6";

  const exampleReq =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default App;
