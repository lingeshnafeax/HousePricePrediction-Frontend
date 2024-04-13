const Card = (props: any) => {
  return (
    <div className=" mx-7 flex flex-col gap-y-6 sm:mx-60 sm:mt-10">
      {props.children}
    </div>
  );
};

export default Card;
