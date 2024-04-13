
const Card = (props: any) => {
  return <div className=" sm:mx-60 mx-4 mt-10 flex flex-col gap-y-6">{props.children}</div>;
};

export default Card;
