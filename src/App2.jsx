import './App.css';
import React, { useState } from 'react';
function App2() {
  const [name, setName] = useState(null);
  const [nameFieldText, setNameFieldText] = useState("gffggi");
  const handleButtonClick = () => {
    alert("hekko");
  };
  // Import CSS file
  return (
    <>
      <h1> hello</h1>
    </>
  );
}
export default App2;

