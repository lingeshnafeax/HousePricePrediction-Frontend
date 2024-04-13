import Card from "./Card";
import Subheading from "./Subheading";
import Text from "./Text";

const Description = () => {
  return (
    <Card>
      <Subheading>Description</Subheading>
      <Text className="bg-gray-300">
        The aim of this project is to develop a machine learning model that
        predicts house prices in Chennai, India. With the increasing demand for
        real estate in Chennai, accurate price prediction can assist both buyers
        and sellers in making informed decisions. The project involves
        collecting and preprocessing a dataset containing relevant features such
        as location, size, amenities, and other factors influencing house
        prices.
      </Text>
    </Card>
  );
};

export default Description;