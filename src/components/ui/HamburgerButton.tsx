"use client";
import { motion } from "framer-motion";
import React from "react";

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
}

const lineVariants = {
  closed: { rotate: 0, y: 0 },
  openTop: { rotate: 45, y: 8 },
  openMiddle: { opacity: 0 },
  openBottom: { rotate: -45, y: -8 },
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ open, onClick }) => (
  <button
    onClick={onClick}
    aria-label={open ? "Cerrar menú" : "Abrir menú"}
    className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
    type="button"
  >
    <motion.span
      className="block w-8 h-1 bg-blue-600 rounded mb-1"
      animate={open ? "openTop" : "closed"}
      variants={lineVariants}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block w-8 h-1 bg-blue-600 rounded mb-1"
      animate={open ? "openMiddle" : "closed"}
      variants={{ closed: { opacity: 1 }, openMiddle: { opacity: 0 } }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block w-8 h-1 bg-blue-600 rounded"
      animate={open ? "openBottom" : "closed"}
      variants={lineVariants}
      transition={{ duration: 0.3 }}
    />
  </button>
);

export default HamburgerButton; 