"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { faqs } from "@/data/faqs";
import { ChevronDownIcon, CircleQuestionMarkIcon } from "lucide-react";

export default function FaqSection() {
    // Track which index is open. Default to 0 to keep the first one open.
    const [openIndex, setOpenIndex] = useState();

    return (
        <section id="faq" className="">
            <div className="pt-20 text-center mb-16 flex flex-col items-center gap-6">
            <span className="bg-linear-to-tr from-orange-300 to-orange-500 text-white text-xs px-3 py-1 rounded-full">
                How it works
            </span>
            <SectionTitle
                icon={CircleQuestionMarkIcon}
                title="Got questions?  "
                subtitle="Everything you need to know about Pulser and how to get started."
            />
            </div>
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 ">
                <div className="grid grid-cols-1 max-w-7xl mx-auto">
                    <div className="p-4 md:px-20 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            
                            return (
                                <div 
                                    key={index} 
                                    className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="flex w-full items-center justify-between p-6 select-none cursor-pointer text-left"
                                    >
                                        <h3 className="font-medium text-base text-zinc-900">{faq.question}</h3>
                                        <ChevronDownIcon 
                                            size={20} 
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
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
                                                <div className="p-6 pt-0 text-sm/6 text-zinc-500 max-w-2xl">
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