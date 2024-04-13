const ErrorMessage = (props: any) => {
  return (
    <p className=" rounded-lg bg-red-400 p-2 text-center text-white sm:col-span-2">
      {props.children}
    </p>
  );
};

export default ErrorMessage;
