"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  openModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-[800px] h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer absolute top-4 right-4 z-10 bg-black/70 text-white rounded-full size-8 flex items-center justify-center text-sm hover:bg-black transition-colors"
            >
              ✕
            </button>
            <iframe
              src="https://tally.so/r/5B1zrQ?transparentBackground=1"
              width="100%"
              height="100%"
              frameBorder={0}
              title="Join waiting list"
            />
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}