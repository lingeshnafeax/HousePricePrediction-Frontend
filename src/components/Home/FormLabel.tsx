import React from "react";

const FormLabel = (props: any) => {
  return <label htmlFor={props.htmlFor}>{props.children}</label>;
};

export default FormLabel;
