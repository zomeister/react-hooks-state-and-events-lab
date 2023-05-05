import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light"
  function handleClick() {
    setDarkMode(prev => !prev)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkMode ? "dark" : "light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
