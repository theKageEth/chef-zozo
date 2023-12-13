import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Scene from "../threejs/Scene";
import Welcome from "../text/Welcome";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F9F3DF] dark:bg-[#32407B] h-[200px] text-center border-t p-8 flex flex-col m-0 ">
        <p>
          &copy; Chef Zozo 2023 | Developed By
          <a
            className="hover:bg-black hover:text-white ml-2 px-2"
            href="https://Phantom3.dev"
          >
            Phantom3.dev
          </a>
        </p>
        <div className="flex  justify-center">
          <a href="http://instagram.com/zaenbnabil/">
            <FaInstagram className="bg-pink-500 dark: text-white w-[25px] h-[25px] m-1 mt-5" />
          </a>

          <a href="https://t.snapchat.com/wdlh7kWD">
            <FaSnapchatGhost className=" bg-yellow-300 text-white w-[25px] h-[25px] m-1 mt-5" />
          </a>
        </div>
        <div className="m-0">
          <Welcome />
        </div>
      </footer>
      <div className="bg-[#F9F3DF] dark:bg-[#32407B] h-[400px]  p-4 block">
        <Scene />
      </div>
    </>
  );
};

export default Footer;
