import "./App.css";
import * as React from "react";
import OutScoreTable from "./components/OutTable";
import InScoreTable from "./components/InTable";

function App() {
  return (
    <>
      <v1>Player1: 小室幹太</v1>
      <OutScoreTable />
      <InScoreTable />
    </>
  );
}

export default App;
