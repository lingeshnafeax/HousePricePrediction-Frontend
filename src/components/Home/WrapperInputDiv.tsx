const WrapperInputDiv = (props: any) => {
  return (
    <div className="grid grid-cols-1 items-start  gap-y-5 text-base sm:grid-cols-2 sm:text-xl">
      {props.children}
    </div>
  );
};

export default WrapperInputDiv;
