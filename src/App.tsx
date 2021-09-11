import React from "react";
import { Loading } from "./components/Loading";
import "./styles/index.css";

function App() {
  return (
    <main className='main-wrap'>
      {/* while some other stuff, do:*/}
      <Loading message ='Welcome to chocolate'/>
    </main>
  );
}

export default App;
