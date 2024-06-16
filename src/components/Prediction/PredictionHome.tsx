import Card from "../UI/Card";
import Subheading from "../UI/Subheading";
import Text from "../UI/Text";
import { Link } from "react-router-dom";

const PredictionHome = () => {
  return (
    <Card>
      <Subheading>Prediction</Subheading>
      <Text>Make prediction using Flask API</Text>
      <Link
        to="/prediction"
        className="mb-10 self-center rounded-lg bg-black px-8 py-4 text-xl text-white"
      >
        Predict
      </Link>
    </Card>
  );
};

export default PredictionHome;
