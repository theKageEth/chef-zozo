"use client";
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
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuChange = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <Navbar
      className="flex flex-row dark:bg-blue-800 bg-sky-300"
      classNames={{ base: "bg-violet-100 dark:bg-violet-900" }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className=" flex-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className=" flex-2">
        <NavbarBrand>
          <Link as={NextLink} href="/">
            <Image
              as={NextImage}
              priority={true}
              isZoomed
              width={75}
              height={50}
              src="/cake.png"
              alt="NextUI Fruit Image with Zoom"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <NavbarItem>
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link as={NextLink} href="/">
            <Image
              as={NextImage}
              priority={true}
              isZoomed
              width={75}
              height={50}
              src="/cake.png"
              alt="NextUI Fruit Image with Zoom"
              onClick={() => handleMenuChange(false)}
            />
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color="foreground"
            href="/main"
            onClick={() => handleMenuChange(false)}
          >
            Main Dishes
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            as={NextLink}
            isBlock
            color="warning"
            href="/desert"
            onClick={() => handleMenuChange(false)}
          >
            Deserts
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MyNavbar;
