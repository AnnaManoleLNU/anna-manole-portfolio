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
    setIsChecked(theme === "light");
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
        "peer inline-flex h-7 w-13 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
      )}
      onCheckedChange={handleToggle}
      checked={isChecked}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
        )}
      >
        {isChecked ? <Moon /> : <Sun />}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
}
