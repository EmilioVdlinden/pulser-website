import SectionTitle from "@/components/section-title";
import { ArrowUpRightIcon, SparkleIcon } from "lucide-react";
import { features } from "@/data/features";
import AnimatedContent from "@/components/animated-content";

export default function FeaturesSection() {
    return (
        <section id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
                <div>
                    <div className="p-4 pt-16 md:p-16 flex flex-col items-start md:sticky md:top-26">
                        <SectionTitle
                            dir="left"
                            icon={SparkleIcon}
                            title="Your Social Pilot"
                            subtitle="Stop worrying about what to post next. Pulser automates your entire social presence while keeping you in the driver’s seat."
                        />
                        <AnimatedContent className="p-4 md:p-6 bg-orange-500 w-full rounded-xl mt-12 shadow-lg shadow-orange-200">
                            <p className="text-lg text-white font-medium">
                                High-quality content, scheduled and published—no manual work required.
                            </p>

                            <a href="#" className="bg-white w-max hover:bg-gray-50 px-5 py-2 rounded-full mt-6 flex items-center gap-1 font-semibold text-orange-600 transition-all hover:scale-105" >
                                Start growing now
                                <ArrowUpRightIcon size={20} />
                            </a>
                        </AnimatedContent>
                    </div>
                </div>
                
                <div className="p-4 pt-16 md:p-16 space-y-6">
                    {features.map((feature, index) => (
                        <AnimatedContent 
                            key={index} 
                            className={`${feature.cardBg} flex flex-col items-start p-6 rounded-xl w-full md:sticky md:top-26 border border-gray-200/50 shadow-sm`}
                        >
                            <div className={`${feature.iconBg} p-2 text-white rounded-lg`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-base font-bold mt-4 text-zinc-900">{feature.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{feature.description}</p>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}