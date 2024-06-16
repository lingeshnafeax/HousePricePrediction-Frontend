import WrapperInputDiv from "../UI/WrapperInputDiv";
import ErrorMessage from "../UI/ErrorMessage";
import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormLabel from "../UI/FormLabel";
import Subheading from "../UI/Subheading";
interface InputType {
  INT_SQFT: number[];
  DIST_MAINROAD: number[];
  N_BEDROOM: number[];
  N_BATHROOM: number[];
  PARK_FACIL: number[];
  QS_ROOMS: number[];
  QS_BATHROOM: number[];
  QS_BEDROOM: number[];
  QS_OVERALL: number[];
  REG_FEE: number[];
  COMMIS: number[];
  AREA: string[];
  SALE_COND: string[];
  BUILDTYPE: string[];
  UTILITY_AVAIL: string[];
  STREET: string[];
  MZZONE: string[];
}

const PredictionForm = () => {
  const [predicted, setPredicted] = useState(0);
  const setPredictedValue = (price: any) => {
    setPredicted(price);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<InputType>();
  // const onSubmit = (data: Inputype) => {
  //   console.log(data);
  // };
  const onSubmit: SubmitHandler<InputType> = async (formData: InputType) => {
    // Convert each property of formData into an array if not already one
    const formDataForSubmission: InputType = {} as InputType;
    for (let key in formData) {
      if (formData.hasOwnProperty(key)) {
        const formField = formData[key as keyof InputType];
        if (!Array.isArray(formField)) {
          formDataForSubmission[key as keyof InputType] = [formField]; // Ensure it's always an array
        }
      }
    }

    const url = "https://house-price-backend-ix4u.onrender.com";
    try {
      const response = await axios.post(url, formDataForSubmission);
      setPredictedValue(response.data.prediction);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex flex-col gap-7 text-xl ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col justify-center gap-7">
          <Subheading className="!bg-white !text-black">
            Enter the details
          </Subheading>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor={"sqft"}
            >
              Enter squarefeet (500-2500)
            </FormLabel>
            <input
              className="rounded-lg  p-3 "
              id="sqft"
              type="number"
              {...register("INT_SQFT", {
                valueAsNumber: true,
                min: { value: 500, message: "Value must be greater than 500" },
                max: { value: 2500, message: "Value must be lesser than 2500" },
                required: "Enter value between 500 and 2500",
              })}
              placeholder="Square Feet"
            />
            {touchedFields.INT_SQFT && errors.INT_SQFT && (
              <ErrorMessage>{errors.INT_SQFT.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor={"dist"}
            >
              Enter distance from mainroad (0-200)
            </FormLabel>
            <input
              id="dist"
              className="rounded-lg  p-3 "
              type="number"
              {...register("DIST_MAINROAD", {
                valueAsNumber: true,
                min: { value: 0, message: "Value must be greater than 0" },
                max: { value: 200, message: "Value must be lesser than 200" },
                required: "Enter value between 0 and 200",
              })}
              placeholder="Distance from Main Road"
            />
            {touchedFields.DIST_MAINROAD && errors.DIST_MAINROAD && (
              <ErrorMessage>{errors.DIST_MAINROAD.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="n_bedroom"
            >
              Enter number of bedrooms (0-4)
            </FormLabel>
            <input
              id="n_bedroom"
              className="rounded-lg  p-3 "
              type="number"
              {...register("N_BEDROOM", {
                valueAsNumber: true,
                min: { value: 0, message: "Enter value above zero" },
                max: { value: 4, message: "Enter value above 4" },
                required: "Enter value between 0 and 4",
              })}
              placeholder="No of bedrooms"
            />
            {touchedFields.N_BEDROOM && errors.N_BEDROOM && (
              <ErrorMessage>{errors.N_BEDROOM.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor={"n_bathroom"}
            >
              Enter no of bathroom (0-4)
            </FormLabel>
            <input
              id="n_bathroom"
              className="rounded-lg  p-3 "
              type="number"
              {...register("N_BATHROOM", {
                valueAsNumber: true,
                min: { value: 0, message: "Enter value above zero" },
                max: { value: 4, message: "Enter value above 4" },
                required: "Enter value between 0 and 4",
              })}
              placeholder="No of bathrooms"
            />
            {touchedFields.N_BATHROOM && errors.N_BATHROOM && (
              <ErrorMessage>{errors.N_BATHROOM.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor={"parking"}
            >
              Select parking facility{" "}
            </FormLabel>
            <select
              className="rounded-lg  p-3 "
              id="parking"
              {...register("PARK_FACIL", { valueAsNumber: true })}
            >
              <option value={1}>YES</option>
              <option value={0}>NO</option>
            </select>
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="qs_rooms"
            >
              Enter quality of rooms (2-5)
            </FormLabel>
            <input
              id="qs_rooms"
              type="number"
              className="rounded-lg  p-3 "
              {...register("QS_ROOMS", {
                valueAsNumber: true,
                min: { value: 2, message: "Enter value above 2" },
                max: { value: 5, message: "Enter value below 5" },
                required: "Enter value between 2 and 5",
              })}
              placeholder="Quality of rooms"
            />
            {touchedFields.QS_ROOMS && errors.QS_ROOMS && (
              <ErrorMessage>{errors.QS_ROOMS.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="qs_bathroom"
            >
              Enter the quality of bathrooms (2-5)
            </FormLabel>
            <input
              id="qs_bathroom"
              className="rounded-lg  p-3 "
              type="number"
              {...register("QS_BATHROOM", {
                valueAsNumber: true,
                min: { value: 2, message: "Enter value above 2" },
                max: { value: 5, message: "Enter value below 5" },
                required: "Enter value between 2 and 5",
              })}
              placeholder="Quality of bathroom"
            />
            {touchedFields.QS_BATHROOM && errors.QS_BATHROOM && (
              <ErrorMessage>{errors.QS_BATHROOM.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="qs_bedroom"
            >
              Enter the quality of bedrooms (2-5)
            </FormLabel>
            <input
              id="qs_bedroom"
              className="rounded-lg  p-3 "
              type="number"
              {...register("QS_BEDROOM", {
                valueAsNumber: true,
                min: { value: 2, message: "Enter value above 2" },
                max: { value: 5, message: "Enter value below 5" },
                required: "Enter value between 2 and 5",
              })}
              placeholder="Quality of bedroom"
            />
            {touchedFields.QS_BEDROOM && errors.QS_BEDROOM && (
              <ErrorMessage>{errors.QS_BEDROOM.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="qs_overall"
            >
              Enter overall quality (2-5)
            </FormLabel>
            <input
              id="qs_overall"
              className="rounded-lg  p-3 "
              type="number"
              {...register("QS_OVERALL", {
                valueAsNumber: true,
                min: { value: 2, message: "Enter value above 2" },
                max: { value: 5, message: "Enter value below 5" },
                required: "Enter value between 2 and 5",
              })}
              placeholder="Overall Quality"
            />
            {touchedFields.QS_OVERALL && errors.QS_OVERALL && (
              <ErrorMessage>{errors.QS_OVERALL.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="reg"
            >
              Enter registration fees (70k - 1 million)
            </FormLabel>
            <input
              className="rounded-lg  p-3 "
              id="reg"
              type="number"
              {...register("REG_FEE", {
                valueAsNumber: true,
                min: {
                  value: 70000,
                  message: "Enter value greater than 70000",
                },
                max: {
                  value: 1000000,
                  message: "Enter value less than 1000000",
                },
                required: "Enter value between 70k to 1 million",
              })}
              placeholder="Registration fee"
            />
            {touchedFields.REG_FEE && errors.REG_FEE && (
              <ErrorMessage>{errors.REG_FEE.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="commis"
            >
              Enter commission amount (5k to 500k)
            </FormLabel>
            <input
              id="commis"
              className="rounded-lg  p-3 "
              type="number"
              {...register("COMMIS", {
                valueAsNumber: true,
                min: { value: 5000, message: "Enter value greater than 5000" },
                max: {
                  value: 500000,
                  message: "Enter value greater than 500000",
                },
                required: "Enter value between 5k to 500k ",
              })}
              placeholder="Commission"
            />
            {touchedFields.COMMIS && errors.COMMIS && (
              <ErrorMessage>{errors.COMMIS.message}</ErrorMessage>
            )}
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="area"
            >
              Select an area
            </FormLabel>
            <select
              className="rounded-lg  p-3 "
              id="area"
              {...register("AREA")}
              defaultValue={""}
            >
              <option value="">Select an area</option>
              <option value="Karapakam">Karapakam</option>
              <option value="Adyar">Adyar</option>
              <option value="Velachery">Velachery</option>
              <option value="Chrompet">Chrompet</option>
              <option value="KK Nagar">KK Nagar</option>
              <option value="T Nagar">T Nagar</option>
              <option value="Anna Nagar">Anna Nagar</option>
            </select>
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="sales"
            >
              Select a sales condition
            </FormLabel>
            <select
              className="rounded-lg  p-3 "
              id="sales"
              {...register("SALE_COND")}
              defaultValue={""}
            >
              <option value="">Select an sales conditon</option>
              <option value="AbNormal">AbNormal</option>
              <option value="Family">Family</option>
              <option value="Partial">Partial</option>
              <option value="AdjLand">AdjLand</option>
              <option value="Normal Sale">Normal Sale</option>
            </select>
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="buildtype"
            >
              Select a buildtype
            </FormLabel>
            <select
              className="rounded-lg  p-3 "
              id="buildtype"
              {...register("BUILDTYPE")}
              defaultValue={""}
            >
              <option value="">Select a buildtype</option>
              <option value="Commercial">Commercial</option>
              <option value="Others">Others</option>
              <option value="House">House</option>
            </select>
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="utility"
            >
              Select an utility
            </FormLabel>
            <select
              className="rounded-lg  p-3 "
              id="utility"
              {...register("UTILITY_AVAIL")}
              defaultValue={""}
            >
              <option value="">Select utility available</option>
              <option value="All Pub">All Pub</option>
              <option value="ELO">ELO</option>
              <option value="NoSeWa">NOSeWa</option>
            </select>
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="street"
            >
              Select type of street
            </FormLabel>
            <select
              className="rounded-lg  p-3 "
              id="street"
              {...register("STREET")}
              defaultValue={""}
            >
              <option value="">Select street</option>
              <option value="Paved">Paved</option>
              <option value="Gravel">Gravel</option>
              <option value="No Access">No Access</option>
            </select>
          </WrapperInputDiv>
          <WrapperInputDiv>
            <FormLabel
              className="rounded-md bg-black p-4 text-white"
              htmlFor="zone"
            >
              Select type of zone
            </FormLabel>
            <select
              className="rounded-lg  p-3 "
              id="zone"
              {...register("MZZONE")}
              defaultValue={""}
            >
              <option value="">Select zone</option>
              <option value="A">A</option>
              <option value="RL">RL</option>
              <option value="I">I</option>
              <option value="C">C</option>
              <option value="RH">RH</option>
              <option value="RM">RM</option>
            </select>
          </WrapperInputDiv>

          <input
            type="submit"
            className=" mx-auto mb-12 w-full rounded-lg  bg-black py-4 text-white"
          />
        </div>
      </form>
      {predicted != 0 && (
        <p className=" mx-auto mb-12 rounded-lg bg-emerald-400 p-2 text-center text-white sm:w-5/12">
          The predicted price{" "}
          <span className="block sm:inline-block">Rs.{predicted}</span>
        </p>
      )}
    </div>
  );
};

export default PredictionForm;
