"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { fadeDown } from "@/lib/motion";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Solutions", href: "#solutions", hasDropdown: true },
  { name: "Resources", href: "#insights", hasDropdown: true },
  { name: "About Us", href: "#about", hasDropdown: false },
];

const navSurfaceClass =
  "rounded-2xl border border-white/10 bg-[#474c50]/55 shadow-lg shadow-black/10 backdrop-blur-xl backdrop-saturate-150";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeDown}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6"
    >
      <nav
        className={`mx-auto grid max-w-4xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3 sm:px-6 ${navSurfaceClass}`}
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          N7
        </Link>

        <div className="hidden items-center justify-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-300 transition-colors hover:text-white"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden justify-end lg:flex">
          <Button variant="outline" size="sm" className="px-5">
            Request Demo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="col-start-3 justify-self-end text-white transition-transform active:scale-95 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`mx-auto mt-3 max-w-4xl p-6 lg:hidden ${navSurfaceClass}`}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Button variant="outline" size="md" className="mt-4 w-full">
              Request Demo
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
