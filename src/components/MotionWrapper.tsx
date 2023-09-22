// PageWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function MotionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        onAnimationStart={() => {
          document.body.classList.add("overflow-hidden");
        }}
        onAnimationComplete={() => {
          document.body.classList.remove("overflow-hidden");
        }}
        key={pathname}
      >
        {children}
      </motion.div>
    </>
  );
}
