"use client";
import { GiCookingPot } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { useState } from "react";
import ThemeSwitcher from "../providers/nextUI/ThemeSwitcher";
import NextLink from "next/link";
import NextImage from "next/image";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownSection,
} from "@nextui-org/react";

const MyNavbar = () => {
  return (
    <Navbar
      className="flex flex-row dark:bg-[#461c49] bg-[#F4D19B] z-50"
      isBordered
    >
      <NavbarBrand>
        <Link as={NextLink} href="/">
          <Image
            as={NextImage}
            priority={true}
            isZoomed
            width={65}
            height={70}
            src="/pixel/zozo.gif"
            alt="NextUI Fruit Image with Zoom"
            className="w-full h-full object-cover"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="shadow"
              className=" dark:bg-[#F4D19B] dark:text-black text-white bg-[#461c49] "
            >
              Open Menu
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
          >
            <DropdownSection
              title="Welcome To My Kitchen"
              showDivider
              className=" flex flex-col justify-center items-center"
            >
              <DropdownItem key="home">
                <Link
                  color="foreground"
                  as={NextLink}
                  href="/"
                  className=" flex flex-col justify-center items-center"
                >
                  <div className=" flex flex-col justify-center items-center">
                    <IoIosHome className="w-[20px] h-[20px]" />
                    <p>Home</p>
                  </div>
                </Link>
              </DropdownItem>
            </DropdownSection>
            <DropdownItem key="dish">
              <Link
                as={NextLink}
                href="/main"
                className=" flex flex-col justify-center items-center dark:text-orange-300 text-purple-700"
              >
                <div className=" flex flex-col justify-center items-center">
                  <GiCookingPot className="w-[30px] h-[30px]" />
                  <p>Main Dish</p>
                </div>
              </Link>
            </DropdownItem>

            <DropdownItem key="desert">
              <Link
                as={NextLink}
                href="/desert"
                className=" flex flex-col justify-center items-center  dark:text-orange-300 text-purple-700"
              >
                <div className=" flex flex-col justify-center items-center">
                  <GiCakeSlice className="w-[20px] h-[20px]" />
                  <p>Deserts</p>
                </div>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent>
        <NavbarItem>
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MyNavbar;
