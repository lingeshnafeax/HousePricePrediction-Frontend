import Card from "./Card";
import Subheading from "./Subheading";
import Text from "./Text";

const Code = () => {
  return (
    <Card>
      <Subheading>Code</Subheading>
      <Text>The code is rendered via NbViewer.com</Text>
      <a
        href="https://nbviewer.org/github/lingeshnafeax/DataScience/blob/master/Chennai%20House%20Price%20Prediction/ChennaiHousePricePrediction.ipynb"
        target="_blank"
        className=" bg-gray-300 p-4 text-xl rounded-md w-36 mx-auto text-center"
      >
        Link
      </a>
    </Card>
  );
};

export default Code;
