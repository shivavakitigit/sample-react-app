import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Login from "./Components/Login/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import OtpPage from "./Components/OtpPage/OtpPage";
import Manatee from "./Components/Manatee";
import DefaultPage from "./Components/DefaultPage";
// import NarWhal from "./Components/NarWhal";`
import SomeWherePage from "./SomeWherePage";
// Login   Route
// SingUop Switch

function App() {
  // {  strating braces  starting of the code execution

  // }  end of the code execution
  return (
    <>
      {/* <NavBar />
      <Login /> */}
      {/* <BrowserRouter>
     
          <Routes>
            <Route path="/manatee">{<Manatee />}</Route>
            <Route path="/narwhal"></Route>
            <Route path="/whale"></Route>
          </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
       
          {/* <Header /> */}
          <Routes>
            <Route exact path="/" element={<Card />} />
            <Route path="/manatee" element={<Manatee />} />
            <Route path="/narwhal" element={<SomeWherePage />} />
          </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

// React is basicaally its component based

// trated functions are components

// function getName(name) {
//   return name;
// }

// // in react we can retunr it html5 css3 and js

// // shukla

// console.log(getName("shukla"));
