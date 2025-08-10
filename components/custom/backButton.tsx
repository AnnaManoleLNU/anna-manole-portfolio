"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // fallback if there's no history
    }
  };

  return (
    <motion.button
      aria-label="Go back"
      onClick={handleBack}
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-background/70 shadow-sm backdrop-blur-md"
      whileHover={{ scale: 1.06, rotate: -1.5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <span className="absolute inset-0 rounded-full ring-0 transition-all duration-300 group-hover:ring-8 group-hover:ring-primary/10" />
      <motion.span
        whileHover={{ x: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        className="relative"
      >
        <ArrowLeft className="h-5 w-5" />
      </motion.span>
    </motion.button>
  );
}
