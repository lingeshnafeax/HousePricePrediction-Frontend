import Home from "./components/Home/Home";
import Prediction from "./components/Home/Prediction";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex w-full flex-col gap-y-7 sm:gap-4">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </div>
  );
}

export default App;
