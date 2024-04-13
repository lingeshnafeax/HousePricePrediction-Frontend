const Text = (props: any) => {
  return (
    <p
      className={` mt-7 sm:text-xl
      
      
      
      
      leading-10 p-10 rounded-lg ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export default Text;
