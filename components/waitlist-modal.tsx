"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // TODO: connect to backend or email service
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl animate-fadeIn z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Join the waitlist
            </h2>
            <p className="mt-2 text-gray-600 text-center">
              Be the first to try Pulser and boost your social media effortlessly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="you@business.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
              />
              <button
                type="submit"
                className="cursor-pointer flex items-center justify-center gap-2 w-full rounded-xl bg-orange-500 text-white font-semibold py-3 transition shadow-md"
              >
                Join waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">You're in 🎉</h2>
            <p className="mt-2 text-gray-600">
              We'll notify you as soon as Pulser launches.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-gray-900 text-white py-3 hover:bg-black transition font-semibold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

