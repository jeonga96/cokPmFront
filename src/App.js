import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";

import Grandopen from "./screens/Grandopen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grandopen" element={<Grandopen />} />
      </Routes>
    </div>
  );
}

export default App;
