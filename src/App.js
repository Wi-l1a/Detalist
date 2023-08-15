import React, { useEffect } from "react";
import Header from "./components/header";
import "./App.css";
import Home from "./home";
const App = () => {
// const getTest = () => {
  
//   fetch('http://87.249.54.27:5000/info/', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'd6c0c612-ab7b-4c5a-8375-b04337e64d59',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'article': '3 397 007 555',
//       'brand': 'BOSCH'
//     })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the response data
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// };

// useEffect(() => {
//   getTest();
// }, []);



  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
