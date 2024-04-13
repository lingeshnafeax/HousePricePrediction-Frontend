const Subheading = (props: any) => {
  return (
    <div>
      <span
        className={`  rounded-md bg-black p-3 text-3xl  font-semibold text-white ${props.className}`}
      >
        {props.children}
      </span>
    </div>
  );
};

export default Subheading;
