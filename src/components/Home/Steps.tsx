import Card from "./Card";
import Points from "./Points";
import Subheading from "./Subheading";

const Steps = () => {
  const steps: String[] = [
    "Import all the necessary libraries",
    "Load the dataset",
    "Preprocess the data such as handling missing values, correcting mistakes, removing unnecessary columns, encoding categorical values",
    "Perform exploratory data analysis",
    "Perform feature selection using correlation, Variance threshold",
    "Split the data into independent and dependent",
    "Scale the independent data",
    "Train the data using different model such as RandomForestRegressor, GradientBoostingRegressor, AdaBoost Regressor, SVR, XGB Regressor",
    "Comapare the R squared of all the model and select the best of them",
    "Perform cross validation to check if the model works on all part of the data",
    "Perform hyperparamter tuning by testing with different parameter and select the best parameters",
    "Lets us start to make predictions",
  ];
  let i: number = 0;
  return (
    <Card>
      <Subheading>Working</Subheading>
      {steps.map((step: String) => {
        i += 1;
        return <Points key={i}>{step}</Points>;
      })}
    </Card>
  );
};

export default Steps;
