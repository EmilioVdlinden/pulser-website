"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { faqs } from "@/data/faqs";
import { ChevronDownIcon } from "lucide-react";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq">
            <div className="pt-16 sm:pt-20 text-center mb-10 sm:mb-16 flex flex-col items-center gap-6 px-4">
                <span className="bg-linear-to-tr from-orange-300 to-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    How it works
                </span>
                <SectionTitle
                    title="Got questions?"
                    subtitle="Everything you need to know about Pulser and how to get started."
                />
            </div>

            <div className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="md:px-20 space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between p-4 sm:p-6 select-none cursor-pointer text-left gap-4"
                                    >
                                        <h3 className="font-medium text-sm sm:text-base text-zinc-900">{faq.question}</h3>
                                        <ChevronDownIcon
                                            size={18}
                                            className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm leading-6 text-zinc-500 max-w-2xl">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}