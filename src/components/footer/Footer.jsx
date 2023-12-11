import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600 h-[200px] text-center border-t p-8  mt-16 ">
      <p>
        &copy; Chef Zozo 2023 | Developed By
        <a
          className="hover:bg-black hover:text-white"
          href="https://Phantom3.dev"
        >
          {" "}
          Phantom3.dev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
