const FormLabel = (props: any) => {
  return (
    <label className={props.className} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};

export default FormLabel;
