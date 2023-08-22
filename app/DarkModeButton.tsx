"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function DarkModeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);
  const [checkbox, setCheckbox] = useState(
    currentTheme === "dark" ? true : false
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!checkbox) {
      setTheme("Light");
    } else {
      setTheme("dark");
    }
  }, [checkbox]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="dark-mode-toggle-container">
      <input
        readOnly
        className="dark-mode-toggle-input"
        type="checkbox"
        checked={checkbox}
      />
      <label
        className="dark-mode-toggle-label"
        onClick={() => {
          setCheckbox((prev) => !prev);
        }}
      >
        <SunIcon className="sun" />

        <MoonIcon className="moon" />
      </label>
    </div>
  );
}

export default DarkModeButton;
