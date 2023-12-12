import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 h-[200px] text-center border-t p-8  mt-16  flex flex-col ">
      <p>
        &copy; Chef Zozo 2023 | Developed By
        <a
          className="hover:bg-black hover:text-white"
          href="https://Phantom3.dev"
        >
          Phantom3.dev
        </a>
      </p>
      <div className="flex  justify-center">
        <a href="http://instagram.com/zaenbnabil/">
          <FaInstagram className="bg-pink-500 w-[25px] h-[25px] m-1 mt-5" />
        </a>

        <a href="https://t.snapchat.com/wdlh7kWD">
          {" "}
          <FaSnapchatGhost className=" bg-yellow-500 text-gray-300 w-[25px] h-[25px] m-1 mt-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
