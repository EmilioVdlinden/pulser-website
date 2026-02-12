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
                            title="The Content Engine"
                            subtitle="From trend detection to auto-publishing. Pulser handles the complexity of social growth so you can focus on the big picture."
                        />
                        <AnimatedContent className="p-4 md:p-6 bg-orange-500 w-full rounded-xl mt-12">
                            <p className="text-lg text-white font-medium">
                                Join 500+ creators and brands scaling their presence with AI that actually sounds human.
                            </p>

                            <a href="#" className="bg-white w-max hover:bg-gray-100 px-5 py-2 rounded-full mt-6 flex items-center gap-1 font-medium text-orange-600 transition-colors" >
                                See it in action
                                <ArrowUpRightIcon size={20} />
                            </a>
                        </AnimatedContent>
                    </div>
                </div>
                
                {/* Feature cards will pull from your features data file */}
                <div className="p-4 pt-16 md:p-16 space-y-6">
                    {features.map((feature, index) => (
                        <AnimatedContent key={index} className={`${feature.cardBg} flex flex-col items-start p-6 rounded-xl w-full md:sticky md:top-26`}>
                            <div className={`${feature.iconBg} p-2 text-white rounded-md`}>
                                <feature.icon size={24} />
                            </div>
                            <p className="text-base font-semibold mt-4">{feature.title}</p>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{feature.description}</p>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}