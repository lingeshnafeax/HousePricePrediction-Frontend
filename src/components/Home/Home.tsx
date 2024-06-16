import Description from "../Header/Description";
import Navbar from "../Header/Navbar";
import Steps from "../Points/Steps";
import Tools from "../Tools/Tools";
import PredictionHome from "../Prediction/PredictionHome";
import Code from "../Code/Code";

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
