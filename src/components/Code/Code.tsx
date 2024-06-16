import Card from "../UI/Card";
import Subheading from "../UI/Subheading";
import Text from "../UI/Text";

const Code = () => {
  return (
    <Card>
      <Subheading>Code</Subheading>
      <Text>The code is rendered via NbViewer.com</Text>
      <a
        href="https://nbviewer.org/github/lingeshnafeax/DataScience/blob/master/Chennai%20House%20Price%20Prediction/ChennaiHousePricePrediction.ipynb"
        target="_blank"
        className=" w- mx-auto rounded-md bg-black p-4 px-8 text-center text-xl text-white"
      >
        Link
      </a>
    </Card>
  );
};

export default Code;
