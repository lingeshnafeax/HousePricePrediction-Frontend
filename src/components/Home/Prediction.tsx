import Card from "./Card";
import PredictionForm from "./PredictionForm";

const Prediction = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = "http://127.0.0.1:5000/predict";
  //     const data = {
  //       INT_SQFT: [578],
  //       DIST_MAINROAD: [178],
  //       N_BEDROOM: [1],
  //       N_BATHROOM: [1],
  //       PARK_FACIL: [1],
  //       QS_ROOMS: [4],
  //       QS_BATHROOM: [3.9],
  //       QS_BEDROOM: [4.9],
  //       QS_OVERALL: [4.33],
  //       REG_FEE: [380000],
  //       COMMIS: [14400],
  //       AREA: ["Karapakam"],
  //       SALE_COND: ["AbNormal"],
  //       BUILDTYPE: ["Commercial"],
  //       UTILITY_AVAIL: ["All Pub"],
  //       STREET: ["Paved"],
  //       MZZONE: ["A"],
  //     };

  //     try {
  //       const response = await axios.post(url, data);
  //       console.log(response.data.prediction);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <h1 className=" bg-gray-300 w-full text-5xl text-center py-7 font-semibold">Prediction</h1>
      <Card>
        <PredictionForm></PredictionForm>
      </Card>
    </>
  );
};

export default Prediction;
