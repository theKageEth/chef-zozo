"use client";
import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ButtonGroup>
      <Button
        isIconOnly
        className="bg-orange-300"
        variant="shadow"
        onClick={() => setTheme("light")}
      >
        <FaSun />
      </Button>
      <Button
        isIconOnly
        className="bg-purple-600"
        variant="shadow"
        onClick={() => setTheme("dark")}
      >
        <FaMoon />
      </Button>
    </ButtonGroup>
  );
};
export default ThemeSwitcher;
