const ErrorMessage = (props: any) => {
  return <p className=" bg-red-400 text-white p-2 rounded-lg text-center col-span-2">{props.children}</p>;
};

export default ErrorMessage;
