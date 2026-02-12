import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { testimonials } from "@/data/testimonials";
import { ShieldCheckIcon, StarIcon } from "lucide-react";

export default function TestimonialSection() {
    return (
        <section id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32 ">
            <div className="p-4 pt-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center ">
                <SectionTitle
                    icon={ShieldCheckIcon}
                    title="What our users say"
                    subtitle="Teams trust Pulser to build, deploy and scale reliable AI agents in real-world production."
                />
                <div className="flex flex-wrap gap-8 items-center justify-center mt-24">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedContent delay={index * 0.10} key={index} className={`p-6 rounded-xl max-w-80 shadow-[0_4px_20px_rgba(0,0,0,0.10)] ${index === 1 ? 'bg-orange-500' : 'bg-white'}`}>
                            <div className="flex items-center gap-1">
                                {Array(testimonial.rating).fill(0).map((_, i) => (
                                    <StarIcon key={i} className={`size-5 ${index === 1 ? 'text-white fill-white' : 'fill-orange-500 text-orange-500'}`} />
                                ))}
                            </div>
                            <p className={`my-4 text-base/7 ${index === 1 ? 'text-white' : 'text-zinc-500'}`}>
                                {testimonial.quote}
                            </p>
                            <div className='flex items-center gap-2 pt-3'>
                                <img className='size-10 rounded-full object-cover' src={testimonial.image} alt={testimonial.name} />
                                <div>
                                    <p className={`font-medium text-gray-800 ${index === 1 ? 'text-white' : ''}`}>{testimonial.name}</p>
                                    <p className={`text-xs ${index === 1 ? 'text-white' : 'text-zinc-500'}`}>{testimonial.handle}</p>
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}