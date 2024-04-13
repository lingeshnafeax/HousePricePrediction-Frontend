import Home from "./components/Home/Home";
import Prediction from "./components/Home/Prediction";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col gap-y-10 w-full">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </div>
  );
}

export default App;
