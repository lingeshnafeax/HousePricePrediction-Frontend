import Card from "./Card";
import Subheading from "./Subheading";
import ToolDescription from "./ToolDescription";

interface ToolData {
  name: string;
  url: string;
  description: string;
}

const Tools: React.FC = () => {
  const toolsData: ToolData[] = [
    {
      name: "Numpy",
      url: "/src/assets/numpy.png",
      description:
        "NumPy is a fundamental package for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays efficiently. NumPy forms the foundation of many other Python scientific libraries due to its powerful array manipulation capabilities.",
    },
    {
      name: "Pandas",
      url: "/src/assets/pandas.png",
      description:
        "Pandas is a powerful Python library for data manipulation and analysis. It provides data structures and functions for working with structured data, such as tables and time series. Pandas is widely used in data science and analysis tasks, including data cleaning, exploration, and transformation.",
    },
    {
      name: "Plotly",
      url: "/src/assets/plotly.png",
      description:
        "Plotly is a Python library for interactive data visualization. It provides a wide range of chart types and customization options for creating visually appealing and interactive plots. Plotly can be used for exploratory data analysis, presentation-quality graphics, and building interactive dashboards.",
    },
    {
      name: "Scikit-Learn",
      url: "/src/assets/sklearn.png",
      description:
        "Scikit-learn, commonly referred to as sklearn, is a popular machine learning library for Python. It provides simple and efficient tools for data mining and data analysis, built on top of other Python libraries such as NumPy, SciPy, and Matplotlib. Scikit-learn is designed to be user-friendly, accessible, and highly extensible, making it suitable for both beginners and experienced machine learning practitioners.",
    },
  ];

  return (
    <Card>
      <Subheading>Tools</Subheading>
      <div className="flex justify-around text-center mt-5">
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
