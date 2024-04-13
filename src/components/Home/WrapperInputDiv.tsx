const WrapperInputDiv = (props: any) => {
  return <div className="grid grid-cols-2 justify-around gap-y-5">{props.children}</div>;
};

export default WrapperInputDiv;
