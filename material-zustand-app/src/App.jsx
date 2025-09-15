import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
    <Router />
      <div>
        <h1>Start working on your app from here</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
