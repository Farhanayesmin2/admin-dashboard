import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    const body = document.body;
    if (colorMode === "dark") {
      body.classList.add("dark");
      body.style.backgroundColor = "#1f2937";
    } else {
      body.classList.remove("dark");
      body.style.backgroundColor = "#ffffff";
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
