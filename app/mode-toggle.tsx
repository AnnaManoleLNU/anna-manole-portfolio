"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean | null>(null);

  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]); 

  // Handle the theme toggle
  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    setTheme(checked ? "dark" : "light");
  };

  if (isChecked === null) return null;

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary"
      )}
      onCheckedChange={handleToggle}
      checked={isChecked}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none flex h-7 w-7 items-center justify-center rounded-full bg-muted ring-0 transition-transform duration-300 ease-in-out data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0"
        )}
      >
        {isChecked ? <Moon /> : <Sun />}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
}
