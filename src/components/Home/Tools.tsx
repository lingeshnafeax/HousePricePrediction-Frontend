import Card from "./Card";
import Subheading from "./Subheading";
import ToolDescription from "./ToolDescription";
import Numpy from "/src/assets/numpy.png";
import Pandas from "/src/assets/pandas.png";
import Plotly from "/src/assets/plotly.png";
import SkLearn from "/src/assets/sklearn.png";

interface ToolData {
  name: string;
  url: string;
  description: string;
}

const Tools: React.FC = () => {
  const toolsData: ToolData[] = [
    {
      name: "Numpy",
      url: Numpy,
      description:
        "NumPy is a fundamental package for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays efficiently. NumPy forms the foundation of many other Python scientific libraries due to its powerful array manipulation capabilities.",
    },
    {
      name: "Pandas",
      url: Pandas,
      description:
        "Pandas is a powerful Python library for data manipulation and analysis. It provides data structures and functions for working with structured data, such as tables and time series. Pandas is widely used in data science and analysis tasks, including data cleaning, exploration, and transformation.",
    },
    {
      name: "Plotly",
      url: Plotly,
      description:
        "Plotly is a Python library for interactive data visualization. It provides a wide range of chart types and customization options for creating visually appealing and interactive plots. Plotly can be used for exploratory data analysis, presentation-quality graphics, and building interactive dashboards.",
    },
    {
      name: "Scikit-Learn",
      url: SkLearn,
      description:
        "Scikit-learn, commonly referred to as sklearn, is a popular machine learning library for Python. It provides simple and efficient tools for data mining and data analysis, built on top of other Python libraries such as NumPy, SciPy, and Matplotlib. Scikit-learn is designed to be user-friendly, accessible, and highly extensible, making it suitable for both beginners and experienced machine learning practitioners.",
    },
  ];

  return (
    <Card>
      <Subheading>Tools</Subheading>
      <div className="flex justify-around sm:flex-row flex-col gap-10 text-center mt-5">
        {toolsData.map((tool: ToolData) => (
          <ToolDescription
            name={tool.name}
            imgUrl={tool.url}
            desc={tool.description}
          ></ToolDescription>
        ))}
      </div>
    </Card>
  );
};

export default Tools;
