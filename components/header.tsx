"use client";

import { useState } from "react";
import { useModal } from "@/context/modal-context";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <>
      <nav className="fixed top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[calc(100%-24px)] sm:w-[calc(100%-32px)] md:w-auto px-4 sm:px-6 md:px-8 py-2 rounded-full backdrop-blur-md border border-gray-100 bg-white/40">

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-sm font-medium text-gray-900 hover:text-gray-900 transition">
            How it works
          </a>
          <a href="#meet-pulsy" className="text-sm font-medium text-gray-900 hover:text-gray-900 transition">
            Meet Pulsy
          </a>
          <a href="#features" className="text-sm font-medium text-gray-900 hover:text-gray-900 transition">
            Features
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-900 hover:text-gray-900 transition">
            Faq
          </a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center ml-8">
          <button
            onClick={openModal}
            className="cursor-pointer py-2.5 px-6 border border-orange-200 bg-linear-to-tl from-orange-600 to-orange-500 text-white rounded-full font-medium"
          >
            Hire pulsy
          </button>
        </div>

        {/* Mobile: brand + hamburger */}
        <div className="flex md:hidden items-center justify-between w-full">
          <span className="text-sm font-semibold text-gray-900">Pulsy</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] sm:w-[calc(100%-32px)] bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 p-5 md:hidden shadow-lg">
          <div className="flex flex-col gap-1">
            {[
              { href: "#how-it-works", label: "How it works" },
              { href: "#meet-pulsy", label: "Meet Pulsy" },
              { href: "#features", label: "Features" },
              { href: "#faq", label: "Faq" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-gray-900 py-2.5 px-3 rounded-xl hover:bg-black/5 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <button
              onClick={() => { setMobileMenuOpen(false); openModal(); }}
              className="w-full bg-linear-to-tl from-orange-600 to-orange-500 border border-orange-200 text-white text-sm font-medium px-6 py-3 rounded-full transition-transform active:scale-95 mt-2"
            >
              Hire pulsy
            </button>
          </div>
        </div>
      )}
    </>
  );
}