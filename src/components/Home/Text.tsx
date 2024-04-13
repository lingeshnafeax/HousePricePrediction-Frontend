const Text = (props: any) => {
  return (
    <p
      className={`mt-3 rounded-lg leading-10 sm:mt-7 sm:p-10 sm:text-xl sm:leading-10 ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export default Text;
