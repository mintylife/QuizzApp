import React from "react";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState"
import { Question } from "./components/Question.component";
import { AnswerList } from "./components/AnswerList.component"



function App() {

  return (
    <GlobalProvider>
      <div className="container">
        <Question />
        <AnswerList />
      </div>
    </GlobalProvider>
  );
}


export default App;