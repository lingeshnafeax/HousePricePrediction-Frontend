import { Code } from "lucide-react";
import Description from "./Description";
import Navbar from "./Navbar";
import Steps from "./Steps";
import Tools from "./Tools";
import PredictionHome from "./PredictionHome";

const Home = () => {
  return (
    <>
      <Navbar />
      <Description />
      <Tools />
      <Steps />
      <Code />
      <PredictionHome />
    </>
  );
};

export default Home;
