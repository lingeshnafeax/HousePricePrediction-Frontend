import Card from "./Card";
import Subheading from "./Subheading";
import Text from "./Text";
import { Link } from "react-router-dom";

const PredictionHome = () => {
  return (
    <Card>
      <Subheading>Prediction</Subheading>
      <Text>Make prediction using Flask API</Text>
      <Link
        to="/prediction"
        className="self-center text-xl py-4 px-8 rounded-lg bg-gray-300"
      >
        Predict
      </Link>
    </Card>
  );
};

export default PredictionHome;
