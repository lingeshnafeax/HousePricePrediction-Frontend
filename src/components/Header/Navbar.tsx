import LoadingText from "../UI/Library/LoadingText";
import TypingText from "../UI/Library/TypingText";

const Navbar = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 bg-black py-10 text-white sm:gap-7">
      <p className=" text-center text-3xl  font-semibold  sm:text-5xl ">
        <LoadingText></LoadingText>
      </p>
      <TypingText></TypingText>
    </div>
  );
};

export default Navbar;
