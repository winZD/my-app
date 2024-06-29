import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Survey from "./components/Survey";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/my-app"
          element={
            <>
              <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1>Vite + React + Deploy</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  Count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          }
        />
        <Route path="my-app/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
